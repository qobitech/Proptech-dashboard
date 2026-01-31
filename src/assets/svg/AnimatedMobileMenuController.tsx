import type { IAnimatedMobileMenuController } from './helpers';

export const AnimatedMobileMenuController = ({ open, ...rest }: IAnimatedMobileMenuController) => (
	<svg
		width='24'
		height='25'
		viewBox='0 0 24 25'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...rest}
	>
		<path
			d='M3 6.19238H21'
			stroke='var(--color-white)'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			style={{
				transformOrigin: 'center',
				transform: open ? 'rotate(45deg) translate(0px, 6px)' : 'rotate(0deg)',
				transition: 'transform 0.3s ease',
			}}
		/>
		<path
			d='M3 12.1924H21'
			stroke='var(--color-white)'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			style={{
				opacity: open ? 0 : 1,
				transition: 'opacity 0.2s ease',
			}}
		/>
		<path
			d='M3 18.1924H21'
			stroke='var(--color-white)'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			style={{
				transformOrigin: 'center',
				transform: open ? 'rotate(-45deg) translate(0px, -6px)' : 'rotate(0deg)',
				transition: 'transform 0.3s ease',
			}}
		/>
	</svg>
);
