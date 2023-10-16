module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'prettier',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:sonarjs/recommended',
      'plugin:security/recommended',
    ],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      ],
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-extra-parens': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'arrow-parens': 'off',
      curly: 'warn',
      'function-paren-newline': 'off',
      'linebreak-style': [2, 'unix'],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'time', 'timeEnd'],
        },
      ],
      'eol-last': 'error',
      'no-duplicate-imports': 'off',
      'no-return-await': 'error',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'no-restricted-globals': 'off',
      'import/no-cycle': 'off',
      'sonarjs/no-identical-functions': 'off',
      'no-use-before-define': 'off',
      'func-names': 'off',
      'no-param-reassign': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/button-has-type': 'off',
    },
};
