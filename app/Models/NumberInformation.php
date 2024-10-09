<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NumberInformation extends Model
{
    use HasFactory;
    protected $fillable = ['wa_number'];
}
