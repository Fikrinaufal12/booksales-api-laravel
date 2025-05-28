<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transaction';

    protected $fillable = [
        'order_number', 'customer_id', 'book_id', 'total_amount'
    ];

    public function user ()
    {
        return $this -> belongsTo(user::class);
    }

      public function book ()
    {
        return $this -> belongsTo(Book::class);
    }

}
