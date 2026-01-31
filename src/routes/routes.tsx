import { BaseLayout } from '@/layout/BaseLayout';
import { ErrorBoundary } from 'Components';
import { Navigate, Outlet, type RouteObject } from 'react-router';

export const routes: RouteObject[] = [
	{
		path: '/',
		hasErrorBoundary: true,
		ErrorBoundary,
		Component: () => (
			<BaseLayout>
				<Outlet />
			</BaseLayout>
		),
		children: [
			{
				index: true,
				lazy: () => import('../app/(non-protected)/landing'),
			},

			{
				path: '*',
				element: (
					<Navigate
						replace
						to='/'
					/>
				),
			},
		],
	},
];
