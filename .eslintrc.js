module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'eslint linebreak-style': ['off', 'windows'],
    'prettier/prettier': ['error'],
    'no-unused-vars': [
      'off',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
