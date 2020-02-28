import React from 'react';
import './MessageItem.scss'

const MessageItem = ({text}) => {
  return(
    <div className="messages__item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt="avatar"/>
      {text}
    </div>
  )
}

export default MessageItem; 