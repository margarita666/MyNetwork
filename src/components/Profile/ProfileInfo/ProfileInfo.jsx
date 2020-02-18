import React from 'react';
import './ProfileInfo.scss'

const ProfileInfo = () => {
  return (
    <div className="profile">
      <div>
        <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="background" />
      </div>
      <div className="profile__desc">ava</div>
    </div>
  );
}

export default ProfileInfo;