@extends('layouts.app')

@section('content')
    <div class="container">
        @include('grammars.partials.buttons')

        <div class="row">
            <div class="col-md-12">
                <grammar-view grammar-id="{{ $grammar->id }}"></grammar-view>
            </div>
        </div>
    </div>
@endsection
