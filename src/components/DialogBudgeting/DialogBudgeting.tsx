import { BudgettingHeader, BudgettingIcon } from 'Assets';
import { list } from './helpers';

const DialogBudgeting = () => {
	return (
		<div className='dialog-budgetting'>
			<BudgettingHeader />

			<div className='body'>
				<div className='list'>
					{list.map((item, index) => (
						<div
							className='item'
							key={index}
						>
							<div className='left'>
								<BudgettingIcon variant={item.variant} />
							</div>
							<div className='right'>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>

				<button>Create Budget</button>
			</div>
		</div>
	);
};

export default DialogBudgeting;
