import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reports.scss';

const Reports = () => {
	const [charts, setCharts] = useState(['one', 'two', 'three', 'four'])

	return (
		<main className='Main-User-View' style={{ justifyContent: 'flex-start' }}>
			<p className='reports'>Reports</p>
			<section className='reports-container'>
				{charts.map(chart => {
					return (<section className='display-chart'>{chart}</section>)
				})}
			</section>
		</main>
	)
}

export default Reports;