<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Catalog;

class AddMoreCatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Catalog::create([
            'title' => 'Elegant',
            'description' => 'Desain elegan dan minimalis',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 3',
        ]);

        Catalog::create([
            'title' => 'Minimalist',
            'description' => 'Desain sederhana dan bersih',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 4',
        ]);
    }
}
