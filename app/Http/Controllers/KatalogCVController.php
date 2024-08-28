<?php

namespace App\Http\Controllers;
use App\Models\Katalogcv;
use Illuminate\Http\Request;

class KatalogCVController extends Controller
{
    public function index()
    {
        $katalogcv = Katalogcv::all();


        $katalogcv->each(function($item) {
            $item->image = url('storage/' . $item->image);
        });

        return $katalogcv;
    }
}
