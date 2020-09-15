import React from 'react';
import { Link } from 'react-router-dom';
import { Days, userDetails } from '../App/App';
import moment from 'moment';

export interface HomeProps {
	days: Days[],
	userDetails: userDetails[],
	username: string
}

const Home: React.FC<HomeProps> = ({ days, userDetails, username }) => {
	const today = '10/31/2020'
	//const today = moment(new Date()).format("MM/DD/YYYY")
	const foundDay = days.find(x => x.date === today);

	return (
		<main className='Main-User-View'>
			<section className='home-container1'>
				<img src={require('../assets/papaya.png')} alt="Papaya" title="Papaya" className='home-img' />
			</section>
			<section className='home-container2'>
				{foundDay && foundDay.high_risk &&
					<p className='welcome-msg'>
						Today is a <span style={{ color: 'red' }}>HIGH-RISK</span> day
					</p>
				}
				{foundDay && !foundDay.high_risk &&
					<p className='welcome-msg'>
						Today is a <span style={{ color: 'green' }}>LOW-RISK</span> day
					</p>
				}
				{!userDetails.find(x => x.name === username) && 
					<section className='welcome-msg'>
						Fill out the <Link to='profile' style={{textDecoration: 'none', color: '#FBCE90', fontWeight: 'bolder'}}>profile page</Link> to begin.
					</section>
				}
				{!foundDay &&
					<section className='welcome-msg'>
						Don't forget to <Link to='/new-entry' style={{textDecoration: 'none', color: '#FBCE90', fontWeight: 'bolder'}}>log</Link> your basal body temp today!
					</section>
				}
			</section>
		</main>
	)
}

export default Home;