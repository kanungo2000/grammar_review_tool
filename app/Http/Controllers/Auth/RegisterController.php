<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Forms\Auth\RegisterForm;
use Facades\App\Services\UserService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\Rule;
use Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    public function __construct()
    {
        $this->middleware('guest');

        $this->redirectTo = route('grammars.index');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => [
                'required',
                'max:255',
                Rule::unique('users'),
            ],
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users'),
            ],
            'password' => 'required|min:6|confirmed',
            'g-recaptcha-response' => 'required|captcha',
        ], [
            'g-recaptcha-response.*' => Lang::get('auth.captcha_failed'),
        ]);
    }

    protected function create(array $data)
    {
        return UserService::create($data);
    }

    public function showRegistrationForm()
    {
        $form = $this->form(RegisterForm::class, [
            'method' => 'POST',
            'url' => url('/register'),
        ]);

        return view('auth.register', compact('form'));
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        $payload = $request->only([
            'name',
            'email',
            'password',
        ]);
        event(new Registered($this->create($payload)));

        return redirect('login')
            ->with(
                'info',
                'Thanks for signing up. We have sent you confirmation email.'
            );
    }
}
