import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.scss'

const DialogItem = ({name, id}) => {
  let path = `/dialogs/${id}`;

  return(
    <div>
      <NavLink className="dialogs__item" to={path}>{name}</NavLink>
    </div>
    
  )
}

const Message = ({text}) => {
  return(
    <div className="messages__item">{text}</div>
  )
}

const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Margarita'},
    {id: 2, name: 'Helen'},
    {id: 3, name: 'Inna'},
    {id: 4, name: 'Ann'},
  ]

  let massagesData = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you'},
    {id: 3, text: 'Hello'},
    {id: 4, text: 'Wats up'},
  ]

  return (
    <div className="dialogs">
      <div className="dialogs__wrap">
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>
      </div>

      <div className="messages">
        <Message text={massagesData[0].text}></Message> 
        <Message text={massagesData[1].text}></Message>        
      </div>
    </div>
  );
}

export default Dialogs; 