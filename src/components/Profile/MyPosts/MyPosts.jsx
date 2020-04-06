import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss'

const MyPosts = ({addPost, updateNewPostText, posts, newPostText}) => {
  let postsElements = 
  posts.map((el)=>{return <Post message={el.text} like={el.like} key={el.id}/> });

  let addPosts=() => {
    addPost()  
  }

  let onPostChange = (e) =>{
    let text = e.target.value;
    updateNewPostText(text)
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