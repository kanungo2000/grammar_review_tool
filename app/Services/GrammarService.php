<?php

namespace App\Services;

use App\Entities\Grammar;
use App\Http\Requests\Request;

class GrammarService
{
    /**
     * @param Request $request
     */
    public function update(Grammar $grammar, Request $request)
    {
        $grammar->update($request->all());
    }
}
