import { screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { renderWithProviders } from '@/helpers/test/test-utils';

import Modal from '../Modal';

describe('Modal', () => {
	const modalRoot = document.createElement('div');
	modalRoot.id = 'bt_modal_root';

	beforeEach(() => {
		document.body.appendChild(modalRoot);
	});

	afterEach(() => {
		document.body.removeChild(modalRoot);
		vi.clearAllMocks();
	});

	test('renders modal', () => {
		renderWithProviders(
			<Modal modalId='test_modal'>
				<div>Modal Content</div>
			</Modal>,
			{
				preloadedState: {
					modals: [{ id: 'test_modal' }],
				},
			}
		);

		const modal = screen.getByTestId('modalContainer');

		expect(modal).toHaveClass('bt_modal_container');
	});

	test('does not render close button when hideCloseButton is true', () => {
		renderWithProviders(
			<Modal
				modalId='logout'
				hideCloseButton
			>
				<div>Modal Content</div>
			</Modal>,
			{
				preloadedState: {
					modals: [{ id: 'logout' }],
				},
			}
		);

		expect(screen.queryByLabelText('close modal')).not.toBeInTheDocument();
	});

	test('renders modal container into portal', async () => {
		renderWithProviders(
			<Modal
				modalId='notifications'
				hideCloseButton
			>
				<div>Body</div>
			</Modal>,
			{
				preloadedState: {
					modals: [{ id: 'notifications' }],
				},
			}
		);
		expect(document.querySelector('.bt_modal_container')).toBeInTheDocument();
		expect(await screen.findByText('Body')).toBeInTheDocument();
	});
});
