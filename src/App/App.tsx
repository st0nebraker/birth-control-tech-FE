import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import InfoTag from '../NavBar/InfoTag'
import Info from '../Info/Info'
import Reports from '../Reports/Reports'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Profile from '../Profile/Profile';
import Form from '../Form/Form';
import Calendar from '../Calendar/Calendar';
import { getUserData, submitUserData, getDays } from "../apiCalls";
import './App.css';

export interface Days {
	temperature: number,
	date: string,
	high_risk: boolean
}
export interface userDetails {
	start_date: string,
	avg_period: number,
	avg_cycle: number,
	name: string
}

const App = () => {
	const [ username, setUsername ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ days, setDays ] = useState<Days[]>([]);
	const [ userData, setUserData ] = useState<userDetails[]>([
		{
			start_date: '',
			avg_period: 0,
			avg_cycle: 0,
			name: ''
		}
	])
	const [ error, setError ] = useState("");
	
	useEffect(() => {getUserDetails()}, []);
	useEffect(() => {getUserDays()}, []);
	
	const logoutUser= () => {
		setUsername('')
		setLoggedIn(false)
	}

	const getUserDetails = async (): Promise<void> => {
			try {
				const data = await getUserData();
				return setUserData(data);
			} catch (error) {
				setError(error.toString());
			}
	}

	const postUserData = async (startDate: string, avgLength: number, avgCycle: number, username: string): Promise<any> => {
		try {
			const data = await submitUserData(startDate, avgLength, avgCycle, username);
			return setUserData([...userData, data]);
		} catch (error) {
			setError(error.toString());
		}
	}

	const getUserDays = async (): Promise<void> => {
		// setDays([
		// 	{
		// 		temperature: 97.3921407225235,
		// 		date: '09/01/2020',
		// 		high_risk: false
		// 	},
		// 	{
		// 		temperature: 97.45472336125859,
		// 		date: '09/02/2020',
		// 		high_risk: false
		// 	},
		// 	{
		// 		temperature: 97.37539305082102,
		// 		date: '09/03/2020',
		// 		high_risk: false
		// 	},
		// 	{
		// 		temperature: 97.39594321187163,
		// 		date: '09/04/2020',
		// 		high_risk: false
		// 	},
		// 	{ 
		// 		temperature: 97.22967507338001,
		// 		date: '09/05/2020',
		// 		high_risk: false
		// 	},
		// 	{ 
		// 		temperature: 97.15550167462081,
		// 		date: '09/06/2020',
		// 		high_risk: false
		// 	}
		// ])

		try {
			const data = await getDays();
			return setDays(data);
		} catch (error) {
			setError(error.toString());
		}
	}

  return (
    <main className="App">
			{loggedIn && <InfoTag username={username}/>}
			<Switch>
				<Route path='/info' component={Info} />
				<Route path='/new-entry' 
					render={() => <Form days={days} getUserDays={getUserDays} userDetails={userData} username={username} />}
				/>
				<Route 
					path='/stats' 
					render={() => <Reports days={days}/>} 
				/>
				<Route 
					path='/calendar' 
					render={() => <Calendar userDays={days}/>} 
				/>
				<Route 
					path='/profile'
					render={() => <Profile userData={userData} logoutUser={logoutUser} postUserData={postUserData} error={error} username={username} />}
				/>
				{loggedIn && 
					<Route 
						exact
						path='/'
						render={() => <Home days={days} userDetails={userData} username={username} />} 
					/>
				}
				{!loggedIn && 
					<Route 
						exact
						path='/' 
						render={() => <Login username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} 
					/>
				}
			</Switch>
			{loggedIn && <NavBar />}
    </main>
  );
}

export default App;
