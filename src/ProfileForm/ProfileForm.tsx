import React, { useEffect, useState } from 'react';
import './ProfileForm.scss';

export interface ProfileFormProps {
  postUserData: Function;
}

const ProfileForm: React.SFC<ProfileFormProps> = ({ postUserData }) => {
	const [ lastOvulation, setLastOvulation ] = useState('');
  const [ avgCycleLength, setAvgCycleLength ] = useState('');
	const [ avgPeriodLength, setAvgPeriodLength ] = useState('');

	const handleSubmit = async (event: any) => {
    event.preventDefault();
    postUserData(lastOvulation, avgCycleLength, avgPeriodLength)
	}

  return (
			<form className='profile-form'>
				<label>First Day of Your Last Period:</label>
					<input
            name='lastOvulation'
					  type='date'
					  placeholder='mm/dd/yyyy'
					  value={lastOvulation}
            aria-label='last-ovulation-input'
            data-testid='date'
					  onChange={e => setLastOvulation(e.target.value)} 
				  />
        <label>Average Cycle Length:</label>
					<input
            name='avgCycleLength'
					  type='number'
					  placeholder='28 Days'
					  value={avgCycleLength}
					  aria-label='average-cycle-length-label'
					  onChange={e => setAvgCycleLength(e.target.value)} 
					/>
        <label>Average Period Length:</label>
					<input
            name='avgPeriodLength'
					  type='number'
					  placeholder='7 Days'
					  value={avgPeriodLength}
					  aria-label='average-period-length-input'
					  onChange={e => setAvgPeriodLength(e.target.value)} 
					/>
				<button 
          onClick={handleSubmit}
          type='button'
        >
          Submit
        </button>
			</form>
  )
}
export default ProfileForm;