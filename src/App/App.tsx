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
import { getUserData, submitUserData } from "../apiCalls";
import './App.css';

export interface userDetails {
	start_date: string,
	avg_length: number,
	avg_cycle: number,
}

const App = () => {
	const [ username, setUsername ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ userData, setUserData ] = useState<userDetails[]>([
		{
			start_date: '',
			avg_length: 0,
			avg_cycle: 0,
		}
	])
	const [ error, setError ] = useState("");

	useEffect(() => {getUserDetails()}, [userData]);
	
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

	const logoutUser= () => {
		setUsername('')
		setLoggedIn(false)
	}

  return (
    <main className="App">
			{loggedIn && <InfoTag username={username}/>}
			<Switch>
				<Route path='/info' component={Info} />
				<Route path='/calendar' component={Calendar} />
				<Route path='/new-entry' component={Form} />
				<Route path='/stats' component={Reports} />
				<Route 
					path='/profile'
					render={() => <Profile userData={userData} logoutUser={logoutUser} postUserData={postUserData}/>}
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
