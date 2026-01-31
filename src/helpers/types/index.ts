import type { ModalConfigIdType } from 'Config';
import type { ReactNode, RefObject, SVGProps } from 'react';

export type SVGComponentProps = SVGProps<SVGSVGElement>;

export interface ModalProps {
	modalId: ModalConfigIdType;
	header?: ReactNode;
	manualClose?: boolean;
	closeBtnRef?: RefObject<HTMLButtonElement>;
	onClose?: (_state?: boolean) => void;
	wrapperClassName?: string;
	dialogMessage?: string;
	variant?: 'right-sheet' | 'default';
	hideCloseButton?: boolean;
}
