<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Author; // ← Tambahkan ini!

class BookFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'author_id' => Author::factory(), // Sekarang bisa pakai Author langsung
        ];
    }
}
