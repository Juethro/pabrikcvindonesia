<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Group;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Group::create(['name' => 'Group 1']);
        Group::create(['name' => 'Group 2']);
        Group::create(['name' => 'Group 3']);
        Group::create(['name' => 'Group 4']);
        Group::create(['name' => 'Group 5']);
    }
}
