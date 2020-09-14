import React, {useState} from 'react';
import { Days } from '../App/App';

export interface DayInfoProps {
	foundDay: Days;
}

const DayInfo: React.SFC<DayInfoProps> = ({ foundDay }) => {
	const [ foundDate, setDate ] = useState(foundDay);
	const [ dayForDetails, setDayForDetails ] = useState<Days>();
	
  return(
     <section className='day-info-container'>

     </section>
  );
}

export default DayInfo;