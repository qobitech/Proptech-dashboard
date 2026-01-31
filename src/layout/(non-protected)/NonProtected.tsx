import type { PropsWithChildren } from 'react';
import Nav from './components/Nav';

const NonProtected = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Nav />
			<>{children}</>
		</>
	);
};

export default NonProtected;
