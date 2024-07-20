<?php

namespace App\Services;

use App\Models\RefreshToken;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthService
{
    public function login($credentials, $fingerprint)
    {
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $refreshToken = RefreshToken::createToken(auth()->id(), $fingerprint);
        return $this->respondWithToken($token, $refreshToken);
    }
    public function me()
    {
        return response()->json(auth()->user());
    }
    public function logout($fingerprint)
    {
        RefreshToken::invalidateToken(auth()->user()->id, $fingerprint);
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
    public function refresh($refreshToken, $fingerprint)
    {
        $storedToken = RefreshToken::where('refresh_token', $refreshToken)
            ->where('fingerprint', $fingerprint)
            ->first();

        if (!$storedToken || $storedToken->expires_at < now()) {
            return response()->json(['error' => 'Invalid or expired refresh token'], 400);
        }

        try {
            $token = auth()->refresh();
            $newRefreshToken = RefreshToken::createToken($storedToken->user_id, $fingerprint);

            $storedToken->delete();

            return $this->respondWithToken($token, $newRefreshToken);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not refresh token'], 500);
        }

    }
    protected function respondWithToken($token, $refreshToken)
    {
        return response()->json([
            'access_token' => $token,
            'refresh_token' => $refreshToken,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
