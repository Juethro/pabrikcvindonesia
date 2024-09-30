<?php

namespace App\Http\Controllers;
use App\Models\Catalog;

class CatalogController extends Controller
{
    public function index()
    {
        // Mengambil semua katalog beserta nama grupnya menggunakan eager loading
        $catalog = Catalog::with('group')->get();

        // Memodifikasi data katalog untuk menambahkan URL gambar
        $catalog->each(function($item) {
            $item->image = url('storage/' . $item->image_path);
            $item->group_name = $item->group->name; // Menambahkan nama grup ke data
            unset($item->group); // Menghapus relasi 'group' dari hasil akhirnya
        });

        return $catalog;
    }
}
