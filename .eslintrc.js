module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0,
    'no-async-promise-executor': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-console': 2,
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: true,
          Boolean: true,
          Number: true,
          Symbol: true,
          '{}': true,
          Object: false,
          object: true,
          Function: true,
        },
        extendDefaults: true,
      },
    ],
  },
};
