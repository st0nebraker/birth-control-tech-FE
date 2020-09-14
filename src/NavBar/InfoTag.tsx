import React from 'react';
import { NavLink } from 'react-router-dom';

export interface InfoTagProps {
  username: string;
}

const InfoTag: React.FC<InfoTagProps> = ({username}) => {
	return (
		<section className='info-tag'>
			<p className='header-welcome-msg'>Welcome, {username.charAt(0).toUpperCase() + (username).slice(1)} </p>
			<NavLink 
				title='info tag'
				className='info'
				activeClassName='info-active'
				to='/info'
			/>
		</section>
	)
}

export default InfoTag;