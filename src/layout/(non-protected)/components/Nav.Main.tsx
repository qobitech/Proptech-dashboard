import { AnimatedMobileMenuController, ArticleIcon, NavHomeIcon, ProfileIcon, ScrollIcon, TaskIcon, ToolboxIcon } from 'Assets';
import { useCallback, useState } from 'react';

const NavMain = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuToggle = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<div className='main'>
			<AnimatedMobileMenuController
				open={open}
				onClick={handleMenuToggle}
				className='top-menu-controller'
			/>
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
	);
};

export default NavMain;
