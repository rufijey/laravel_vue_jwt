<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Http\Resources\FruitResource;
use App\Models\Fruit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class FruitController extends Controller
{
    public function index(){
        $fruits = Fruit::all();
        return FruitResource::collection($fruits);
    }
}
