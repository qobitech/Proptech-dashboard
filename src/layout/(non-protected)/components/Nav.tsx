import {
	ArticleIcon,
	CalculatorIcon,
	CalendarIcon,
	MainLogo,
	MarketPlaceIcon,
	NavHomeIcon,
	NavProfile,
	ProfileIcon,
	ScrollIcon,
	SearchIcon,
	TaskIcon,
	ToolboxIcon,
	WalletIcon,
} from 'Assets';
import { Link } from 'react-router';

const Nav = () => (
	<nav className='proptech-non-protected-nav'>
		<div className='top'>
			<div className='content container'>
				<MainLogo />
				<ul>
					<li>
						<Link to='/'>
							<CalculatorIcon />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<CalendarIcon />
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
		<div className='main'>
			<ul className='container'>
				<li className='active'>
					<NavHomeIcon />
					<p>Dashboard</p>
				</li>
				<li>
					<ToolboxIcon />
					<p>Listings</p>
				</li>
				<li>
					<ProfileIcon />
					<p>Users</p>
				</li>
				<li>
					<ArticleIcon />
					<p>Request</p>
				</li>
				<li>
					<ScrollIcon />
					<p>Applications</p>
				</li>
				<li>
					<TaskIcon />
					<p>Tasks</p>
				</li>
			</ul>
		</div>
	</nav>
);

export default Nav;
