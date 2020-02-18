import React from 'react';
import './Post.scss';

const Post = ({message, like}) => {

  return(
    <div className = "post__item"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt="avatar"/>
      {message}
      <div>
        <span>Like: {like}</span>
      </div>
    </div>
  );
}

export default Post;