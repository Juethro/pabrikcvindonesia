<?php

namespace App\Http\Controllers;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class BannerController extends Controller
{
    public function index()
    {
        $banner = Banner::orderBy('order')->get();

        $banner = $banner->map(function($item) {
            $item->image = url('storage/' . $item->image_path);
            $item->name = str_replace('images/', '', $item->image_path);
            return $item->only(['id', 'image', 'name']);
        });

        return $banner;
    }
    public function save_order(Request $request)
    {
        $validated = $request->validate([
            'ids' => 'required|array',
        ]);
        $ids = $validated['ids'];

        // Ambil semua ID yang ada di database
        // Hapus jika id tidak ada di $ids
        $existingIds = Banner::pluck('id')->toArray(); 
        foreach ($existingIds as $id) {
            if (!in_array($id, $ids)) {
                $banner = Banner::find($id);
                if ($banner) {
                    // Hapus file dari storage
                    Storage::disk('public')->delete($banner->image_path);
                    $banner->delete(); 
                }
                Banner::where('id', $id)->delete(); 
            }
        }

        // Update order based on the index
        foreach ($ids as $index => $id) {
            $banner = Banner::find($id);
            if ($banner) {
                $banner->order = $index + 1; 
                $banner->save();
            }
        }
        return response()->json(['message' => 'Ini berhasil'], 200);
    
    }

    public function save_data(Request $request)
    {   
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $uniqueName = $this->unique_name_generator($file->getClientOriginalName());
            $path = $file->storeAs('images', $uniqueName, 'public');

            $banner = new Banner();
            $banner->image_path = $path;
            $banner->order = Banner::max('order') + 1;
            $banner->save();

            $banner = Banner::orderBy('order')->get();
            $banner = $banner->map(function($item) {
                $item->image = url('storage/' . $item->image_path);
                $item->name = str_replace('images/', '', $item->image_path);
                return $item->only(['id', 'image', 'name']);
            });

            return $banner;
        } else if ($request->has){
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    private function unique_name_generator($originalName)
    {
        $name = pathinfo($originalName, PATHINFO_FILENAME);
        $extension = pathinfo($originalName, PATHINFO_EXTENSION);
        $uniqueName = $name . '.' . $extension;
        $counter = 1;

        while (Banner::where('image_path', 'images/' . $uniqueName)->exists()) {
            $uniqueName = $name . '_' . $counter . '.' . $extension;
            $counter++;
        }

        // Log::info('Unique Name: ' . $uniqueName);

        return $uniqueName;
    }
}
