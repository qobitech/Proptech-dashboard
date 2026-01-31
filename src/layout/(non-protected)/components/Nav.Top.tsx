import {
	AnimatedMobileMenuController,
	CalculatorIcon,
	CalendarIcon,
	MainLogo,
	MarketPlaceIcon,
	NavProfile,
	SearchIcon,
	WalletIcon,
} from 'Assets';
import { useModalContext } from 'Hooks';
import { useCallback, useState } from 'react';
import { Link } from 'react-router';

const NavTop = () => {
	const [open, setOpen] = useState<boolean>(false);

	const { handleOpenModal } = useModalContext();

	const handleMenuToggle = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<div className='top'>
			<div className='content container'>
				<MainLogo />
				<AnimatedMobileMenuController
					open={open}
					onClick={handleMenuToggle}
					className='top-menu-controller'
				/>
				<ul>
					<li>
						<Link to='/'>
							<CalculatorIcon />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<CalendarIcon onClick={() => handleOpenModal('budgetting')} />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<SearchIcon />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<WalletIcon />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<MarketPlaceIcon />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<NavProfile text='D' />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavTop;
