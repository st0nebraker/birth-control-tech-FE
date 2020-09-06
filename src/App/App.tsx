import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import InfoTag from '../NavBar/InfoTag'
import Info from '../Info/Info'
import Reports from '../Reports/Reports'
import Home from '../Home/Home'
import Profile from '../Profile/Profile';
import Form from '../Form/Form';
import './App.css';

const App = () => {
	//userName for login state
	const [lastOvulation, setLastOvulation] = useState('08-01-2020');
  const [duration, setDuration] = useState(7);
  const [averageCycle, setAverageCycle] = useState(28);

  return (
    <main className="App">
			<InfoTag />
			<Switch>
				<Route path='/info' component={Info} />
				<Route path='/stats' component={Reports} />
				<Route 
					path='/profile'
					render={() => <Profile lastOvulation={lastOvulation} duration={duration} averageCycle={averageCycle}/>}
				/>
				<Route path='/new-entry' component={Form} />
				<Route path='/' component={Home} />
			</Switch>
			<NavBar />
    </main>
  );
}

export default App;
