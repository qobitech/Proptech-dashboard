import type { ModalConfigIdType, ModalConfigStateType } from 'Config';

export interface IModalContext {
	handleOpenModal: (modalId: ModalConfigIdType) => void;
	handleCloseModal: (modalId: ModalConfigIdType) => void;
	selectModals: (modalId: ModalConfigIdType) => ModalConfigStateType | undefined;
	handleCloseAllModals: () => void;
	modals: ModalConfigStateType[];
}
