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
	Temperature: number,
	Date: string,
	highRisk: boolean
}
export interface userDetails {
	start_date: string,
	avg_length: number,
	avg_cycle: number,
	name: string
}

const App = () => {
	const [ username, setUsername ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ days, setDays ] = useState<Days[]>([]);
	const logoutUser= () => {
		setUsername('')
		setLoggedIn(false)
	}
	const [ userData, setUserData ] = useState<userDetails[]>([
		{
			start_date: '',
			avg_length: 0,
			avg_cycle: 0,
			name: ''
		}
	])
	const [ error, setError ] = useState("");
	
	useEffect(() => {getUserDetails()}, [userData]);
	useEffect(() => {getUserDays()}, []);
	
	const getUserDetails = async (): Promise<any> => {
		try {
			const data = await getUserData();
			setUserData(data);
		} catch (error) {
			setError(error.toString());
		}
	}

	const postUserData = async (startDate: string, avgLength: number, avgCycle: number): Promise<any> => {
		try {
			const data = await submitUserData(startDate, avgLength, avgCycle)
			return data
		} catch (error) {
			setError(error.toString());
		}
	}

	const getUserDays = async () => {
		setDays([
			{
				Temperature: 97.3921407225235,
				Date: '09/01/2020',
				highRisk: false
			},
			{
				Temperature: 97.45472336125859,
				Date: '09/02/2020',
				highRisk: false
			},
			{
				Temperature: 97.37539305082102,
				Date: '09/03/2020',
				highRisk: false
			},
			{
				Temperature: 97.39594321187163,
				Date: '09/04/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.22967507338001,
				Date: '09/05/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.15550167462081,
				Date: '09/06/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.37489920782173,
				Date: '09/07/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.32587582389289,
				Date: '09/08/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.2532495702544,
				Date: '09/09/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.47893633165044,
				Date: '09/10/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.12109556511471,
				Date: '09/11/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.39352202710452,
				Date: '09/12/2020',
				highRisk: false
			},
			{
				Temperature: 97.39706814872008,
				Date: '09/13/2020',
				highRisk: false
			},
			{ 
				Temperature: 97.20555830876744,
				Date: '09/14/2020',
				highRisk: false
			},
			{
				Temperature: 97.49626383244673,
				Date: '09/15/2020',
				highRisk: false
			},
			{
				Temperature: 97.24120211190903,
				Date: '09/16/2020',
				highRisk: false
			},
			{
				Temperature: 98.34677713289109,
				Date: '09/28/2020',
				highRisk: false
			},
			{
				Temperature: 97.70349779060184,
				Date: '09/29/2020',
				highRisk: false
			},
			{
				Temperature: 98.5701435459597,
				Date: '09/30/2020',
				highRisk: false
			},
			{
				Temperature: 97.32789902753188,
				Date: '09/17/2020',
				highRisk: true
			},
			{
				Temperature: 97.33750832723287,
				Date: '09/18/2020',
				highRisk: true
			},
			{
				Temperature: 97.49237121174019,
				Date: '09/19/2020',
				highRisk: true
			},
			{
				Temperature: 97.10673653294982,
				Date: '09/20/2020',
				highRisk: true
			},
			{
				Temperature: 97.45035457538701,
				Date: '09/21/2020',
				highRisk: true
			},
			{
				Temperature: 97.39618222527686,
				Date: '09/22/2020',
				highRisk: true
			},
			{
				Temperature: 97.18218490258948,
				Date: '09/23/2020',
				highRisk: true
			},
			{
				Temperature: 98.31225964314442,
				Date: '09/24/2020',
				highRisk: true
			},
			{
				Temperature: 97.70977277629115,
				Date: '09/25/2020',
				highRisk: true
			},
			{
				Temperature: 98.5559779071062,
				Date: '09/26/2020',
				highRisk: true
			},
			{
				Temperature: 98.29823570276363,
				Date: '09/27/2020',
				highRisk: true
			}
		])
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
				<Route path='/new-entry' component={Form} />
				<Route path='/stats' component={Reports} />
				<Route 
					path='/calendar' 
					render={() => <Calendar userDays={days}/>} 
				/>
				<Route 
					path='/profile'
					render={() => <Profile userData={userData} logoutUser={logoutUser} postUserData={postUserData} error={error} username={username} />}
				/>
				{loggedIn && 
					<Route exact path='/' component={Home} />
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
