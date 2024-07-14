<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function store(StoreRequest $request){
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        User::FirstOrCreate([
            'email' => $data['email']
        ], $data);
        return response([]);
    }
}
