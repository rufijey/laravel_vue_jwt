<?php

namespace App\Console\Commands;

use App\Models\RefreshToken;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CleanupExpiredTokens extends Command
{

    protected $signature = 'tokens:cleanup';

    protected $description = 'Cleanup expired tokens';

    public function handle()
    {
//        $refreshToken = bin2hex(random_bytes(64));
//        $expiresAt = now();
//        RefreshToken::create([
//            'user_id' => 1,
//            'refresh_token' => $refreshToken,
//            'fingerprint' => 123,
//            'expires_at' => $expiresAt,
//        ]);
//        dd(123);
        $deletedTokens = RefreshToken::where('expires_at', '<', now())->delete();

        $this->info("Deleted $deletedTokens expired refresh tokens.");
    }
}
