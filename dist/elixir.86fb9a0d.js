// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.language = exports.conf = void 0;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
  comments: {
    lineComment: '#'
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: "'",
    close: "'"
  }, {
    open: '"',
    close: '"'
  }],
  autoClosingPairs: [{
    open: "'",
    close: "'",
    notIn: ['string', 'comment']
  }, {
    open: '"',
    close: '"',
    notIn: ['comment']
  }, {
    open: '"""',
    close: '"""'
  }, {
    open: '`',
    close: '`',
    notIn: ['string', 'comment']
  }, {
    open: '(',
    close: ')'
  }, {
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '<<',
    close: '>>'
  }],
  indentationRules: {
    increaseIndentPattern: /^\s*(after|else|catch|rescue|fn|[^#]*(do|<\-|\->|\{|\[|\=))\s*$/,
    decreaseIndentPattern: /^\s*((\}|\])\s*$|(after|else|catch|rescue|end)\b)/
  }
};
/**
 * A Monarch lexer for the Elixir language.
 *
 * References:
 *
 * * Monarch documentation - https://microsoft.github.io/monaco-editor/monarch.html
 * * Elixir lexer - https://github.com/elixir-makeup/makeup_elixir/blob/master/lib/makeup/lexers/elixir_lexer.ex
 * * TextMate lexer (elixir-tmbundle) - https://github.com/elixir-editors/elixir-tmbundle/blob/master/Syntaxes/Elixir.tmLanguage
 * * TextMate lexer (vscode-elixir-ls) - https://github.com/elixir-lsp/vscode-elixir-ls/blob/master/syntaxes/elixir.json
 */

