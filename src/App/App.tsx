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
import './App.css';

const App = () => {
	const [ username, setUsername ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [lastOvulation, setLastOvulation] = useState('08-01-2020');
  const [duration, setDuration] = useState(7);
  const [averageCycle, setAverageCycle] = useState(28);

  return (
    <main className="App">
			{loggedIn && <InfoTag />}
			<Switch>
				<Route path='/info' component={Info} />
				<Route path='/calendar' component={Calendar} />
				<Route path='/new-entry' component={Form} />
				<Route path='/stats' component={Reports} />
				<Route 
					path='/profile'
					render={() => <Profile lastOvulation={lastOvulation} duration={duration} averageCycle={averageCycle}/>}
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
