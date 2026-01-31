import type { IChevron } from './helpers';

export const ChevronIcon = ({ variant = 'right', ...rest }: IChevron) => {
	if (variant === 'right') {
		return (
			<svg
				width='6'
				height='10'
				viewBox='0 0 6 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...rest}
			>
				<path
					d='M3.7125 4.773L0 1.0605L1.0605 0L5.8335 4.773L1.0605 9.546L0 8.4855L3.7125 4.773Z'
					fill='#4545FE'
				/>
			</svg>
		);
	}

	if (variant === 'left') {
		return (
			<svg
				width='6'
				height='10'
				viewBox='0 0 6 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...rest}
			>
				<path
					d='M2.2875 4.773L6 1.0605L4.9395 0L0.1665 4.773L4.9395 9.546L6 8.4855L2.2875 4.773Z'
					fill='#4545FE'
				/>
			</svg>
		);
	}

	if (variant === 'up') {
		return (
			<svg
				width='10'
				height='6'
				viewBox='0 0 10 6'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...rest}
			>
				<path
					d='M5.227 2.2875L8.9395 6L10 4.9395L5.227 0.1665L0.454 4.9395L1.5145 6L5.227 2.2875Z'
					fill='#4545FE'
				/>
			</svg>
		);
	}

	return (
		<svg
			width='10'
			height='6'
			viewBox='0 0 10 6'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				d='M5.227 3.7125L8.9395 0L10 1.0605L5.227 5.8335L0.454 1.0605L1.5145 0L5.227 3.7125Z'
				fill='#4545FE'
			/>
		</svg>
	);
};
