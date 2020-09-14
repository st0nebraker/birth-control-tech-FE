import React from 'react';
import './Profile.scss';
import ProfileForm from '../ProfileForm/ProfileForm';
import { Link } from "react-router-dom";
import { userDetails } from '../App/App';

export interface ProfileProps {
  logoutUser: Function;
  postUserData: Function;
	userData: userDetails[];
	username: string;
  error: string;
}

const Profile: React.SFC<ProfileProps> = ({logoutUser, postUserData, userData, username, error}) => {
  return (
    <main className='profile'>
      <h1 className='headings'>Profile</h1>
      <section className='profile-container'>
        {error && <p className='error-msg'>Oh no! Something went wrong. Please try again.</p>}
        {!error && userData.find(x => x.name === username) &&  (
          <>
            <p>
            <span>Last Ovulation: </span> <br/>{userData[userData.length-1].start_date}
            </p>
            <p>
            <span>Duration: </span> <br/>{userData[userData.length-1].avg_length} Days
            </p>
            <p>
            <span>Average Cycle Length: </span> <br/>{userData[userData.length-1].avg_cycle} Days
            </p>
          </>)
        }
        {!error && !userData.find(x => x.name === username) && <ProfileForm postUserData={postUserData}/>}
      </section>
      <Link to='/'>
        <button className='logout-button' type='button' onClick={(event) => logoutUser(event)}>
          Logout
        </button>
      </Link>
    </main>
  )
}
export default Profile;