import React, {useState, useEffect} from 'react';
import DayInfo from './DayInfo'
import Calendar from 'react-calendar';
import { Days } from '../App/App';
import './Calendar.scss';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment';
// import { markTimeline } from 'console';

export interface CalendarProps {
	userDays: Days[];
}

const CalendarPage: React.SFC<CalendarProps> = ({ userDays }) => {
	const [ givenDate, setDate ] = useState<Date>(new Date());
	const [ dayForDetails, setDayForDetails ] = useState<Days>();
	const [ highRisk, setHighRisk ] = useState<Days[]>();
	const [ lowRisk, setLowRisk ] = useState<Days[]>();

	useEffect(() => { parseRiskDays() }, [ userDays ])
	// useEffect(() => { parseRiskDays() }, [])

	const parseRiskDays = () => {
		setHighRisk(userDays.filter(day => day.highRisk));
		setLowRisk(userDays.filter(day => !day.highRisk));
	}

	const clickedDayInfo = (e: any) => {
		const dd = String(e.getDate()).padStart(2, '0');
		const mm = String(e.getMonth() + 1).padStart(2, '0');
		const yyyy = e.getFullYear();
		const chosenDay = `${mm}/${dd}/${yyyy}`;
		setDayForDetails(userDays.find(day => day.Date === chosenDay.toString()));
	}

  return(
   <main className='calendar'>
     <h1 className='headings'>Calendar</h1>
     <section className='calendar-container'>
      <Calendar
          onClickDay={(e) => clickedDayInfo(e)}
          value={givenDate}
					className='react-calendeda798ar'
					tileClassName={({ date, view }) => {
						if (highRisk && highRisk.find(x => x.Date === moment(date).format("MM/DD/YYYY"))) {
							return 'red-risk';	
						} else if (lowRisk && lowRisk.find(x => x.Date === moment(date).format("MM/DD/YYYY"))) {
							return 'green-risk';	
						} else {
							return 'react-calendar'
						}
					}}
        />
     </section>
			<DayInfo 
				foundDay={dayForDetails}
			/>
   </main>
  );
}

export default CalendarPage;
