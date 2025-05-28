<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Panggil seeder Author, Book, dan Admin
        $this->call([
            AuthorSeeder::class,
            BookSeeder::class,
            AdminUserSeeder::class, 
            TransactionSeeder::class,
        ]);

        // Tambahkan 1 user biasa
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role' => 'user', 
        ]);
    }
}
