<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Catalog;

class CatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Catalog::create([
            'title' => 'Simple',
            'description' => 'Desain ini cocok untuk pelamar yang menginginkan tampilan sederhana, elegan, dan profesional, dengan penggunaan elemen yang minimalis untuk menarik perhatian HRD.',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 1,
            'group' => 'Group 1',
        ]);

        Catalog::create([
            'title' => 'Classic',
            'description' => 'Desain klasik ini memberikan tampilan yang tradisional namun profesional, dengan elemen-elemen yang memberikan kesan formal.',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 2,
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Modern',
            'description' => 'Desain modern dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 2,
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Creative',
            'description' => 'Desain kreatif dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 1,
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Professional',
            'description' => 'Desain profesional dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 4,
            'group' => 'Group 3',
        ]);

        Catalog::create([
            'title' => 'Elegant',
            'description' => 'Desain elegan dan minimalis',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 6,
            'group' => 'Group 3',
        ]);

        Catalog::create([
            'title' => 'Minimalist',
            'description' => 'Desain sederhana dan bersih',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 4,
            'group' => 'Group 4',
        ]);
    }
}
