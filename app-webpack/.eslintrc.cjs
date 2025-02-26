module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'commonjs'
  },

  extends: [
    'eslint:recommended',
    'quasar/base'
  ],

  overrides: [
    {
      files: [ '**/*.js' ],
      excludedFiles: [ 'exports/bex/**' ],
      env: {
        es2022: true
        // es2023: true // node 22 and above
      },
      parserOptions: {
        sourceType: 'commonjs',
        ecmaVersion: '2022' // needs to be explicitly stated for some reason
      },
      extends: [
        'quasar/node'
      ]
    },

    {
      files: [ '**/*.mjs' ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },

    {
      files: [ 'exports/bex/**/*.mjs' ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      },
      env: {
        browser: true,
        webextensions: true
      }
    }
  ],

  rules: {
    'no-useless-escape': 'off',
    'no-unused-vars': [ 'error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' } ]
  }
}
