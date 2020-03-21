import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profileState, dispatch}) =>{

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profileState.posts} 
              dispatch={dispatch} 
              newPostText={profileState.newPostText}/>
    </div>
  );
}

export default Profile;