<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    // Mengembalikan semua genre
    public function index()
    {
        return Genre::all();
    }

    // Method khusus jika kamu pakai Route::get('/genres', [GenreController::class, 'api']);
    public function api()
    {
        return Genre::all();
    }
}
