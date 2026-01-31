import { DialogBudgeting } from 'Components';
import type { ReactNode } from 'react';

export const modalConfig = {
	initial: 'initialModal',
	testModal: 'test_modal',
	budgetting: 'budgetting',
} as const;

export type ModalConfigKeyType = keyof typeof modalConfig;
export type ModalConfigType = typeof modalConfig;
export type ModalConfigIdType = ModalConfigType[ModalConfigKeyType];
export type ModalConfigVariant = 'right-sheet' | 'default';
export interface ModalConfigStateType {
	id: ModalConfigIdType;
	header?: string;
	wrapperClassName?: string;
	metadata?: unknown;
	dialogMessage?: string;
	variant?: ModalConfigVariant;
	hideCloseButton?: boolean;
}

export const manuallyTriggeredModals: ModalConfigIdType[] = ['test_modal'];

export const modalContent: Record<ModalConfigIdType, ReactNode> = {
	initialModal: null,
	budgetting: <DialogBudgeting />,
	test_modal: null,
};

export const closeModalById = (modalId: ModalConfigIdType) => {
	const modalCloseBtn = document.getElementById(`closeBtnRef-${modalId}`) as HTMLButtonElement | null;
	if (!modalCloseBtn) return;
	modalCloseBtn.click();
};

export const modalMaxWidthConfig: Partial<Record<ModalConfigIdType, string>> = {
	budgetting: '438px',
};

export const modalMaxHeightConfig: Partial<Record<ModalConfigIdType, string>> = {};