exports.conf = conf;
var language = {
  defaultToken: 'source',
  tokenPostfix: '.elixir',
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }, {
    open: '{',
    close: '}',
    token: 'delimiter.curly'
  }, {
    open: '<<',
    close: '>>',
    token: 'delimiter.angle.special'
  }],
  // Below are lists/regexps to which we reference later.
  declarationKeywords: ['def', 'defp', 'defn', 'defnp', 'defguard', 'defguardp', 'defmacro', 'defmacrop', 'defdelegate', 'defcallback', 'defmacrocallback', 'defmodule', 'defprotocol', 'defexception', 'defimpl', 'defstruct'],
  operatorKeywords: ['and', 'in', 'not', 'or', 'when'],
  namespaceKeywords: ['alias', 'import', 'require', 'use'],
  otherKeywords: ['after', 'case', 'catch', 'cond', 'do', 'else', 'end', 'fn', 'for', 'if', 'quote', 'raise', 'receive', 'rescue', 'super', 'throw', 'try', 'unless', 'unquote_splicing', 'unquote', 'with'],
  constants: ['true', 'false', 'nil'],
  nameBuiltin: ['__MODULE__', '__DIR__', '__ENV__', '__CALLER__', '__STACKTRACE__'],
  // Matches any of the operator names:
  // <<< >>> ||| &&& ^^^ ~~~ === !== ~>> <~> |~> <|> == != <= >= && || \\ <> ++ -- |> =~ -> <- ~> <~ :: .. = < > + - * / | . ^ & !
  operator: /-[->]?|!={0,2}|\*|\/|\\\\|&{1,3}|\.\.?|\^(?:\^\^)?|\+\+?|<(?:-|<<|=|>|\|>|~>?)?|=~|={1,3}|>(?:=|>>)?|\|~>|\|>|\|{1,3}|~>>?|~~~|::/,
  // See https://hexdocs.pm/elixir/syntax-reference.html#variables
  variableName: /[a-z_][a-zA-Z0-9_]*[?!]?/,
  // See https://hexdocs.pm/elixir/syntax-reference.html#atoms
  atomName: /[a-zA-Z_][a-zA-Z0-9_@]*[?!]?|@specialAtomName|@operator/,
  specialAtomName: /\.\.\.|<<>>|%\{\}|%|\{\}/,
  aliasPart: /[A-Z][a-zA-Z0-9_]*/,
  moduleName: /@aliasPart(?:\.@aliasPart)*/,
  // Sigil pairs are: """ """, ''' ''', " ", ' ', / /, | |, < >, { }, [ ], ( )
  sigilSymmetricDelimiter: /"""|'''|"|'|\/|\|/,
  sigilStartDelimiter: /@sigilSymmetricDelimiter|<|\{|\[|\(/,
  sigilEndDelimiter: /@sigilSymmetricDelimiter|>|\}|\]|\)/,
  decimal: /\d(?:_?\d)*/,
  hex: /[0-9a-fA-F](_?[0-9a-fA-F])*/,
  octal: /[0-7](_?[0-7])*/,
  binary: /[01](_?[01])*/,
  // See https://hexdocs.pm/elixir/master/String.html#module-escape-characters
  escape: /\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}|\\./,
  // The keys below correspond to tokenizer states.
  // We start from the root state and match against its rules
  // until we explicitly transition into another state.
  // The `include` simply brings in all operations from the given state
  // and is useful for improving readability.
  tokenizer: {
    root: [{
      include: '@whitespace'
    }, {
      include: '@comments'
    }, // Keywords start as either an identifier or a string,
    // but end with a : so it's important to match this first.
    {
      include: '@keywordsShorthand'
    }, {
      include: '@numbers'
    }, {
      include: '@identifiers'
    }, {
      include: '@strings'
    }, {
      include: '@atoms'
    }, {
      include: '@sigils'
    }, {
      include: '@attributes'
    }, {
      include: '@symbols'
    }],
    // Whitespace
    whitespace: [[/\s+/, 'white']],
    // Comments
    comments: [[/(#)(.*)/, ['comment.punctuation', 'comment']]],
    // Keyword list shorthand
    keywordsShorthand: [[/(@atomName)(:)/, ['constant', 'constant.punctuation']], // Use positive look-ahead to ensure the string is followed by :
    // and should be considered a keyword.
    [/"(?=([^"]|#\{.*?\}|\\")*":)/, {
      token: 'constant.delimiter',
      next: '@doubleQuotedStringKeyword'
    }], [/'(?=([^']|#\{.*?\}|\\')*':)/, {
      token: 'constant.delimiter',
      next: '@singleQuotedStringKeyword'
    }]],
    doubleQuotedStringKeyword: [[/":/, {
      token: 'constant.delimiter',
      next: '@pop'
    }], {
      include: '@stringConstantContentInterpol'
    }],
    singleQuotedStringKeyword: [[/':/, {
      token: 'constant.delimiter',
      next: '@pop'
    }], {
      include: '@stringConstantContentInterpol'
    }],
    // Numbers
    numbers: [[/0b@binary/, 'number.binary'], [/0o@octal/, 'number.octal'], [/0x@hex/, 'number.hex'], [/@decimal\.@decimal([eE]-?@decimal)?/, 'number.float'], [/@decimal/, 'number']],
    // Identifiers
    identifiers: [// Tokenize identifier name in function-like definitions.
    // Note: given `def a + b, do: nil`, `a` is not a function name,
    // so we use negative look-ahead to ensure there's no operator.
    [/\b(defp?|defnp?|defmacrop?|defguardp?|defdelegate)(\s+)(@variableName)(?!\s+@operator)/, ['keyword.declaration', 'white', {
      cases: {
        unquote: 'keyword',
        '@default': 'function'
      }
    }]], // Tokenize function calls
    [// In-scope call - an identifier followed by ( or .(
    /(@variableName)(?=\s*\.?\s*\()/, {
      cases: {
        // Tokenize as keyword in cases like `if(..., do: ..., else: ...)`
        '@declarationKeywords': 'keyword.declaration',
        '@namespaceKeywords': 'keyword',
        '@otherKeywords': 'keyword',
        '@default': 'function.call'
      }
    }], [// Referencing function in a module
    /(@moduleName)(\s*)(\.)(\s*)(@variableName)/, ['type.identifier', 'white', 'operator', 'white', 'function.call']], [// Referencing function in an Erlang module
    /(:)(@atomName)(\s*)(\.)(\s*)(@variableName)/, ['constant.punctuation', 'constant', 'white', 'operator', 'white', 'function.call']], [// Piping into a function (tokenized separately as it may not have parentheses)
    /(\|>)(\s*)(@variableName)/, ['operator', 'white', {
      cases: {
        '@otherKeywords': 'keyword',
        '@default': 'function.call'
      }
    }]], [// Function reference passed to another function
    /(&)(\s*)(@variableName)/, ['operator', 'white', 'function.call']], // Language keywords, builtins, constants and variables
    [/@variableName/, {
      cases: {
        '@declarationKeywords': 'keyword.declaration',
        '@operatorKeywords': 'keyword.operator',
        '@namespaceKeywords': 'keyword',
        '@otherKeywords': 'keyword',
        '@constants': 'constant.language',
        '@nameBuiltin': 'variable.language',
        '_.*': 'comment.unused',
        '@default': 'identifier'
      }
    }], // Module names
    [/@moduleName/, 'type.identifier']],
    // Strings
    strings: [[/"""/, {
      token: 'string.delimiter',
      next: '@doubleQuotedHeredoc'
    }], [/'''/, {
      token: 'string.delimiter',
      next: '@singleQuotedHeredoc'
    }], [/"/, {
      token: 'string.delimiter',
      next: '@doubleQuotedString'
    }], [/'/, {
      token: 'string.delimiter',
      next: '@singleQuotedString'
    }]],
    doubleQuotedHeredoc: [[/"""/, {
      token: 'string.delimiter',
      next: '@pop'
    }], {
      include: '@stringContentInterpol'
    }],
    singleQuotedHeredoc: [[/'''/, {
      token: 'string.delimiter',
      next: '@pop'
    }], {
      include: '@stringContentInterpol'
    }],
    doubleQuotedString: [[/"/, {
      token: 'string.delimiter',
      next: '@pop'
    }], {
      include: '@stringContentInterpol'
    }],
    singleQuotedString: [[/'/, {
      token: 'string.delimiter',
      next: '@pop'
    }], {
      include: '@stringContentInterpol'
    }],
    // Atoms
    atoms: [[/(:)(@atomName)/, ['constant.punctuation', 'constant']], [/:"/, {
      token: 'constant.delimiter',
      next: '@doubleQuotedStringAtom'
    }], [/:'/, {
      token: 'constant.delimiter',
      next: '@singleQuotedStringAtom'
    }]],
    doubleQuotedStringAtom: [[/"/, {
      token: 'constant.delimiter',
      next: '@pop'
    }], {
      include: '@stringConstantContentInterpol'
    }],
    singleQuotedStringAtom: [[/'/, {
      token: 'constant.delimiter',
      next: '@pop'
    }], {
      include: '@stringConstantContentInterpol'
    }],
    // Sigils
    // See https://elixir-lang.org/getting-started/sigils.html
    // Sigils allow for typing values using their textual representation.
    // All sigils start with ~ followed by a letter indicating sigil type
    // and then a delimiter pair enclosing the textual representation.
    // Optional modifiers are allowed after the closing delimiter.
    // For instance a regular expressions can be written as:
    // ~r/foo|bar/ ~r{foo|bar} ~r/foo|bar/g
    //
    // In general lowercase sigils allow for interpolation
    // and escaped characters, whereas uppercase sigils don't
    //
    // During tokenization we want to distinguish some
    // specific sigil types, namely string and regexp,
    // so that they cen be themed separately.
    //
    // To reasonably handle all those combinations we leverage
    // dot-separated states, so if we transition to @sigilStart.interpol.s.{.}
    // then "sigilStart.interpol.s" state will match and also all
    // the individual dot-separated parameters can be accessed.
    sigils: [[/~[a-z]@sigilStartDelimiter/, {
      token: '@rematch',
      next: '@sigil.interpol'
    }], [/~[A-Z]@sigilStartDelimiter/, {
      token: '@rematch',
      next: '@sigil.noInterpol'
    }]],
    sigil: [[/~([a-zA-Z])\{/, {
      token: '@rematch',
      switchTo: '@sigilStart.$S2.$1.{.}'
    }], [/~([a-zA-Z])\[/, {
      token: '@rematch',
      switchTo: '@sigilStart.$S2.$1.[.]'
    }], [/~([a-zA-Z])\(/, {
      token: '@rematch',
      switchTo: '@sigilStart.$S2.$1.(.)'
    }], [/~([a-zA-Z])\</, {
      token: '@rematch',
      switchTo: '@sigilStart.$S2.$1.<.>'
    }], [/~([a-zA-Z])(@sigilSymmetricDelimiter)/, {
      token: '@rematch',
      switchTo: '@sigilStart.$S2.$1.$2.$2'
    }]],
    // The definitions below expect states to be of the form:
    //
    // sigilStart.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>
    // sigilContinue.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>
    //
    // The sigilStart state is used only to properly classify the token (as string/regex/sigil)
    // and immediately switches to the sigilContinue sate, which handles the actual content
    // and waits for the corresponding end delimiter.
    'sigilStart.interpol.s': [[/~s@sigilStartDelimiter/, {
      token: 'string.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.interpol.s': [[/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'string.delimiter',
          next: '@pop'
        },
        '@default': 'string'
      }
    }], {
      include: '@stringContentInterpol'
    }],
    'sigilStart.noInterpol.S': [[/~S@sigilStartDelimiter/, {
      token: 'string.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.noInterpol.S': [// Ignore escaped sigil end
    [/(^|[^\\])\\@sigilEndDelimiter/, 'string'], [/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'string.delimiter',
          next: '@pop'
        },
        '@default': 'string'
      }
    }], {
      include: '@stringContent'
    }],
    'sigilStart.interpol.r': [[/~r@sigilStartDelimiter/, {
      token: 'regexp.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.interpol.r': [[/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'regexp.delimiter',
          next: '@pop'
        },
        '@default': 'regexp'
      }
    }], {
      include: '@regexpContentInterpol'
    }],
    'sigilStart.noInterpol.R': [[/~R@sigilStartDelimiter/, {
      token: 'regexp.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.noInterpol.R': [// Ignore escaped sigil end
    [/(^|[^\\])\\@sigilEndDelimiter/, 'regexp'], [/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'regexp.delimiter',
          next: '@pop'
        },
        '@default': 'regexp'
      }
    }], {
      include: '@regexpContent'
    }],
    // Fallback to the generic sigil by default
    'sigilStart.interpol': [[/~([a-zA-Z])@sigilStartDelimiter/, {
      token: 'sigil.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.interpol': [[/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'sigil.delimiter',
          next: '@pop'
        },
        '@default': 'sigil'
      }
    }], {
      include: '@sigilContentInterpol'
    }],
    'sigilStart.noInterpol': [[/~([a-zA-Z])@sigilStartDelimiter/, {
      token: 'sigil.delimiter',
      switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'
    }]],
    'sigilContinue.noInterpol': [// Ignore escaped sigil end
    [/(^|[^\\])\\@sigilEndDelimiter/, 'sigil'], [/(@sigilEndDelimiter)[a-zA-Z]*/, {
      cases: {
        '$1==$S5': {
          token: 'sigil.delimiter',
          next: '@pop'
        },
        '@default': 'sigil'
      }
    }], {
      include: '@sigilContent'
    }],
    // Attributes
    attributes: [// Module @doc* attributes - tokenized as comments
    [/\@(module|type)?doc (~[sS])?"""/, {
      token: 'comment.block.documentation',
      next: '@doubleQuotedHeredocDocstring'
    }], [/\@(module|type)?doc (~[sS])?"/, {
      token: 'comment.block.documentation',
      next: '@doubleQuotedStringDocstring'
    }], [/\@(module|type)?doc false/, 'comment.block.documentation'], // Module attributes
    [/\@(@variableName)/, 'variable']],
    doubleQuotedHeredocDocstring: [[/"""/, {
      token: 'comment.block.documentation',
      next: '@pop'
    }], {
      include: '@docstringContent'
    }],
    doubleQuotedStringDocstring: [[/"/, {
      token: 'comment.block.documentation',
      next: '@pop'
    }], {
      include: '@docstringContent'
    }],
    // Operators, punctuation, brackets
    symbols: [// Code point operator (either with regular character ?a or an escaped one ?\n)
    [/\?(\\.|[^\\\s])/, 'number.constant'], // Anonymous function arguments
    [/&\d+/, 'operator'], // Bitshift operators (must go before delimiters, so that << >> don't match first)
    [/<<<|>>>/, 'operator'], // Delimiter pairs
    [/[()\[\]\{\}]|<<|>>/, '@brackets'], // Triple dot is a valid name (must go before operators, so that .. doesn't match instead)
    [/\.\.\./, 'identifier'], // Punctuation => (must go before operators, so it's not tokenized as = then >)
    [/=>/, 'punctuation'], // Operators
    [/@operator/, 'operator'], // Punctuation
    [/[:;,.%]/, 'punctuation']],
    // Generic helpers
    stringContentInterpol: [{
      include: '@interpolation'
    }, {
      include: '@escapeChar'
    }, {
      include: '@stringContent'
    }],
    stringContent: [[/./, 'string']],
    stringConstantContentInterpol: [{
      include: '@interpolation'
    }, {
      include: '@escapeChar'
    }, {
      include: '@stringConstantContent'
    }],
    stringConstantContent: [[/./, 'constant']],
    regexpContentInterpol: [{
      include: '@interpolation'
    }, {
      include: '@escapeChar'
    }, {
      include: '@regexpContent'
    }],
    regexpContent: [// # may be a regular regexp char, so we use a heuristic
    // assuming a # surrounded by whitespace is actually a comment.
    [/(\s)(#)(\s.*)$/, ['white', 'comment.punctuation', 'comment']], [/./, 'regexp']],
    sigilContentInterpol: [{
      include: '@interpolation'
    }, {
      include: '@escapeChar'
    }, {
      include: '@sigilContent'
    }],
    sigilContent: [[/./, 'sigil']],
    docstringContent: [[/./, 'comment.block.documentation']],
    escapeChar: [[/@escape/, 'constant.character.escape']],
    interpolation: [[/#{/, {
      token: 'delimiter.bracket.embed',
      next: '@interpolationContinue'
    }]],
    interpolationContinue: [[/}/, {
      token: 'delimiter.bracket.embed',
      next: '@pop'
    }], // Interpolation brackets may contain arbitrary code,
    // so we simply match against all the root rules,
    // until we reach interpolation end (the above matches).
    {
      include: '@root'
    }]
  }
};
exports.language = language;
},{}],"../../.nvm/versions/node/v14.16.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65326" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v14.16.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.js"], null)
//# sourceMappingURL=/elixir.86fb9a0d.js.map