module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended',
    'quasar/base'
  ],

  rules: {
    'no-useless-escape': 'off',
    'no-unused-vars': [ 'error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' } ]
  },

  overrides: [
    {
      files: [ '**/*.js' ],
      excludedFiles: [ 'exports/bex/**' ],
      env: {
        es2022: true
        // es2023: true // node 22 and above
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: '2022' // needs to be explicitly stated for some reason
      },
      extends: [
        'quasar/node'
      ]
    },

    {
      files: [ '**/*.cjs' ],
      parserOptions: {
        sourceType: 'commonjs',
        ecmaVersion: 'latest'
      }
    },

    {
      files: [ 'exports/bex/**/*.js' ],
      parserOptions: {
        ecmaVersion: 'latest'
      },
      env: {
        browser: true,
        webextensions: true
      }
    }
  ]
}
