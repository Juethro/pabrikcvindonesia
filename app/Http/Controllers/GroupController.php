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
    public function update(Request $request, $id) {
        $group = Group::findOrFail($id);
        $group->name = $request->name;
        $group->save();
        return response()->json(['message' => 'Group updated successfully']);
    }
}
