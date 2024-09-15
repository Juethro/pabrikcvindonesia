<?php

namespace App\Http\Controllers;
use App\Models\Catalog;

class CatalogController extends Controller
{
    public function index()
    {
        $catalog = Catalog::all();

        $catalog->each(function($item) {
            $item->image = url('storage/' . $item->image_path);
        });

        return $catalog;
    }
}
