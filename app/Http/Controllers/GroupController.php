<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Group;

class GroupController extends Controller
{
    //
    public function index()
    {
        $groups = Group::all(); // Mengambil semua data dari tabel 'groups'
        return response()->json($groups);
    }
}
