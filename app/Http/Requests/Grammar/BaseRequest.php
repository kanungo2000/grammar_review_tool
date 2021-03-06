<?php

namespace App\Http\Requests\Grammar;

use App\Http\Requests\Request;

abstract class BaseRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:16777215',
            'public_view' => 'required|boolean',
        ]);
    }

    public function extraData()
    {
        return array_merge(parent::extraData(), [
            'user_id' => 0,
        ]);
    }

    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'name' => 'trim',
            'content' => 'trim|remove_cr',
        ]);
    }
}
