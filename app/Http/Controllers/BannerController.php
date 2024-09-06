<?php

namespace App\Http\Controllers;
use App\Models\Banner;

use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function bannercv()
    {
        $banner = Banner::all();

        $banner->each(function($item) {
            $item->image = url('storage/' . $item->image);
        });

        return $banner;
    }
}
