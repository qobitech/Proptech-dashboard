import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

import stylisticPlugin from '@stylistic/eslint-plugin';
import vitestPlugin from '@vitest/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const project = [path.resolve(__dirname, 'tsconfig.json')];

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
		'CHANGELOG.md',
		'.yarn',
		'.history',
		'.vscode',
		'.git',
		'.github',
		'coverage',
		'build',
		'public',
  ]),
  {
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project,
				},
			},
		},
	},
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			reactHooks.configs['recommended-latest'],
			reactPlugin.configs.flat['jsx-runtime'],
			jsxA11yPlugin.flatConfigs.strict,
			stylisticPlugin.configs.recommended,
			prettierPlugin,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				globals: {
					...globals.browser,
					...globals.serviceworker,
					...vitestPlugin.environments.env.globals,
				},
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
    },
    settings: {
			react: {
				version: 'detect',
			},
		},
    rules: {
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true,
				},
			],
			'@typescript-eslint/no-invalid-void-type': 0,
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'inline-type-imports',
				},
			],
			'arrow-body-style': [2, 'as-needed'],
			'consistent-return': 0,
			'func-names': ['error', 'as-needed'],
			'import/extensions': 0,
			'import/no-extraneous-dependencies': 0,
			'import/prefer-default-export': 0,
			'jsx-a11y/accessible-emoji': 0,
			'jsx-a11y/anchor-is-valid': [
				'warn',
				{
					aspects: ['invalidHref'],
				},
			],
			'jsx-a11y/href-no-hash': 'off',
			'jsx-a11y/label-has-associated-control': 1,
			'jsx-a11y/label-has-for': 0,
			'no-alert': 'error',
			'no-console': [
				'error',
				{
					allow: ['info', 'warn', 'error'],
				},
			],
			'no-debugger': 'error',
			'no-param-reassign': [
				2,
				{
					props: false,
				},
			],
			'no-plusplus': [
				'error',
				{
					allowForLoopAfterthoughts: true,
				},
			],
			'no-restricted-exports': 0,
			'no-shadow': [
				2,
				{
					hoist: 'all',
					allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
				},
			],
			'no-unused-expressions': [
				2,
				{
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],
			'prefer-const': [
				'error',
				{
					destructuring: 'all',
				},
			],
			'radix': 0,
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 1,
			'react-refresh/only-export-components': 'error',
			'react/display-name': 1,
			'react/forbid-prop-types': 0,
			'react/function-component-definition': [
				2,
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/jsx-filename-extension': [
				1,
				{
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
			'react/jsx-props-no-spreading': 0,
			'react/jsx-no-bind': [
				'warn',
				{
					ignoreDOMComponents: false,
					ignoreRefs: false,
					allowArrowFunctions: false,
					allowFunctions: false,
					allowBind: false,
				},
			],
			'react/no-array-index-key': 0,
			'react/no-unescaped-entities': 0,
			'react/no-unknown-property': [
				'error',
				{
					ignore: ['css'],
				},
			],
			'react/prefer-stateless-function': 1,
			'react/prop-types': 2,
			'react/react-in-jsx-scope': 0,
			'react/require-default-props': 0,
			'@stylistic/indent': 0,
			'@stylistic/max-len': 0,
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': [
				'error',
				{
					skipBlankLines: true,
				},
			],
			'@stylistic/quote-props': ['error', 'consistent-as-needed'],
			'@stylistic/quotes': [
				2,
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: 'never',
				},
			],
			'@stylistic/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always',
				},
			],
			'prettier/prettier': [
				'error',
				{},
				{
					usePrettierrc: true,
				},
			],
		},
  },
  {
		plugins: {
			'simple-import-sort': simpleImportSortPlugin,
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
	{
		files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		...testingLibraryPlugin.configs['flat/react'],
		...vitestPlugin.configs.recommended,
	},
])
