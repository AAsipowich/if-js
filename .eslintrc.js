module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'no-console': 0,
    'no-undef': 0,
    'func-names': 0,
    'no-restricted-syntax': 0,
    'max-classes-per-file': ['error', 3],
    'no-new': 0,
  },
};
