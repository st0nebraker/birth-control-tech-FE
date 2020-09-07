import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<nav>
			<NavLink 
				exact
				className='home'
				activeClassName='home-active'
				to='/'
			/>
			<NavLink 
				className='calendar-icon'
				activeClassName='calendar-active'
				to='/calendar' 
			/>
			<NavLink 
				className='new'
				activeClassName='new-active'
				to='/new-entry'
			/>
			<NavLink 
				className='chart'
				activeClassName='chart-active'
				to='/stats'
			/>
			<NavLink 
				className='profile-icon'
				activeClassName='profile-active'
				to='/profile'
			/>
		</nav>
	)
}

export default NavBar;