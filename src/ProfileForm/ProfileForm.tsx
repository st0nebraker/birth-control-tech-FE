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
			<form>
				<label className='profile-input'>First Day of Your Last Period:
					<input
					name='lastOvulation'
					type='date'
					placeholder='mm/dd/yyyy'
					value={lastOvulation}
					aria-label='last-ovulation-input'
					onChange={e => setLastOvulation(e.target.value)} 
				  />
				</label>
        <label className='profile-input'>Average Cycle Length:
					<input
					name='avgCycleLength'
					type='number'
					placeholder='0'
					value={avgCycleLength}
					aria-label='average-cycle-length-input'
					onChange={e => setAvgCycleLength(e.target.value)} 
					/>
				</label>
        <label className='profile-input'>Average Period Length:
					<input
					name='avgPeriodLength'
					type='number'
					placeholder='0'
					value={avgPeriodLength}
					aria-label='average-period-length-input'
					onChange={e => setAvgPeriodLength(e.target.value)} 
					/>
				</label>
				<button 
          onClick={handleSubmit}
          type='button'
          className='form-button'
        >
          Submit
        </button>
			</form>
  )
}
export default ProfileForm;