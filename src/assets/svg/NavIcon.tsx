import type { INavIcon } from './helpers';

export const NavIcon = ({ variant = 'left', ...rest }: INavIcon) => {
	if (variant === 'left') {
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<circle
				cx='9'
				cy='9'
				r='9'
				transform='rotate(180 9 9)'
				fill='#E4E4E4'
			/>
			<path
				d='M6.75 9L10.125 5.625L10.125 12.375L6.75 9Z'
				fill='#191919'
			/>
		</svg>;
	}

	return (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<circle
				cx='9'
				cy='9'
				r='9'
				fill='#E4E4E4'
			/>
			<g clipPath='url(#clip0_26_11557)'>
				<path
					d='M11.25 9L7.875 12.375L7.875 5.625L11.25 9Z'
					fill='#191919'
				/>
			</g>
			<defs>
				<clipPath id='clip0_26_11557'>
					<rect
						width='13.5'
						height='13.5'
						fill='white'
						transform='translate(2.25 2.25)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
