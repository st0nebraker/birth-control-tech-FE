import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className='Main-User-View'>
			<section className='home-container1'>
				<img src={require('../assets/papaya.png')} alt="Papaya" title="Papaya" className='home-img' />
			</section>
			<section className='home-container2'>
				<p className='welcome-msg'>
					{`Today is a LOW-RISK day`}
				</p>
			</section>
		</main>
	)
}

export default Home;