<?php

namespace App\Services;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Http\Requests\Request;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use PDOException;

class GrammarService
{
    /**
     * Rows to delete while comments update.
     * @var array
     */
    protected $deletedRows = [];

    /**
     * Rows which was added in updated grammar.
     * @var array
     */
    protected $addedRows = [];

    /**
     * Diff between two grammars.
     * @var array
     */
    protected $diff = [];

    /**
     * @param Grammar $grammar
     * @param Request $request
     */
    public function update(Grammar $grammar, Request $request)
    {
        try {
            // TODO track user who updated grammar.
            DB::beginTransaction();

            $this->updateComments($grammar, $request);
            $grammar->update($request->all());

            DB::commit();
        } catch (PDOException $e) {
            DB::rollback();
        }
    }

    /**
     * @param Grammar $grammar
     * @param Request $request
     */
    protected function updateComments(Grammar $grammar, Request $request)
    {
        $linesA = explode("\n", $grammar->content);
        $linesB = explode("\n", $request->get('content'));

        $this->addedRows = [];
        $this->deletedRows = [];

        $this->backtrackComments(
            lcs($linesA, $linesB),
            $linesA,
            $linesB,
            count($linesA) - 1,
            count($linesB) - 1
        );

        $this->deletedRows = array_values(array_unique($this->deletedRows));
        sort($this->deletedRows);
        $this->addedRows = array_values(array_unique($this->addedRows));
        sort($this->addedRows);

        if (count($this->deletedRows) > 0) {
            Comment::where('grammar_id', $grammar->id)
                ->whereIn('row', $this->deletedRows)
                ->delete();
        }

        $comments = $this->computeNewRows($grammar);
        Comment::replace($comments->toArray());
    }

    /**
     * Compute new comment rows.
     *
     * @param Grammar $grammar
     *
     * @return Collection
     */
    protected function computeNewRows(Grammar $grammar)
    {
        $comments = Comment::where('grammar_id', $grammar->id)
            ->get();

        $deletedRows = $this->deletedRows;
        $addedRows = $this->addedRows;
        $comments = $comments->map(
            function ($comment) use ($deletedRows, $addedRows) {
                foreach ($deletedRows as $row) {
                    if ($comment->row >= $row) {
                        --$comment->row;
                    }
                }

                foreach ($addedRows as $row) {
                    if ($comment->row >= $row) {
                        ++$comment->row;
                    }
                }

                return $comment;
            }
        );

        return $comments;
    }

    /**
     * Backtrack through lcs matrix to determine which lines were deleted or
     * added.
     *
     * @param array $lcs
     * @param array $linesA
     * @param array $linesB
     * @param int $i
     * @param int $j
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    protected function backtrackComments($lcs, $linesA, $linesB, $i, $j)
    {
        $lineWasAdded = false;
        if (isset($lcs[$i][$j - 1], $lcs[$i - 1][$j])) {
            $lineWasAdded = $lcs[$i][$j - 1] >= $lcs[$i - 1][$j];
        }

        if ($i >= 0 && $j >= 0 && $linesA[$i] === $linesB[$j]) {
            $this->backtrackComments($lcs, $linesA, $linesB, $i - 1, $j - 1);
        } elseif ($j >= 0 && ($i === -1 || $lineWasAdded)) {
            // Line was added.
            $this->addedRows[] = $j + 1;
            $this->backtrackComments($lcs, $linesA, $linesB, $i, $j - 1);
        } elseif ($i >= 0 && ($j === -1 || !$lineWasAdded)) {
            // Line was removed.
            $this->deletedRows[] = $i + 1;
            $this->backtrackComments($lcs, $linesA, $linesB, $i - 1, $j);
        }
    }

    public function diff(Grammar $grammar)
    {
        $parent = $grammar->parent()->first();
        $content = $parent !== null ? $parent->content : $grammar->content;

        $linesA = explode("\n", $content);
        $linesB = explode("\n", $grammar->content);

        $this->diff = [];
        $this->backtrackDiff(
            lcs($linesA, $linesB),
            $linesA,
            $linesB,
            count($linesA) - 1,
            count($linesB) - 1
        );

        return $this->diff;
    }

    /**
     * Backtrack through lcs matrix to produce diff.
     *
     * @param array $lcs
     * @param array $linesA
     * @param array $linesB
     * @param int $i
     * @param int $j
     *
     * @return array
     */
    protected function backtrackDiff($lcs, $linesA, $linesB, $i, $j)
    {
        $lineWasAdded = false;
        if (isset($lcs[$i][$j - 1], $lcs[$i - 1][$j])) {
            $lineWasAdded = $lcs[$i][$j - 1] >= $lcs[$i - 1][$j];
        }

        if ($i >= 0 && $j >= 0 && $linesA[$i] === $linesB[$j]) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i - 1, $j - 1);
            $this->diff[] = ['line' => $linesA[$i], 'type' => 'unmodified'];
        } elseif ($j >= 0 && ($i === -1 || $lineWasAdded)) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i, $j - 1);
            $this->diff[] = ['line' => $linesB[$j], 'type' => 'added'];
        } elseif ($i >= 0 && ($j === -1 || !$lineWasAdded)) {
            $this->backtrackDiff($lcs, $linesA, $linesB, $i - 1, $j);
            $this->diff[] = ['line' => $linesA[$i], 'type' => 'removed'];
        }
    }
}
