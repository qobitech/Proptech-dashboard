import { ErrorStatus } from 'Components';
import { useCallback, useEffect } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoundary = () => {
	const error = useRouteError();

	const isVitePreloadError = sessionStorage.getItem('vitePreloadError') === 'true';
	const vitePreloadErrorCount = parseInt(sessionStorage.getItem('vitePreloadErrorCount') ?? '0', 10);
	const shouldShowError = !(isVitePreloadError && vitePreloadErrorCount <= 1);

	useEffect(() => {
		if (shouldShowError) {
			// capture error
		}
	}, [error, shouldShowError]);

	const reloadPage = useCallback(() => {
		window.location.reload();
	}, []);

	let message = 'An unexpected error occurred.';
	let title = 'Something went wrong 😔';
	const btnTitle = 'Try Again';

	if (isRouteErrorResponse(error)) {
		message = `${error.status} - ${error.statusText}`;
		title = `HTTP Error ${error.status}`;
	} else if (error instanceof Error) {
		message = error.message;
	}

	if (!shouldShowError) {
		return (
			<div className='bt_layout_base'>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<ErrorStatus
			title={title}
			description={message}
			btnTitle={btnTitle}
			onBtnClick={reloadPage}
		/>
	);
};

export default ErrorBoundary;
