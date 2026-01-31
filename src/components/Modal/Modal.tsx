import { CloseModal } from 'Assets';
import { modalMaxHeightConfig, modalMaxWidthConfig } from 'Config';
import { type ModalProps } from 'Helpers';
import type { FC, PropsWithChildren } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from 'Hooks';

const Modal: FC<PropsWithChildren<ModalProps>> = ({
	modalId,
	manualClose,
	onClose,
	children,
	wrapperClassName,
	variant,
	hideCloseButton,
}) => {
	const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

	const { handleCloseModal, selectModals } = useModalContext();

	const currentModal = !!selectModals(modalId);

	useEffect(() => {
		setPortalRoot(document.getElementById('bt_modal_root'));
	}, []);

	const handleModalVisibility = useCallback(() => {
		if (manualClose) return;
		if (onClose) onClose(false);
		handleCloseModal(modalId);
	}, [modalId, manualClose, onClose]);

	if (!portalRoot || !currentModal) {
		return null;
	}

	const stateClass = ' bt_modal_state--open';
	const variantClass = variant === 'right-sheet' ? ' right-sheet' : '';
	const customClass = wrapperClassName ? ` ${wrapperClassName}` : '';

	const className = `${stateClass}${variantClass}${customClass}`;

	const modalMaxWidth = modalMaxWidthConfig[modalId];
	const modalMaxHeight = modalMaxHeightConfig[modalId];
	const modalStyle = modalMaxWidth ? { maxWidth: modalMaxWidth, maxHeight: modalMaxHeight } : undefined;

	return createPortal(
		<>
			<div className={`bt_modal_mask${stateClass}`} />

			<div
				className={`bt_modal_container${className}`}
				data-testid='modalContainer'
			>
				<div
					className='bt_modal_content'
					style={modalStyle}
				>
					{!hideCloseButton && (
						<div className='bt_modal_content_header'>
							<CloseModal
								aria-label='close modal'
								focusable
								onClick={handleModalVisibility}
								id={`closeBtnRef-${modalId}`}
								className={`bt_modal_close_btn${customClass} svg-dark cursor_pointer`}
							/>
						</div>
					)}
					<div className='bt_modal_content_body'>{children}</div>
				</div>
			</div>
		</>,
		portalRoot
	);
};

export default Modal;
