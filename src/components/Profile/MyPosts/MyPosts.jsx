import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss'



const MyPosts = ({posts, addPost}) => {
  let postsElements = 
  posts.map((el)=>{return <Post message={el.text} like={el.like}/> });

  let myRef = React.createRef();

  let addPosts=() => {
    debugger;
    let text = myRef.current.value;
    addPost(text)
  }
  return (
    <div className="posts">
      <h3>My Posts</h3>
      <div className="post-form">
        <textarea ref={myRef} className="post-field"></textarea>
        <button onClick={addPosts} className="post-btn">Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
  
}

export default MyPosts;