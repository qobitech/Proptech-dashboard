import type { IBudgettingIcon } from './helpers';

export const BudgettingIcon = ({ variant, ...rest }: IBudgettingIcon) => {
	if (variant === 'annual') {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...rest}
			>
				<path
					d='M22 6.5H16'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M6 6.5H2'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M22 17.5H18'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M8 17.5H2'
					stroke='#292D32'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-miterlimit='10'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		);
	}

	if (variant === 'trend') {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...rest}
			>
				<path
					d='M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M14.5 9.5H16.5V11.5'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
					stroke='#52525B'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		);
	}

	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				d='M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9'
				stroke='#52525B'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9'
				stroke='#52525B'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M2 19H22'
				stroke='#52525B'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
