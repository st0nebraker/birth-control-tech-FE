import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import InfoTag from '../NavBar/InfoTag'
import Home from '../Home/Home'
import './App.css';

const App = () => {
	//userName for login state

  return (
    <main className="App">
			<InfoTag />
			<Switch>
				<Route 
					path='/'
					component={Home}
				/>
			</Switch>
			<NavBar />
    </main>
  );
}

export default App;