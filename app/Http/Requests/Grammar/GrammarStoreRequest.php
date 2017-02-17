<?php

namespace App\Http\Requests\Grammar;

class GrammarStoreRequest extends BaseRequest
{
    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'user_id' => [function () {
                return auth()->user()->id;
            }],
        ]);
    }
}
