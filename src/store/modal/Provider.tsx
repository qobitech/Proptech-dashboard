import type { ModalConfigIdType, ModalConfigStateType } from 'Config';
import ModalContext from './Context';
import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';

const ModalProvider = ({ children }: PropsWithChildren) => {
	const [modals, setModals] = useState<ModalConfigStateType[]>([]);

	const handleOpenModal = useCallback((modalId: ModalConfigIdType) => {
		setModals((prev) => [...prev, { id: modalId }]);
	}, []);

	const handleCloseModal = useCallback((modalId: ModalConfigIdType) => {
		setModals((prev) => prev.filter((modal) => modal.id !== modalId));
	}, []);

	const handleCloseAllModals = useCallback(() => {
		setModals([]);
	}, []);

	const selectModals = useCallback(
		(modalId: ModalConfigIdType) => {
			return modals.find((modal) => modal.id === modalId);
		},
		[modals]
	);

	const value = useMemo(
		() => ({
			handleOpenModal,
			handleCloseModal,
			selectModals,
			handleCloseAllModals,
			modals,
		}),
		[modals]
	);

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
