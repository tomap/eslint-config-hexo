module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  rules: {
    'curly': [2, 'multi-line'],
    'no-console': 0,
    'no-path-concat': 2,
    'handle-callback-err': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-shadow-restricted-names': 2,
    'block-scoped-var': 2,
    'dot-notation': 2,
    'eqeqeq': [2, 'allow-null'],
    'no-else-return': 1,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-wrappers': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-with': 2,
    'radix': 2,
    'no-self-compare': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    strict: 0
  },
  env: {
    node: true
  }
};
