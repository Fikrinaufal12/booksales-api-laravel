<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TransactionController;

// =====================
// Books
// =====================
Route::apiResource('books', BookController::class);

// =====================
// Authors
// =====================
Route::get('authors', [AuthorController::class, 'index']);
Route::get('authors/{author}', [AuthorController::class, 'show']);

Route::middleware('admin')->group(function () {
    Route::post('authors', [AuthorController::class, 'store']);
    Route::put('authors/{author}', [AuthorController::class, 'update']);
    Route::delete('authors/{author}', [AuthorController::class, 'destroy']);
});

// =====================
// Genres
// =====================
Route::get('genres', [GenreController::class, 'index']);
Route::get('genres/{genre}', [GenreController::class, 'show']);

Route::middleware('admin')->group(function () {
    Route::post('genres', [GenreController::class, 'store']);
    Route::put('genres/{genre}', [GenreController::class, 'update']);
    Route::delete('genres/{genre}', [GenreController::class, 'destroy']);
});

// =====================
// Orders
// =====================
Route::middleware('auth:sanctum')->group(function () {
    Route::get('orders/{id}', [OrderController::class, 'show']);
    Route::post('orders', [OrderController::class, 'store']);
    Route::put('orders/{id}', [OrderController::class, 'update']);
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('orders', [OrderController::class, 'index']);
    Route::delete('orders/{id}', [OrderController::class, 'destroy']);
});

// =====================
// Transactions
// =====================
Route::middleware('auth:sanctum')->group(function () {
    Route::post('transactions', [TransactionController::class, 'store']);
    Route::get('transactions/{id}', [TransactionController::class, 'show']);
    Route::put('transactions/{id}', [TransactionController::class, 'update']);
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('transactions', [TransactionController::class, 'index']);
    Route::delete('transactions/{id}', [TransactionController::class, 'destroy']);
});
