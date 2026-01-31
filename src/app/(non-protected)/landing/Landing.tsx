import { StatsArrowIcon } from '@/assets/svg/StatsArrowIcon';
import { ChartIcon, ChevronIcon, HomeIcon } from 'Assets';
import MetricItemImg1 from '../../../assets/images/home/metric-item-1.webp';
import MetricItemImg2 from '../../../assets/images/home/metric-item-2.webp';
import MetricItemImg3 from '../../../assets/images/home/metric-item-3.webp';

const Landing = () => {
	return (
		<div className='dashboard container'>
			<div className='header'>
				<h1>Welcome, Ahmed</h1>
			</div>
			<div className='overview'>
				<div className='sales'>
					<div className='top'>
						<div className='header'>
							<div className='left'>
								<h3>Sales Overview</h3>
								<p>Showing overview Jan 2022 - Sep 2022</p>
							</div>
							<div className='right'>
								<button>View Transactions</button>
							</div>
						</div>
						<div className='occurence'>
							<button>1 week</button>
							<button>1 month</button>
							<button className='selected'>1 year</button>
						</div>
					</div>
					<div className='bottom'>
						<div className='left'>
							<ChartIcon />
						</div>
						<div className='right'>
							<div className='item'>
								<h4>₦120,000,000.00</h4>
								<div className='stats'>
									<p>Total Inflow</p>
									<p className='value'>
										<StatsArrowIcon />
										+20%
									</p>
								</div>
							</div>
							<div className='item'>
								<h4>₦120,000,000.00</h4>
								<div className='stats'>
									<p>Total Inflow</p>
									<p className='value'>
										<StatsArrowIcon />
										+20%
									</p>
								</div>
							</div>
							<div className='item'>
								<h4>₦120,000,000.00</h4>
								<div className='stats'>
									<p>Total Inflow</p>
									<p className='value'>
										<StatsArrowIcon />
										+20%
									</p>
								</div>
							</div>
							<div className='item'>
								<h4>₦120,000,000.00</h4>
								<div className='stats'>
									<p>Total Inflow</p>
									<p className='value'>
										<StatsArrowIcon />
										+20%
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='listings-group'>
					<div className='listings'>
						<div className='header'>
							<div className='left'>
								<HomeIcon />
								<p>Listings Overview</p>
							</div>
							<div className='right'>
								<button>
									View all <ChevronIcon variant='right' />
								</button>
							</div>
						</div>
						<div className='body'>
							<div className='item'>
								<p>Total</p>
								<h5>1.8k</h5>
							</div>
							<div className='item'>
								<p>Active</p>
								<h5>1.8k</h5>
							</div>
							<div className='item'>
								<p>Archived</p>
								<h5>1.8k</h5>
							</div>
						</div>
					</div>

					<div className='listings'>
						<div className='header'>
							<div className='left'>
								<HomeIcon />
								<p>Listings Overview</p>
							</div>
							<div className='right'>
								<button>
									View all <ChevronIcon variant='right' />
								</button>
							</div>
						</div>
						<div className='body'>
							<div className='item'>
								<p>Total</p>
								<h5>1.8k</h5>
							</div>
							<div className='item'>
								<p>Active</p>
								<h5>1.8k</h5>
							</div>
							<div className='item'>
								<p>Archived</p>
								<h5>1.8k</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gallery'>
				<div className='item'>
					<img
						src={MetricItemImg1}
						alt=''
					/>
					<div className='content'>
						<p>MOST CLICKED</p>
						<h5>Urban Prime Plaza Premiere</h5>
					</div>
				</div>
				<div className='item'>
					<img
						src={MetricItemImg2}
						alt=''
					/>
					<div className='content'>
						<p>MOST WATCHLISTED</p>
						<h5>Urban Prime Plaza Premiere</h5>
					</div>
				</div>
				<div className='item'>
					<img
						src={MetricItemImg3}
						alt=''
					/>
					<div className='content'>
						<p>HOTTEST LISTING</p>
						<h5>Urban Prime Plaza Premiere</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
