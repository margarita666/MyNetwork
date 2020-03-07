import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profileState, addPost, updatePost}) =>{

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profileState.posts} 
              addPost={addPost} 
              newPostText={profileState.newPostText}
              updatePost={updatePost}/>
    </div>
  );
}

export default Profile;