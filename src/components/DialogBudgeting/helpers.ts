import type { IBudgettingIconVariants } from 'Assets';

interface IBudgetList {
	variant: IBudgettingIconVariants;
	title: string;
	description: string;
}

export const list: IBudgetList[] = [
	{
		variant: 'annual',
		title: 'Set up annual budgets by account category',
		description: 'Allocate funds across income and expense lines with full visibility.',
	},
	{
		variant: 'trend',
		title: 'Track actuals vs budget in real time',
		description: 'See how your community is performing against plan, month by month.',
	},
	{
		variant: 'figures',
		title: 'Adjust figures and forecast with ease',
		description: 'Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.',
	},
];
