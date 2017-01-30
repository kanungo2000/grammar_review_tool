<?php

namespace App\Http\Controllers;

use App\Entities\Grammar;
use App\Http\Forms\Grammars\CreateForm;
use App\Http\Requests\Grammar\GrammarStoreRequest;
use Illuminate\Support\Facades\Auth;

class GrammarsController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:delete,grammar', ['only' => ['destroy']]);
        $this->middleware('can:view,grammar', ['only' => ['show']]);
    }

    public function index()
    {
        $grammars = Auth::user()
            ->availableGrammars()
            ->with('owner')
            ->paginate(10);

        return view('grammars.index', compact('grammars'));
    }

    public function show(Grammar $grammar)
    {
        return view('grammars.show', compact('grammar'));
    }

    public function create()
    {
        $form = $this->form(CreateForm::class, [
            'method' => 'POST',
            'url' => route('grammars.store'),
        ]);

        return view('grammars.create', compact('form'));
    }

    public function store(GrammarStoreRequest $request)
    {
        Grammar::create($request->all());

        return redirect()->route('grammars.index');
    }
}
