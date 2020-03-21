import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';



const MyPosts = ({posts, dispatch, newPostText}) => {
  let postsElements = 
  posts.map((el)=>{return <Post message={el.text} like={el.like}/> });

  let addPosts=() => {
    let action = addPostActionCreator();
    dispatch(action);
  }

  let onPostChange = (e) =>{
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text)
    dispatch(action);
  }

  return (
    <div className="posts">
      <h3>My Posts</h3>
      <div className="post-form">
        <textarea className="post-field" onChange={onPostChange} value={newPostText}/>
        <button onClick={addPosts} className="post-btn">Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
  
}

export default MyPosts;