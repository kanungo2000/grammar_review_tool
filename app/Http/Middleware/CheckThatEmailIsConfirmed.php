<?php

namespace App\Http\Middleware;

use App\Exceptions\EmailIsNotConfirmed;
use Closure;

class CheckThatEmailIsConfirmed
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @throws \App\Exceptions\EmailIsNotConfirmed
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if ($user !== null && !$user->confirmed) {
            throw new EmailIsNotConfirmed();
        }

        return $next($request);
    }
}
