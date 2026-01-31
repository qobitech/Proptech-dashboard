import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults } from 'vitest/config';
import { loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return {
		plugins: [react()],
		resolve: {
			alias: {
				'root': path.resolve(__dirname, './'),
				'Assets': path.resolve(__dirname, './src/assets'),
				'Components': path.resolve(__dirname, './src/components'),
				'Config': path.resolve(__dirname, './src/config'),
				'Helpers': path.resolve(__dirname, './src/helpers'),
				'Hooks': path.resolve(__dirname, './src/hooks'),
				'Layout': path.resolve(__dirname, './src/layout'),
				'Store': path.resolve(__dirname, './src/store'),
				'@': path.resolve(__dirname, './src'),
			},
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './src/helpers/test/setupTests.ts',
			css: true,
			pool: 'forks',
			include: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			exclude: [...configDefaults.exclude],
			coverage: {
				reportsDirectory: './unit-report',
				exclude: [...(configDefaults.coverage.exclude ?? []), '**/*.mdx', '**/dist/*', '**/routes/*', 'src/config/*'],
				thresholds: {
					lines: 70.55,
					functions: 66.9,
					branches: 73.9,
					statements: 70.55,
				},
			},
		},
	};
});
