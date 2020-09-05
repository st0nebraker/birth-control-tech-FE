import React, { useState } from 'react';
import './App.css';
import Profile from './Profile/Profile';

const App: React.SFC = () => {
  const [lastOvulation, setLastOvulation] = useState('08-01-2020');
  const [duration, setDuration] = useState(7);
  const [averageCycle, setAverageCycle] = useState(28);

  return (
    <main>
      <Profile lastOvulation={lastOvulation} duration={duration} averageCycle={averageCycle}/>
    </main>
  );
}

export default App;
