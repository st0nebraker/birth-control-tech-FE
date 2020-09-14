import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Days } from '../App/App';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Reports.scss';

import {Line} from 'react-chartjs-2';
import {sevenDayGraph} from './Charts'
export interface ReportsProps {
	days: Days[]
}

const Reports: React.SFC<ReportsProps> = ({ days }) => {
	const [charts, setCharts] = useState([sevenDayGraph(days), sevenDayGraph(days), sevenDayGraph(days), sevenDayGraph(days)])

	return (
		<main className='Main-User-View' style={{ justifyContent: 'flex-start' }}>
			<p className='headings'>Reports</p>
			{/* <Line data={charts[0]} /> */}

			<Carousel>
				{charts.map((chart, i) => {
					return (
						<div className='display-chart' key={i}>
							{/* chart.image */}
							{/* <p>{chart}</p> */}
							<Line data={chart} />
							{/* <p className="legend">Subtitle: info</p> */}
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