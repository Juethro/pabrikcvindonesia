<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Catalog;
use App\Models\Group;

class CatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $group1 = Group::where('name', 'Group 1')->first()->id;
        $group2 = Group::where('name', 'Group 2')->first()->id;
        $group3 = Group::where('name', 'Group 3')->first()->id;
        $group4 = Group::where('name', 'Group 4')->first()->id;
        $group5 = Group::where('name', 'Group 5')->first()->id;

        Catalog::create([
            'title' => 'Simple',
            'description' => 'Desain ini cocok untuk pelamar yang menginginkan tampilan sederhana, elegan, dan profesional, dengan penggunaan elemen yang minimalis untuk menarik perhatian HRD.',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 1,
            'group_id' => $group1,
            'kode' => '01A'
        ]);

        Catalog::create([
            'title' => 'Classic',
            'description' => 'Desain klasik ini memberikan tampilan yang tradisional namun profesional, dengan elemen-elemen yang memberikan kesan formal.',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 2,
            'group_id' => $group2,
            'kode' => '01B'
        ]);

        Catalog::create([
            'title' => 'Modern',
            'description' => 'Desain modern dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 2,
            'group_id' => $group2,
            'kode' => '02B'
        ]);

        Catalog::create([
            'title' => 'Creative',
            'description' => 'Desain kreatif dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 1,
            'group_id' => $group2,
            'kode' => '03B'
        ]);

        Catalog::create([
            'title' => 'Professional',
            'description' => 'Desain profesional dan efektif untuk digunakan keseharian',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 4,
            'group_id' => $group3,
            'kode' => '01C'
        ]);

        Catalog::create([
            'title' => 'Elegant',
            'description' => 'Desain elegan dan minimalis',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 6,
            'group_id' => $group3,
            'kode' => '02C'
        ]);

        Catalog::create([
            'title' => 'Minimalist',
            'description' => 'Desain sederhana dan bersih',
            'image_path' => 'images/sample1.jpg',
            'colors_tag' => 4,
            'group_id' => $group4,
            'kode' => '01D'
        ]);
    }
}
