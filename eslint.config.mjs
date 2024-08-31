import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  ...tsEslint.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      js: pluginJs,
      prettier: pluginPrettier,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
