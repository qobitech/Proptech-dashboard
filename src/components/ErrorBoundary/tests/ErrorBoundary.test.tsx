import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import ErrorBoundary from '../ErrorBoundary';

vi.mock('react-router', async (importOriginal: () => Promise<Record<string, unknown>>) => {
	const actual = await importOriginal();

	return {
		...actual,
		useRouteError: vi.fn((): Error => new Error('Boom')),
	};
});

describe('ErrorBoundary', () => {
	test('renders ErrorStatus with message from Error', () => {
		render(<ErrorBoundary />);
		expect(screen.getByText('Something went wrong 😔')).toBeInTheDocument();
		expect(screen.getByText('Boom')).toBeInTheDocument();
	});
});
