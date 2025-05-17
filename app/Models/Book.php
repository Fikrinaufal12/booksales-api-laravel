<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'author_id'];

    // Relasi: satu buku dimiliki oleh satu author
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
