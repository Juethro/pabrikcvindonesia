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
            'image_path' => "images/Banner1.png",
            'order'=> 1
        ]);

        Banner::create([
            'image_path' => "images/Banner2.png",
            'order'=> 2
        ]);

        Banner::create([
            'image_path' => "images/Banner3.png",
            'order'=> 3
        ]);
    }
}
