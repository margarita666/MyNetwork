import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss'


const MyPosts = () => {

  let postsData = [
    {id: 1, text:`Hi, how are you?`, like:11},
    {id: 2, text:`It's my firs post`, like:7}
  ]
  return (
    <div className="posts">
      <h3>My Posts</h3>
      <div className="add-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message={postsData[0].text} like={postsData[0].like}/>
        <Post message={postsData[1].text} like={postsData[1].like}/>
      </div>
    </div>
  );
}

export default MyPosts;