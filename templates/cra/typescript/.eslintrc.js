module.exports = {
  extends: ['airbnb', 'plugin:jsx-a11y/recommended', 'prettier'],
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    project: './jsconfig.json'
  },
  rules: {
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
    // no import client
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
    // It's not accurate in the monorepo style
    'no-restricted-exports': 'off',
    'arrow-body-style': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-promise-executor-return': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'react-hooks'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
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
        // no import client
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true }
        ],
        // It's not accurate in the monorepo style
        'no-restricted-exports': 'off',
        'arrow-body-style': 'off',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-console': 'off',
        'no-nested-ternary': 'off',
        'no-promise-executor-return': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
        'no-plusplus': 'off',
        '@typescript-eslint/indent': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true, typedefs: true }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            'checksVoidReturn': false
          }
        ]
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
};
