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
      <p className='headings'>Profile</p>
      <section className='profile-container'>
        {error && <p className='error-msg'>Oh no! Something went wrong. Please try again.</p>}
        {!error && userData.find(x => x.name === username) &&  (
          <section style={{marginTop: '10%', marginBottom: '10%'}}>
            <p className='profile-info'>
            <span style={{marginRight: '2%', color: 'white'}}>Last Ovulation: </span> {userData[userData.length-1].start_date}
            </p>
            <p className='profile-info'>
            <span style={{marginRight: '2%', color: 'white'}}>Duration: </span> {userData[userData.length-1].avg_period} days
            </p>
            <p className='profile-info'>
            <span style={{marginRight: '2%', color: 'white'}}>Avg Cycle Length: </span> {userData[userData.length-1].avg_cycle} days
            </p>
          </section>)
        }
        {!error && !userData.find(x => x.name === username) && <ProfileForm postUserData={postUserData} username={username} />}
      </section>
      <Link to='/'>
        <button className='logout-button' type='button' onClick={(event) => logoutUser(event)}>
          LOGOUT
        </button>
      </Link>
    </main>
  )
}
export default Profile;