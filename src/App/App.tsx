import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import InfoTag from '../NavBar/InfoTag'
import Info from '../Info/Info'
import Reports from '../Reports/Reports'
import './App.css';

const App = () => {
	//userName for login state

  return (
    <main className="App">
			<InfoTag />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/info' component={Info} />
				<Route path='/stats' component={Reports} />
			</Switch>
			<NavBar />
    </main>
  );
}

export default App;
