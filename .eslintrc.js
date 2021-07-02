module.exports = {
  "plugins": ["cucumber","filenames"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "process": "readonly",
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "filenames/match-regex": [2, "^[a-z_.]+$", true],
    "indent": ["error", 2, {
      "VariableDeclarator": {
        "var": 2,
        "let": 2,
        "const": 3
      }
    }],
    "quotes": ["error", "single", {
      "allowTemplateLiterals": true
    }],
    "func-style": ["error", "declaration", {
      "allowArrowFunctions": true
    }],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "space-before-function-paren": ["error", "always"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1
    }],
    "max-len": ["error", 128],
    "no-use-before-define": "warn",
    "no-magic-numbers": "off",
    "arrow-parens": ["error", "as-needed"],
    "max-params": ["error", 5],
    "eol-last": ["error", "always"],
    "no-multi-spaces": ["error", {
      exceptions: {
        "VariableDeclarator": true,
        "ImportDeclaration": true
      }
    }],
    "one-var-declaration-per-line": ["error", "always"],
    "no-extra-parens": "error",
    "no-param-reassign": [2, {"props": false}]
  }
};
