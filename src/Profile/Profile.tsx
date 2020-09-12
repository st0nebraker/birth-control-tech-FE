import React from 'react';
import './Profile.scss';
import ProfileForm from '../ProfileForm/ProfileForm';
import { Link } from "react-router-dom";

export interface ProfileProps {
  lastOvulation: string;
  duration: number;
  averageCycle: number;
  logoutUser: Function;
}

const Profile: React.SFC<ProfileProps> = ({lastOvulation, duration, averageCycle, logoutUser}) => {
  return (
    <main className='profile'>
      <h1 className='headings'>Profile</h1>
      <section className='profile-container'>
        {/* <p>
         <span>Last Ovulation: </span> <br/>{lastOvulation}
        </p>
        <p>
         <span>Duration: </span> <br/>{duration} Days
        </p>
        <p>
         <span>Average Cycle Length: </span> <br/>{averageCycle} Days
        </p> */}
        <ProfileForm />
      </section>
      <Link to='/'>
        <button className='logout-button' type='button'onClick={(event) => logoutUser(event)}>
          Logout
        </button>
      </Link>
    </main>
  )
}
export default Profile;