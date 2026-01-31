import type { PropsWithChildren } from 'react';
import { ModalProvider } from './modal';

const Providers = ({ children }: PropsWithChildren) => {
	return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
