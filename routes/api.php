<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;

Route::get('/genres', [GenreController::class, 'api']);
Route::get('/authors', [AuthorController::class, 'api']);
