<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Panggil seeder lainnya
        $this->call([
            AuthorSeeder::class,
            BookSeeder::class,
        ]);

        // Tambahkan user dummy
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
