<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CatalogItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('catalog_items')->insert([
            [
                'Nama_CV' => 'CV 1',
                'Deskripsi' => 'Desain sederhana dan efektif untuk digunakan',
                'Gambar' => base64_encode(file_get_contents(public_path('images/1. Logo.jpg'))),
                'Kategori' => 'Kategori 1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'Nama_CV' => 'CV 2',
                'Deskripsi' => 'Desain klasik dan efektif untuk digunakan',
                'Gambar' => base64_encode(file_get_contents(public_path('images/1. Logo.jpg'))),
                'Kategori' => 'Kategori 2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
