import { BudgettingHeader } from 'Assets';

const DialogBudgeting = () => {
	return (
		<div className='dialog-budgetting'>
			<BudgettingHeader />

			<div className='body'>
				<div className='list'>
					<div className='item'>
						<div className='left'></div>
						<div className='right'>
							<h4></h4>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DialogBudgeting;
