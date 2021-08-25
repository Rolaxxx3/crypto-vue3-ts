module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'vue/no-unused-vars': 'error',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 1,
    'no-warning-comments': [1, {
      'terms': ['hardcoded'], location: 'anywhere',
    }],
    'no-console': [1, {
      allow: ['warn', 'error'],
    }],
    'no-tabs': 1,
    'max-len': [1, {
      'code': 120,
      'comments': 120,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],
    'vue/max-attributes-per-line': [1, {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    'no-unused-vars': 1,
    'comma-dangle': [1, 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
  },
}