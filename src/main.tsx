import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';

import './styles/main.scss';
import { BaseLayout } from './layout/BaseLayout.tsx';
import router from './router.ts';

createRoot(document.getElementById('root')!).render(
	<HelmetProvider>
		<StrictMode>
			<Suspense
				fallback={
					<BaseLayout>
						<p>Loading...</p>
					</BaseLayout>
				}
			>
				<RouterProvider router={router} />
			</Suspense>
		</StrictMode>
	</HelmetProvider>
);
