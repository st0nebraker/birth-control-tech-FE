import React, {useState} from 'react';
import Calendar from 'react-calendar';
import { Days } from '../App/App';
import './Calendar.scss';
import 'react-calendar/dist/Calendar.css'

export interface CalendarProps {
	userDays: Days[];
}

const CalendarPage: React.SFC<CalendarProps> = ({ userDays }) => {
	const [ givenDate, setDate ] = useState<Date>(new Date());
	const [ dayForDetails, setDayForDetails ] = useState<Days>();
	
	const clickedDayInfo = (e: any) => {
		const dd = String(e.getDate()).padStart(2, '0');
		const mm = String(e.getMonth() + 1).padStart(2, '0');
		const yyyy = e.getFullYear();
		const chosenDay = `${mm}/${dd}/${yyyy}`;
		setDayForDetails(userDays.find(day => day.Date === chosenDay.toString()));
	}

	//popup new component w/ that days fertility info
  return(
   <main className='calendar'>
     <h1 className='headings'>Calendar</h1>
     <section className='calendar-container'>
      <Calendar
          onClickDay={(e) => clickedDayInfo(e)}
          value={givenDate}
          className='react-calendar'
        />
     </section>
   </main>
  );
}

export default CalendarPage;
