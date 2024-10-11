<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    protected $fillable = ['id','title', 'description', 'image_path', 'group', 'kode'];

    use HasFactory;
    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }
}
