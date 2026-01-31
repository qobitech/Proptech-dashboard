import type { IErrorStatus } from './ErrorStatus.helpers';
import { ErrorIcon } from 'Assets';

export const ErrorStatus = ({ title, btnTitle, description, onBtnClick }: IErrorStatus) => (
	<section
		className='errorStatus'
		data-testid='error-status'
	>
		<div className='errorStatus_wrapper'>
			<div className='icon'>
				<ErrorIcon />
			</div>

			<div className='bottom'>
				<h2>{title}</h2>

				<p>{description}</p>

				<button onClick={onBtnClick}>{btnTitle}</button>
			</div>
		</div>
	</section>
);
