import React from 'react';

export interface Profile {
  lastOvulation: string,
  duration: number,
  avgCycle: number,
}

const Profile: React.SFC<Profile> = () => {
  return (
    <section>
      <h1>Profile</h1>
    </section>
  )
}
export default Profile;