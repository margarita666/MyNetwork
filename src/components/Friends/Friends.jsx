import React from 'react';
import './Friends.scss'

const Friends = ({name}) => {
  return(
    <div className="friends__item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt="avatar"/>
      {name}
    </div>
  )
}

export default Friends; 