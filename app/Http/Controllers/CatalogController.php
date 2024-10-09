<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\NumberInformation;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function index()
    {
        $catalog = Catalog::with(relations: 'group')->get();
        $wa_number = NumberInformation::latest()->first();

        $catalog->each(function($item) use ($wa_number) {
            $item->image = url('storage/' . $item->image_path);
            $item->group_name = $item->group->name; // Menambahkan nama grup ke data
            $item->wa_number = $wa_number['wa_number']; // Menambahkan nomor WhatsApp ke data
            unset($item->group); // Menghapus relasi 'group' dari hasil akhirnya
        });

        return $catalog;
    }

    public function update(Request $request, $id)
    {
        $catalogItem = Catalog::findOrFail($id);
        $catalogItem->update($request->all());

        return response()->json($catalogItem);
    }

        // Method untuk menghapus catalog berdasarkan ID
    public function destroy($id)
    {
        $catalogItem = Catalog::find($id);

        if (!$catalogItem) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $catalogItem->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}