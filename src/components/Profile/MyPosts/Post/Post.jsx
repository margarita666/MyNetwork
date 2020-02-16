import React from 'react';
import './Post.scss';

const Post = () => {
  return(
    <div className = "post__item"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt=""/>
      post1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;