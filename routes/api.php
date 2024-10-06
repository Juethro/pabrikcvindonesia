<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\GroupController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Katalog
Route::get('/catalog', [CatalogController::class, 'index']); // Untuk fetch semua data catalog
Route::patch('/catalog/{id}', [CatalogController::class, 'update']); // Untuk update catalog berdasarkan ID
Route::delete('/catalog/{id}', [CatalogController::class, 'destroy']); // Untuk delete

// Banner
Route::get('/cvbanner', [BannerController::class, 'index']);
Route::post('/cvbanner/savefile', [BannerController::class, 'save_data']);
Route::post('/cvbanner/saveorder', [BannerController::class, 'save_order']);

// Group
Route::get('/groups', [GroupController::class, 'index']);