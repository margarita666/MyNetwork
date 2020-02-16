import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
  return (
    <div className="content">
      <div>
        <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div>ava</div>
      <MyPosts />
    </div>
  );
}

export default Profile;