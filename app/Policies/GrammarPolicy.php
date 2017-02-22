<?php

namespace App\Policies;

use App\Entities\Grammar;
use App\Entities\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GrammarPolicy
{
    use HandlesAuthorization;

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function before(User $user, $ability)
    {
        if ($user->is_admin
            && !in_array($ability, [
                'manageRights',
                'update',
                'delete',
            ], true)
        ) {
            return true;
        }
    }

    public function delete(User $user, Grammar $grammar)
    {
        if (!$grammar->isLeaf()) {
            return false;
        }

        return $user->is_admin
            || $user->isGrammarOwner($grammar);
    }

    public function view(User $user, Grammar $grammar)
    {
        if (!$grammar->isLeaf()) {
            return $user->can('view', $grammar->leaves()->first());
        }

        return $grammar->public_view
            || $user->isGrammarOwner($grammar)
            || $user->hasRight(['view', 'comment', 'edit'], $grammar);
    }

    public function comment(User $user, Grammar $grammar)
    {
        if (!$grammar->isLeaf()) {
            return $user->can('comment', $grammar->leaves()->first());
        }

        return $user->isGrammarOwner($grammar)
            || ($grammar->allow_to_comment
                && $user->hasRight(['comment', 'edit'], $grammar));
    }

    public function manageRights(User $user, Grammar $grammar)
    {
        if (!$grammar->isLeaf()) {
            return false;
        }

        return $user->is_admin
            || $user->isGrammarOwner($grammar);
    }

    public function update(User $user, Grammar $grammar)
    {
        if (!$grammar->isLeaf()) {
            return false;
        }

        return $user->is_admin
            || $user->isGrammarOwner($grammar)
            || $user->hasRight('edit', $grammar);
    }
}
