module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'commonjs'
  },

  extends: [
    'eslint:recommended',
    'quasar/base'
  ],

  rules: {
    'no-unused-vars': [ 'error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' } ]
  }
}
