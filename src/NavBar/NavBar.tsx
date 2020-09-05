import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<Link to='/'>
				<img src={require('../assets/home.svg')} alt="Home" title="Home" />
			</Link>
			<Link to='/calendar'>
				<img src={require('../assets/calendar.svg')} alt="Calendar" title="Calendar" />
			</Link>
			<Link to='/new-entry'>
				<img src={require('../assets/new.svg')} alt="New Entry" title="New Entrry" />
			</Link>
			<Link to='/stats'>
				<img src={require('../assets/chart.svg')} alt="Statistics" title="Statistics" />
			</Link>
			<Link to='/profile'>
				<img src={require('../assets/profile.svg')} alt="Profile" title="Profile" />
			</Link>
		</nav>
	)
}

export default NavBar;