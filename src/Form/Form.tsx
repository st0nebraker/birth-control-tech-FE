import React, { useEffect, useState } from 'react';
import MultiSelect from "react-multi-select-component";
import './Form.scss';
import { Days } from '../App/App';
import { submitDay } from '../apiCalls';
import moment from 'moment';

export interface FormProps {
	days: Days[];
	getUserDays: Function
}

const Form: React.FC<FormProps> = ({ days, getUserDays }) => {
	const [ today, setToday ] = useState('');
	const [ temp, setTemp ] = useState('');
	const [ time, setTime ] = useState('')
	const [ selected, setSelected ] = useState([]);
	const [ userDays, setUserDays ] = useState<Days[]>([]);
	const [ confirmation, setConfirmation ] = useState(false);
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
	useEffect(() => { setUserDays(days) }, [ days ])

	const getDate = () => {
		setToday(moment(new Date()).format("MM/DD/YYYY"));
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		try {
			const data = await submitDay(temp, today)
			console.log(data);
			setConfirmation(true);
			getUserDays();
		} catch (error) {
			console.log(error)
		}
	}

  return (
		<main className='Main-User-View'>
			
			{days.find(x => x.date === today) && 
				<form>
					<div style={{color: 'grey', fontStyle: 'italic', textAlign: 'center', fontSize: '2.5vh'}}>You already filled out today's log!</div>
					<label>Today: {today}</label>
					<label>Time:
						<input 
							type="time"
							name="time"
							style={{ width: '45%' }}
							className='input'
							disabled
						/>
					</label>
					<label className='temp-label'>Temp:
						<input
							name="temp"
							type="number"
							min="90"
							max="110"
							placeholder='--'
							value={temp}
							className='input'
							aria-label='temperature-input'
							disabled
					/>
						<div className='BBT-deg'>°F</div>
					</label>
					<label>Symptoms:
						<MultiSelect
							options={symptoms}
							value={selected}
							labelledBy={"Select"}
							className='multi-select'
							disabled
						/>
					</label>
					<button
						className='submit'
						type='button'						
						style={{backgroundColor: 'grey'}}
						disabled
					>
						SUBMIT
					</button>
				</form>
			}

			{!days.find(x => x.date === today) &&
				<form>
					<label>Today: {today}</label>
					<label>Time:
						<input 
							type="time"
							name="time"
							style={{ width: '45%' }}
							className='input'
							onChange={e => setTime(e.target.value)}
						/>
					</label>
					<label className='temp-label'>Temp:
						<input
							name="temp"
							type="number"
							min="90"
							max="110"
							placeholder='--'
							value={temp}
							className='input'
							aria-label='temperature-input'
							onChange={e => setTemp(e.target.value)} 
							required
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
					<button
						className='submit'
						type='button'
						onClick={handleSubmit}
						>
						SUBMIT
					</button>
					{confirmation && <div style={{ fontStyle: 'italic', color: '#FBCE90', fontSize: '.8em', marginLeft: '17%' }}>Entry submitted</div>}
				</form>
			}
		</main>
  )
}
export default Form;