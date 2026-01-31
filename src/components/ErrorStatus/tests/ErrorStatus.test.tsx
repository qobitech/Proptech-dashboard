import { render, screen } from '@testing-library/react';

import { ErrorStatus } from '../ErrorStatus';

describe('ErrorStatus', () => {
	test('renders title, description and button', () => {
		render(
			<ErrorStatus
				title='Network error'
				description='Please check your connection'
				btnTitle='Retry'
			/>
		);

		expect(screen.getByText('Network error')).toBeInTheDocument();
		expect(screen.getByText('Please check your connection')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
	});
});
