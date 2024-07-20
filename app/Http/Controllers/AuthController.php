<?php

namespace App\Http\Controllers;

use App\Models\RefreshToken;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public $service;
    public function __construct(AuthService $service)
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh']]);
        $this->service = $service;
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
            $credentials = request(['email', 'password']);
            $fingerprint = request('fingerprint');
           return $this->service->login($credentials, $fingerprint);
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return $this->service->me();
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $fingerprint = request('fingerprint');
        return $this->service->logout($fingerprint);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $refreshToken = request('refresh_token');
        $fingerprint = request('fingerprint');
        return $this->service->refresh($refreshToken, $fingerprint);
    }

}
