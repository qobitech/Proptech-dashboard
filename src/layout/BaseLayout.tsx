import type { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return <div className='bt_layout_base'>{children}</div>;
};
