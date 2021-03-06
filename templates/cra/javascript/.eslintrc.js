module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    project: './jsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    // no import react
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-exports': 'off',
    'react/no-danger': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      react: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
