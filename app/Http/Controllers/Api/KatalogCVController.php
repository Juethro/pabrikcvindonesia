<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\KatalogCV;
use App\Http\Requests\KatalogCVRequest;
use App\Http\Resources\KatalogCVResource;

use Illuminate\Http\Request;

class KatalogCVController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $katalogCV = KatalogCV::all();

        
        $katalogCV->each(function($item) {
            $item->image = url('storage/' . $item->image);
        });

        return $katalogCV;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(KatalogCVRequest $request)
    {
        $katalogCV = KatalogCV::create($request->validated());
        return new KatalogCVResource($katalogCV);
    }

    /**
     * Display the specified resource.
     */
    public function show(KatalogCV $katalogCV)
    {
        return new KatalogCVResource($katalogCV);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KatalogCV $katalogCV)
    {
        $katalogCV->update($katalogCV->validated());
        return new KatalogCVResource($katalogCV);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KatalogCV $katalogCV)
    {
        $katalogCV->delete();
        return response()->noContent();
    }
}
