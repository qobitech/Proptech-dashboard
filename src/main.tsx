import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';

import './styles/main.scss';
import { BaseLayout } from './layout/BaseLayout.tsx';
import router from './router.ts';
import { Providers } from 'Store';

createRoot(document.getElementById('root')!).render(
	<HelmetProvider>
		<StrictMode>
			<Providers>
				<Suspense
					fallback={
						<BaseLayout>
							<p>Loading...</p>
						</BaseLayout>
					}
				>
					<RouterProvider router={router} />
				</Suspense>
			</Providers>
		</StrictMode>
	</HelmetProvider>
);
