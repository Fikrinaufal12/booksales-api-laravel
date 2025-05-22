<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;


Route::apiResource('genres', GenreController::class);
Route::apiResource('authors', AuthorController::class);
Route::apiResource('books', BookController::class);
