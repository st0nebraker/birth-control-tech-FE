import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Reports.scss';

const Reports = () => {
	const [charts, setCharts] = useState(['one', 'two', 'three', 'four'])

	return (
		<main className='Main-User-View' style={{ justifyContent: 'flex-start' }}>
			<p className='headings'>Reports</p>
			<Carousel>
				{charts.map((chart, i) => {
					return (
						<div className='display-chart' key={i}>
							{/* chart.image */}
							<p>{chart}</p>
							<p className="legend">Subtitle: info</p>
						</div>
					)
				})}
			</Carousel>
			{/* <section className='reports-container'>
			</section> */}
		</main>
	)
}

export default Reports;