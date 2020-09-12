const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const submitDay = async (temp: string, date: string) => {
	const response = await fetch(`${proxyurl}https://lono-be.herokuapp.com/add_day`, {
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