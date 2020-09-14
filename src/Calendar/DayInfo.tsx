import React, {useState} from 'react';
import { Days } from '../App/App';

export interface DayInfoProps {
	foundDay: Days | undefined;
}

const DayInfo: React.SFC<DayInfoProps> = ({ foundDay }) => {
	const [ foundDate, setDate ] = useState(foundDay);
	
  return(
     <section className='day-info-container'>
			 {foundDate && foundDate.highRisk &&
					<div>
						{foundDate.Date}:
						Today is a high risk fertility day, consider using other forms of birth control.
					</div>
			 }
			 {foundDate && !foundDate.highRisk &&
					<div>
					{foundDate.Date}:
					Today is a low risk fertility day, your chances of pregnancy are very low.
				</div>
			 }
     </section>
  );
}

export default DayInfo;