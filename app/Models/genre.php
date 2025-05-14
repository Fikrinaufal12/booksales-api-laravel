<?php

namespace App\Models;

class Genre
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'Fiksi'],
            ['id' => 2, 'name' => 'Non-Fiksi'],
            ['id' => 3, 'name' => 'Horor'],
            ['id' => 4, 'name' => 'Romantis'],
            ['id' => 5, 'name' => 'Petualangan'],
        ];
    }
}
