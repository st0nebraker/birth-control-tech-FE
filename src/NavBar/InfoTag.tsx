import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InfoTag = () => {
	return (
		<section className='info-tag'>
			<Link to='/info'>
				<img src={require('../assets/info.svg')} alt="Info" title="Info" />
			</Link>
		</section>
	)
}

export default InfoTag;