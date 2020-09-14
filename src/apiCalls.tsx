const rootUrl= 'https://lono-api.herokuapp.com/api/v1'

export const submitDay = async (temp: string, date: string) => {
	const response = await fetch(`${rootUrl}/days`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			"temperature": temp,
			"date": date,
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
		console.log(data);
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

export const submitUserData = async (startDate: string, avgLength: number, avgCycle: number) => {
	const response = await fetch(`${rootUrl}/user_data`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			"start_date": startDate,
			"avg_length": avgLength,
			"avg_cycle": avgCycle,
		})
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(response.statusText);
	}
}