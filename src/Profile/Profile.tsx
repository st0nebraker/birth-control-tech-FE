import React from 'react';

export interface ProfileProps {
  lastOvulation: string,
  duration: number,
  averageCycle: number,
}

const Profile: React.SFC<ProfileProps> = ({lastOvulation, duration, averageCycle}) => {
  return (
    <section>
      <h1>Profile</h1>
       <p>
        <span>Last Ovulation: </span> {lastOvulation}
       </p>
       <p>
        <span>Duration: </span> {duration}
       </p>
       <p>
        <span>Average Cycle Length: </span> {averageCycle}
       </p>
    </section>
  )
}
export default Profile;