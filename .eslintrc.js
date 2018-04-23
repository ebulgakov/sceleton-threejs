const prettierConfig = require('./.prettierrc');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
};
