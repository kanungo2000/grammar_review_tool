@php
    $options['label_attr']['class'] = config(
        'laravel-form-builder.defaults.horizontal_label_class'
    );
    $rightWrapperClass = config(
        'laravel-form-builder.defaults.horizontal_button_wrapper_class'
    );
@endphp

@extends('laravel-form-builder::button')

