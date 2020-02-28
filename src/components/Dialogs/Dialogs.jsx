import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.scss'
import MessageItem from './MessagesItem/MessageItem';
import DialogItem from './DialogItems/DialogItem';

const Dialogs = ({ state }) => {

  let dialogsElements = state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id}></DialogItem>
  })

  let messagesElements = state.messages.map((el) => {
    return <MessageItem text={el.text}></MessageItem>
  })

  let newMessage = React.createRef();

  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }
  return (
    <div className="dialogs">
      <div className="dialogs__wrap">
        {dialogsElements}
      </div>

      <div className="messages">
        {messagesElements}
      </div>
      <div className="send">
        <textarea ref={newMessage} rows="3" cols="30"></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}

export default Dialogs; 