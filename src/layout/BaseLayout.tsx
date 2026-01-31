import { Modal } from 'Components';
import { manuallyTriggeredModals, modalContent } from 'Config';
import { useModalContext } from 'Hooks';
import type { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	const { modals } = useModalContext();

	return (
		<div className='bt_layout_base'>
			{children}
			{modals
				.filter((modal) => !manuallyTriggeredModals.includes(modal.id))
				.map((modal) => (
					<Modal
						key={modal.id}
						modalId={modal.id}
						{...modal}
					>
						{modalContent[modal.id]}
					</Modal>
				))}
		</div>
	);
};
