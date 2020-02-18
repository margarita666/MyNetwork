import React from 'react';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message={`Hi, how are you?`} like='2'/>
        <Post message={`It's my firs post`} like='4'/>
      </div>
    </div>
  );
}

export default MyPosts;