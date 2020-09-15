import { Days } from '../App/App';
import moment from 'moment';


export const sevenDayGraph = (days: Days[]) => {
  const today = moment().format('MM/DD/YYYY')
  const allDays = days.map(day => day.date)
  const todayIndex = allDays.indexOf(today)
  const lastSevenDays = allDays.slice(todayIndex-7, todayIndex)

  const allTemps = days.map(day => day.temperature)
  const lastSevenTemps = allTemps.slice(todayIndex-7, todayIndex)
  
	
	const data = {
		labels: lastSevenDays,
		datasets: [{
      data: lastSevenTemps,
      backgroundColor: 'rgba(251, 206, 144, 0.4)',
      borderColor: 'rgba(251, 206, 144, 1)',
      fill: false,
		}]
  }

  return data
}