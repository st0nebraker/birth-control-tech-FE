import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


const CalendarPage = () => {
  const [givenDate, setDate] = useState<Date>(new Date());
  
  return(
   <main className='calendar'>
     <h1 className='headings'>Calendar</h1>
     <Calendar
        onClickDay={setDate}
        value={ givenDate }
      />
   </main>
  );
}

export default CalendarPage;
