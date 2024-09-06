<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Catalog;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Catalog::create([
            'title' => 'Simple',
            'description' => 'Desain simpel dan efektif untuk digunakan',
            'long_description' => 'Desain ini cocok untuk pelamar yang menginginkan tampilan sederhana, elegan, dan profesional, dengan penggunaan elemen yang minimalis untuk menarik perhatian HRD.',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 1',
        ]);

        Catalog::create([
            'title' => 'Classic',
            'description' => 'Desain klasik dan efektif untuk digunakan keseharian',
            'long_description' => 'Desain klasik ini memberikan tampilan yang tradisional namun profesional, dengan elemen-elemen yang memberikan kesan formal.',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Modern',
            'description' => 'Desain modern dan efektif untuk digunakan keseharian',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Creative',
            'description' => 'Desain kreatif dan efektif untuk digunakan keseharian',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 2',
        ]);

        Catalog::create([
            'title' => 'Professional',
            'description' => 'Desain profesional dan efektif untuk digunakan keseharian',
            'image' => 'images/sample1.jpg',
            'group' => 'Group 3',
        ]);
    }        
}
