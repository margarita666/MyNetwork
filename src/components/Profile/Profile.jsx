import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profileState, dispatch, store}) =>{

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
}

export default Profile;