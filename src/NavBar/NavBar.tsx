import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<nav>
			<NavLink 
				exact
				title='home'
				className='home'
				activeClassName='home-active'
				to='/'
			/>
			<NavLink 
				title='calendar'
				className='calendar-icon'
				activeClassName='calendar-active'
				to='/calendar' 
			/>
			<NavLink 
				title='new entry'
				className='new'
				activeClassName='new-active'
				to='/new-entry'
			/>
			<NavLink 
				title='reports'
				className='chart'
				activeClassName='chart-active'
				to='/stats'
			/>
			<NavLink 
				title='profile'
				className='profile-icon'
				activeClassName='profile-active'
				to='/profile'
			/>
		</nav>
	)
}

export default NavBar;