<?php

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RightsControllerTest extends TestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testStore()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['owner' => $user->id]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.store', [$grammar->id]);

        $this->post($route, [
            'comment' => true,
            'view' => false,
            'user_id' => $user2->id,
        ], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'comment' => true,
            'view' => false,
        ]);
    }

    public function testUpdate()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create([
            'owner' => $user->id,
        ]);
        $right = factory(Right::class)->create([
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => true,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.update', [$grammar->id, $right->id]);

        $this->put($route, [
            'user_id' => $user2->id,
            'view' => false,
            'comment' => false,
        ], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->seeInDatabase('rights', [
            'user_id' => $user2->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => false,
        ]);
    }

    public function testDestroy()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['owner' => $user->id]);
        $right = factory(Right::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.rights.destroy', [$grammar->id, $right->id]);

        $this->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('rights', [
            'id' => $right->id,
        ]);
    }

    /**
     * @dataProvider unauthorizedProvider
     */
    public function testUnauthorized($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $right = factory(Right::class)->create();

        $cb($this, $user, $grammar, $right);

        $this->assertResponseStatus(403);
    }

    public function unauthorizedProvider()
    {
        return [
            'store: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.store', [$grammar->id]);
                    $testCase->post($route, [], $this->headers('v1', $user));
                },
            ],
            'store: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.store', [$grammar->id]);
                    $testCase->post($route, [], $this->headers('v1', $user));
                },
            ],
            'update: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.update', [$grammar, $right]);
                    $testCase->put($route, [], $this->headers('v1', $user));
                },
            ],
            'update: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.update', [$grammar, $right]);
                    $testCase->put($route, [], $this->headers('v1', $user));
                },
            ],
            'destroy: user is admin' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.destroy', [$grammar, $right]);
                    $testCase->delete($route, [], $this->headers('v1', $user));
                },
            ],
            'destroy: user is not grammar owner' => [
                function ($testCase, $user, $grammar, $right) {
                    $user->update(['is_admin' => true]);

                    $route = app(UrlGenerator::class)->version('v1')
                        ->route('grammars.rights.destroy', [$grammar, $right]);
                    $testCase->delete($route, [], $this->headers('v1', $user));
                },
            ],
        ];
    }
}