<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as IlluminateTestCase;
use Tests\Traits\CreatesApplication;
use Tests\Traits\TestHelpers;

abstract class TestCase extends IlluminateTestCase
{
    use TestHelpers;
    use CreatesApplication;
}
