import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogItem.scss'

const DialogItem = ({name, id}) => {
  let path = `/dialogs/${id}`;

  return(
    <div>
      <NavLink className="dialogs__item" to={path}>{name}</NavLink>
    </div>
    
  )
}

export default DialogItem; 