import type { INavProfile } from './helpers';

export const NavProfile = ({ text, ...rest }: INavProfile) => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...rest}
	>
		<rect
			width='40'
			height='40'
			rx='20'
			fill='white'
		/>
		<text
			x='20'
			y='55%'
			dominantBaseline='middle'
			textAnchor='middle'
			fill='var(--color-primary)'
			fontSize='25'
			fontWeight='500'
			fontFamily='var(--font-medium)'
		>
			{text}
		</text>
	</svg>
);
