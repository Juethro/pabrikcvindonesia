<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NumberInformation;

class NumberController extends Controller
{
    function get_number()
    {
        $numberInformation = NumberInformation::latest()->first();
        return $numberInformation;
    }

    function save_number(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'wa_number' => 'required|numeric|digits_between:9,14',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        }
        
        NumberInformation::create([
            'wa_number' => $validatedData['wa_number'],
        ]);

        return $validatedData;
    }
}
