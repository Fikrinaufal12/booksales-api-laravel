<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;

// Books tetap pakai apiResource (sesuaikan kalau perlu middleware)
Route::apiResource('books', BookController::class);

// Author routes
Route::get('authors', [AuthorController::class, 'index']);       
Route::get('authors/{author}', [AuthorController::class, 'show']); 

Route::middleware('admin')->group(function () {
    Route::post('authors', [AuthorController::class, 'store']);
    Route::put('authors/{author}', [AuthorController::class, 'update']);
    Route::delete('authors/{author}', [AuthorController::class, 'destroy']);
});

// Genre routes
Route::get('genres', [GenreController::class, 'index']);         
Route::get('genres/{genre}', [GenreController::class, 'show']); 

Route::middleware('admin')->group(function () {
    Route::post('genres', [GenreController::class, 'store']);
    Route::put('genres/{genre}', [GenreController::class, 'update']);
    Route::delete('genres/{genre}', [GenreController::class, 'destroy']);
});
