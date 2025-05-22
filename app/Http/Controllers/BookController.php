<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return Book::with(['author', 'genre'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|exists:authors,id',
            'genre_id' => 'nullable|exists:genres,id',
        ]);

        return Book::create($validated);
    }

    public function show($id)
    {
        return Book::with(['author', 'genre'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'author_id' => 'sometimes|required|exists:authors,id',
            'genre_id' => 'nullable|exists:genres,id',
        ]);

        $book->update($validated);

        return $book;
    }

    public function destroy($id)
    {
        Book::destroy($id);
        return response()->json(['message' => 'Book deleted']);
    }
}
