import React, { useEffect, useState } from 'react';
import './Form.scss';
import MultiSelect from "react-multi-select-component";


const Form: React.FC = () => {
	const [today, setToday] = useState('');
	const [temp, setTemp] = useState('');
	const [selected, setSelected] = useState([]);
	const [symptoms, setSymptoms] = useState([
		{label: 'Cramping', value: 'cramping'},
		{label: 'Mood change', value: 'mood change'},
		{label: 'Bloating', value: 'bloating'},
		{label: 'Fatigue', value: 'fatigue'},
		{label: 'Tender breasts', value: 'tender breasts'},
		{label: 'Headaches', value: 'headaches'},
		{label: 'Food cravings', value: 'food cravings'},
		{label: 'High energy', value: 'high energy'},
		{label: 'Low energy', value: 'low energy'},
		{label: 'High libido', value: 'high libido'},
		{label: 'Low libido', value: 'low libido'},
		{label: 'Weight gain', value: 'weight gain'},
		{label: 'Trouble sleeping', value: 'trouble sleeping'},
])

	useEffect(() => {getDate()}, []);

	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();

		setToday(mm + '/' + dd + '/' + yyyy);
	}

	const handleSubmit = () => {
		//submit logic
	}

  return (
		<main className='Main-User-View'>
			<form>
				<label>Today: {today}</label>
				<label className='temp-label'>Temp:
					<input
						name="temp"
						type="text"
						placeholder=''
						value={temp}
						className='input'
						aria-label='temperature-input'
						onChange={e => setTemp(e.target.value)} 
					/>
					<div className='BBT-deg'>°F</div>
				</label>

				<label>Symptoms:
					<MultiSelect
						options={symptoms}
						value={selected}
						onChange={setSelected}
						labelledBy={"Select"}
						className='multi-select'
					/>
				</label>

				<input type='submit' value='SUBMIT' className='submit' />
			</form>

		</main>
  )
}
export default Form;