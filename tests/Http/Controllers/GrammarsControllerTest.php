<?php

namespace Tests\Http\Controllers;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Pagination\LengthAwarePaginator;
use Tests\TestCase;

class GrammarsControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $this
            ->actingAs($user)
            ->get(route('grammars.index'));

        $this->assertResponseOk();
        $this->assertViewHas('grammars');

        $grammars = $this->response->original->getData()['grammars'];
        $this->assertInstanceOf(LengthAwarePaginator::class, $grammars);
    }

    public function testShow()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->get(route('grammars.show', $grammar->id));

        $this->assertResponseOk();
        $this->assertViewHas('grammar');
    }

    public function testCreate()
    {
        $this
            ->actingAs(factory(User::class)->create())
            ->visit(route('grammars.create'))
            ->type('title1', 'name')
            ->type('content', 'content')
            ->check('public_view')
            ->check('allow_to_comment')
            ->press('Create')
            ->seePageIs(route('grammars.index'));

        $this->seeInDatabase('grammars', [
            'name' => 'title1',
            'content' => 'content',
            'public_view' => 1,
            'allow_to_comment' => 1,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['user_id' => $user->id]);

        $this
            ->actingAs($user)
            ->delete(route('grammars.destroy', $grammar));

        $this->assertRedirectedToRoute('grammars.index');
        $this->assertNull(Grammar::first());
    }
}
