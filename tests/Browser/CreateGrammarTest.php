<?php

namespace Tests\Browser;

use App\Entities\User;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Grammars\CreatePage;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;
use Tests\Traits\DatabaseMigrations;
use Tests\Traits\SudoDatabaseTransactions;

/**
 * @group grammars
 */
class CreateGrammarTest extends DuskTestCase
{
    use DatabaseMigrations;
    use SudoDatabaseTransactions;

    /**
     * @param callable $setupCb
     * @dataProvider usersProvider
     */
    public function testUserCanCreateGrammar(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->on(new CreatePage())
                ->create('Grammar Name', $this->getGrammarContent(), 1)
                ->logout();
        });
    }

    public function usersProvider()
    {
        return [
            'regular user' => [
                function () {
                    $user = factory(User::class)->create();

                    return [$user];
                },
            ],
            'admin' => [
                function () {
                    $admin = factory(User::class, 'admin')->create();

                    return [$admin];
                },
            ],
        ];
    }

    /**
     * @param callable $setupCb
     * @dataProvider usersProvider
     */
    public function testUserCannotCreateGrammarWithSyntaxErrors(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->clickLink('Create')
                ->on(new CreatePage())
                ->type('@content', ',%>WTF<%,')
                ->press('Create')
                ->seeElement('@syntax-errors')
                ->assertSee('mismatched input')
                ->create('Grammar Name', $this->getGrammarContent(), 1)
                ->logout();
        });
    }

    /**
     * @param callable $setupCb
     * @dataProvider usersProvider
     */
    public function testUserCanCreateGrammarThroughCreateNewButton(callable $setupCb)
    {
        $this->browse(function (Browser $browser) use ($setupCb) {
            list($user) = $setupCb();

            $browser
                ->loginAs($user)
                ->visit(new HomePage())
                ->click('@create-new-button')
                ->clickLink('New grammar')
                ->on(new CreatePage())
                ->create('Grammar Name', $this->getGrammarContent(), 1)
                ->logout();
        });
    }
}