<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Menampilkan semua data author.
     */
    public function index()
    {
        return Author::all();
    }

    /**
     * Menyimpan data author baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return response()->json(Author::create($validated), 201);
    }

    /**
     * Menampilkan detail author berdasarkan ID.
     */
    public function show($id)
    {
        $author = Author::findOrFail($id); // otomatis akan 404 jika tidak ditemukan
        return response()->json($author);
    }

    /**
     * Memperbarui data author berdasarkan ID.
     */
    public function update(Request $request, $id)
    {
        $author = Author::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $author->update($validated);

        return response()->json($author);
    }

    /**
     * Menghapus author berdasarkan ID.
     */
    public function destroy($id)
    {
        $author = Author::findOrFail($id);
        $author->delete();

        return response()->json(['message' => 'Author deleted successfully']);
    }
}
