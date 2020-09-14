import React, {useState, useEffect} from 'react';
import { Days } from '../App/App';
import './DayInfo.scss'

export interface DayInfoProps {
	foundDay: Days | undefined;
}

const DayInfo: React.SFC<DayInfoProps> = (props) => {
	const [ foundDate, setDate ] = useState(props.foundDay);
	
	useEffect(() => { setDate(props.foundDay) }, [ props ])

  return(
		<section className='day-info-container'>
			{console.log(foundDate)}
			 {foundDate && foundDate.highRisk &&
					<div className='day-info'>
						<div className='date-head'>{foundDate.Date}</div>
						<div style={{ textAlign: 'left', marginLeft: '10px' }}><span style={{ color: 'red' }}>High risk</span> fertility day, consider using other forms of birth control.</div>
					</div>
			 }
			 {foundDate && !foundDate.highRisk &&
					<div className='day-info'>
						<div className='date-head'>{foundDate.Date}</div>
						<div style={{ textAlign: 'left', marginLeft: '10px' }}><span style={{ color: 'green' }}>Low risk</span> fertility day, your chances of pregnancy are very low.</div>
					</div>
			 }
			 {!foundDate &&
					<div className='day-info'>
					No logged information for this day.
				</div>
			 }
     </section>
  );
}

export default DayInfo;