'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {LemonParserVisitor} from 'js/Parser/Lemon/LemonParserVisitor'
import {LemonParser} from 'js/Parser/Lemon/LemonParser'
import common from '../common'

/**
 * @extends LemonParserVisitor
 */
class Tree2HtmlVisitor extends LemonParserVisitor {
  /**
   * Create Tree2HtmlVisitor.
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {AccessManager} accessManager
   * @returns {Tree2HtmlVisitor}
   * @constructor
   */
  constructor(tokens, grammar, owner, comments, accessManager) {
    super()

    this.tokens = tokens
    this.grammar = grammar
    this.owner = owner
    this.comments = comments
    this.accessManager = accessManager
    this.html = ''
    this._buffer = ''
    this._newLineRegex = /\r\n|\n|\r/
  }

  /**
   * @param {FileContext} ctx
   */
  visitFile(ctx) {
    this._buffer
      += this._textOfHiddenTokensToLeft(ctx.children[0].start.tokenIndex)

    ctx.children.forEach(child => {
      if (child instanceof LemonParser.GrammarRuleContext) {
        this.visitGrammarRule(child)
      } else {
        this.visitDirective(child)
      }
    })

    this.html += `<div class="grammar-view__info">${this.grammar.name}</div>`
    this.html += '<table class="grammar-view__table">'

    let number = 1
    const lines = this._buffer.split(this._newLineRegex)
    const canUserComment = this.accessManager.canUserComment(Laravel.user)

    for (const line of lines) {
      this.html += `
<tr class="grammar-view__row">
  <td class="grammar-view__row-number">${number}</td>
  <td class="grammar-view__code">`

      if (canUserComment) {
        this.html += `<a class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-leftside-button"
                         href="#">+</a>`
      }

      this.html += `${line}</td></tr>`

      if (this._isAnyCommentOnLine(number)) {
        this.html += '<tr><td class="grammar-view__line-comments" colspan="2">'

        for (const comment of this._allCommentsOnLine(number)) {
          const updateOrDelete = this.accessManager
            .canUserUpdateOrDeleteComment(Laravel.user, comment)

          this.html += common.commentTemplate(
            comment.user.name,
            comment.content,
            comment.id,
            updateOrDelete
          )
        }

        if (canUserComment) {
          this.html += `${common.addCommentToRowButton}`
        }

        this.html += `</td></tr>`
      }

      ++number
    }

    this.html += '</table>'
  }

  /**
   * @param {GrammarRuleContext} ctx
   */
  visitGrammarRule(ctx) {
    this.visitLeftSide(ctx.leftSide())

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.ASSIGN(), {closeSpan: true})

    this.visitRightSide(ctx.rightSide())
  }

  /**
   * @param {LeftSideContext} ctx
   */
  visitLeftSide(ctx) {
    const column = ctx.children[0].getSymbol().column
    this._buffer += `<span class="grammar-view__ls-nonterminal" data-column="${column}">`
    this.visitTerminal(ctx.NONTERMINAL(), {closeSpan: true})

    if (ctx.children.length > 1) {
      this.visitParam(ctx.param())
    }
  }

  /**
   * @param {RightSideContext} ctx
   */
  visitRightSide(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof LemonParser.SymbolContext) {
        this.visitSymbol(child, {fromRightSide: true})
      } else if (child instanceof LemonParser.ParamContext) {
        this.visitParam(child)
      } else if (child instanceof TerminalNodeImpl) {
        this._buffer += '<span class="grammar-view__punct">'
        this.visitTerminal(child, {closeSpan: true})
      } else if (child instanceof LemonParser.PrecedenceContext) {
        this.visitPrecedence(child)
      } else if (child instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(child)
      }
    })
  }

  /**
   * @param {PrecedenceContext} ctx
   */
  visitPrecedence(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.LBRACKET(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__param">'
    this.visitTerminal(ctx.TERMINAL(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.RBRACKET(), {closeSpan: true})
  }

  /**
   * @param {SymbolContext} ctx
   * @param {bool} [fromParam=false]
   * @param {bool} [fromRightSide=false]
   * @param {bool} [fromDirective=false]
   */
  visitSymbol(ctx, {
    fromParam = false,
    fromRightSide = false,
    fromDirective = false,
  } = {}) {
    const child = ctx.children[0]
    const column = child.getSymbol().column
    const columnAttr = `data-column="${column}"`

    if (fromParam) {
      this._buffer += '<span class="grammar-view__param">'
      this.visitTerminal(child, {closeSpan: true})
    } else if (fromRightSide) {
      const text = child.getText()

      if (text[0] === text[0].toUpperCase()) { // Terminal.
        this._buffer += `<span class="grammar-view__terminal" ${columnAttr}>`
      } else { // Nonterminal.
        this._buffer += `<span class="grammar-view__rs-nonterminal" ${columnAttr}>`
      }

      this.visitTerminal(child, {closeSpan: true})
    } else if (fromDirective) {
      this._buffer += '<span class="grammar-view__symbol">'
      this.visitTerminal(child, {closeSpan: true})
    }
  }

  /**
   * @param {ParamContext} ctx
   */
  visitParam(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.children[0], {closeSpan: true})

    this.visitSymbol(ctx.symbol(), {fromParam: true})

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.children[2], {closeSpan: true})
  }

  /**
   * @param {DirectiveContext} ctx
   */
  visitDirective(ctx) {
    const children = ctx.children

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PERCENT(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__directive">'
    this.visitTerminal(children[1], {closeSpan: true})

    for (let i = 2; i < children.length; ++i) {
      if (children[i] instanceof LemonParser.SymbolContext) {
        this.visitSymbol(children[i], {fromDirective: true})
      } else if (children[i] instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(children[i])
      } else if (children[i] instanceof TerminalNodeImpl) {
        if (children[i].getText() === '.') {
          this._buffer += '<span class="grammar-view__punct">'
        } else {
          this._buffer += '<span class="grammar-view__symbol">'
        }
        this.visitTerminal(children[i], {closeSpan: true})
      }
    }
  }

  /**
   * @param {CodeBlockContext} ctx
   */
  visitCodeBlock(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.BEGIN_CODE(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.END_CODE(), {closeSpan: true})
  }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {bool} [closeSpan=false]
   */
  visitTerminal(ctx, {closeSpan = false} = {}) {
    this._buffer += ctx.symbol.text
    if (closeSpan) {
      this._buffer += '</span>'
    }

    this._buffer += this._textOfHiddenTokensToRight(ctx.symbol.tokenIndex)
  }

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToLeft(index) {
    return this._tokensText(this.tokens.getHiddenTokensToLeft(index))
  }

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToRight(index) {
    return this._tokensText(this.tokens.getHiddenTokensToRight(index))
  }

  /**
   * @param {Array} tokens
   * @returns {string}
   * @private
   */
  _tokensText(tokens) {
    tokens = tokens || []
    let result = ''
    for (const token of tokens) {
      result += token.text
    }
    return result
  }

  /**
   * Checks if there are any comments on passed line.
   * @param lineNumber
   * @returns {boolean}
   */
  _isAnyCommentOnLine(lineNumber) {
    return this.comments.some((comment) => comment.row === lineNumber)
  }

  /**
   * Returns all comments on passed line.
   * @param lineNumber
   * @returns {Array}
   */
  _allCommentsOnLine(lineNumber) {
    return this.comments.filter((comment) => comment.row === lineNumber)
  }
}

export default Tree2HtmlVisitor
