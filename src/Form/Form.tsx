import React, { useEffect, useState } from 'react';
import MultiSelect from "react-multi-select-component";
import './Form.scss';


const Form: React.FC = () => {
	const [ today, setToday ] = useState('');
	const [ temp, setTemp ] = useState('');
	const [ time, setTime ] = useState('')
	const [ selected, setSelected ] = useState([]);
	const [ symptoms, setSymptoms ] = useState([
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
				<label>Time:
					<input 
						type="time"
						name="time" 
						min="09:00" 
						max="18:00" 
						style={{ width: '45%' }}
						className='input'
						onChange={e => setTime(e.target.value)}
						required 
					/>
				</label>
				<label className='temp-label'>Temp:
					<input
						name="temp"
						type="text"
						placeholder='--'
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