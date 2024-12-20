<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Buat user test
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Jalankan seeder untuk banner
        $this->call(BannerSeeder::class);

        // Jalankan seeder untuk group
        $this->call(GroupSeeder::class);

        // Jalankan seeder untuk menambahkan lebih banyak katalog
        $this->call(CatalogSeeder::class);
    }
}
