<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Banner;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Banner::create([
            'gambar' => "images/Banner1.png"
        ]);

        Banner::create([
            'gambar' => "images/Banner2.png"
        ]);

        Banner::create([
            'gambar' => "images/Banner3.png"
        ]);
    }
}
