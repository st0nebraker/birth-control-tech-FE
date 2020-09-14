import { Days } from '../App/App';

export const sevenDayGraph = (days: Days[]) => {
  const getLast7Days = days.slice(-7).map(day => day.Date)
	const getLast7Data = days.slice(-7).map(day => day.Temperature)
	
	const data = {
		labels: getLast7Days,
		datasets: [{
      data: getLast7Data
		}]
  }

  return data
}