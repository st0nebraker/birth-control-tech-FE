// import React, { useState }from 'react';
// import './ProfileFrom.scss';

// const ProfileForm: React.FC = () => {
//   const [ avgCycleLength, setAvgCycleLength ] = useState('');
// 	const [ avgPeriodLength, setAvgPeriodLength ] = useState('');
// 	const [ lastOvulation, setLastOvulation ] = useState('');
// }

// export default ProfileForm;

import React, { useEffect, useState } from 'react';
import './ProfileForm.scss';


const ProfileForm: React.FC = () => {
	const [ lastOvulation, setLastOvulation ] = useState('');
  const [ avgCycleLength, setAvgCycleLength ] = useState('');
	const [ avgPeriodLength, setAvgPeriodLength ] = useState('');

	const handleSubmit = () => {
		//submit logic
	}

  return (
			<form className='profile-form'>
				<label className='profile-label'>First Day of Your Last Period:</label>
					<input
          name='lastOvulation'
          className='profile-input'
					type='date'
					placeholder='mm/dd/yyyy'
					value={lastOvulation}
					aria-label='last-ovulation-input'
					onChange={e => setLastOvulation(e.target.value)} 
				  />
        <label className='profile-label'>Average Cycle Length:</label>
					<input
          name='avgCycleLength'
          className='profile-input'
					type='number'
					placeholder='28 Days'
					value={avgCycleLength}
					aria-label='average-cycle-length-label'
					onChange={e => setAvgCycleLength(e.target.value)} 
					/>
        <label className='profile-label'>Average Period Length:</label>
					<input
          name='avgPeriodLength'
          className='profile-input'
					type='number'
					placeholder='7 Days'
					value={avgPeriodLength}
					aria-label='average-period-length-input'
					onChange={e => setAvgPeriodLength(e.target.value)} 
					/>
				<button 
          onClick={handleSubmit}
          type='button'
          className='profile-button'
        >
          Submit
        </button>
			</form>
  )
}
export default ProfileForm;