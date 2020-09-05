import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
	return (
		<main className='Main-User-View' style={{ justifyContent: 'flex-start' }}>
			<p className='info-paragraph'>
				Let's Not Get Pregnant makes use of the Fertility Awareness Methods also called Natural Birth Control. By tracking your basal body temperature each morning, high risk and low risk fertility days can be calculated with a 99.6% effectiveness rate.
				
				<p>Let's Not Get Pregnant is not liable if one does fall pregnant. Please consult your personal doctor for ultimate assurance.</p>
			
			</p>
		</main>
	)
}

export default Info;