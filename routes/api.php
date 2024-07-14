<?php

use App\Http\Controllers\FruitController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix'=>'user'], function (){
    Route::post('/', [UserController::class, 'store']);
});


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);


    Route::group(['middleware' => 'auth:api'], function (){
        Route::group(['prefix'=>'fruit'], function (){
            Route::get('/', [FruitController::class, 'index']);
        });
    });
});
