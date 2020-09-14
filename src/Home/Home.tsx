import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Days } from '../App/App';
import moment from 'moment';

export interface HomeProps {
	days: Days[];
}

const Home: React.FC<HomeProps> = ({ days }) => {
	const today = moment(new Date()).format("MM/DD/YYYY")
	//TODO: make today's msg dynamic

	return (
		<main className='Main-User-View'>
			<section className='home-container1'>
				<img src={require('../assets/papaya.png')} alt="Papaya" title="Papaya" className='home-img' />
			</section>
			<section className='home-container2'>
				{days.find(x => x.date === today) &&
					<p className='welcome-msg'>
						{`Today is a LOW-RISK day`}
					</p>
				}
				{!days.find(x => x.date === today) &&
					<section className='welcome-msg'>
						Don't forget to <Link to='/new-entry' style={{textDecoration: 'none', color: '#FBCE90', fontWeight: 'bolder'}}>log</Link> your basal body temp today!
					</section>
				}
			</section>
		</main>
	)
}

export default Home;