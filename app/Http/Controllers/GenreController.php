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

    // Method alternatif kalau pakai /genres/api
    public function api()
    {
        return Genre::all();
    }

    // Menyimpan genre baru
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $genre = Genre::create([
            'name' => $request->name
        ]);

        return response()->json($genre, 201);
    }
}
