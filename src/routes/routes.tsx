import { ErrorBoundary } from 'Components';
import { BaseLayout, NonProtectedLayout } from 'Layout';
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
				Component: () => (
					<NonProtectedLayout>
						<Outlet />
					</NonProtectedLayout>
				),
				children: [
					{
						index: true,
						lazy: () => import('../app/(non-protected)/landing'),
					},
				],
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
