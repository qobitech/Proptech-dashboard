import type { SVGComponentProps } from 'Helpers';

export interface IChevron extends SVGComponentProps {
	variant?: 'left' | 'right' | 'up' | 'down';
}

export interface IStatsArrow extends SVGComponentProps {
	variant?: 'up' | 'down';
}

export interface INavIcon extends SVGComponentProps {
	variant?: 'left' | 'right';
}

export interface INavProfile extends SVGComponentProps {
	text: string;
}
