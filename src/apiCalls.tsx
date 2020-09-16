import moment from 'moment';

const rootUrl= 'https://lono-api.herokuapp.com/api/v1'

export const submitDay = async (temp: number, date: string, username: string) => {
	const response = await fetch(`${rootUrl}/days`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			"temperature": temp,
			"date": date,
			"name": username
		})
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(response.statusText);
	}
}

export const getDays = async () => {
	const response = await fetch(`${rootUrl}/days`);
	
	if (response.ok) {
		const data = await response.json();
		return data
	} else {
		throw new Error(response.statusText);
	}
}

export const getUserData = async () => {
	const response = await fetch(`${rootUrl}/user_data`);
	
	if (response.ok) {
		const data = await response.json();
		return data
	} else {
		throw new Error(response.statusText);
	}
}

export const submitUserData = async (startDate: string, avgLength: number, avgCycle: number, username: string) => {
	const response = await fetch(`${rootUrl}/user_data`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			"start_date": moment(startDate).format("MM/DD/YYYY"),
			"avg_period": avgLength,
			"avg_cycle": avgCycle,
			"name": username
		})
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(response.statusText);
	}
}