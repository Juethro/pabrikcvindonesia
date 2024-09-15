<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\BannerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Katalog
Route::get('/catalog', [CatalogController::class, 'index']);

// Banner
Route::get('/cvbanner', [BannerController::class, 'index']);
Route::post('/cvbanner/savefile', [BannerController::class, 'save_data']);
Route::post('/cvbanner/saveorder', [BannerController::class, 'save_order']);