import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.scss'
import MessageItem from './MessagesItem/MessageItem';
import DialogItem from './DialogItems/DialogItem';

const Dialogs = ({ state, sendMessage, updateMessage }) => {

  let dialogsElements = state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id}></DialogItem>
  })

  let messagesElements = state.messages.map((el) => {
    return <MessageItem text={el.text}></MessageItem>
  })

  let newMessage = React.createRef();

  let sendMessages = () => {
     sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    updateMessage(text);
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
        <textarea ref={newMessage} onChange={onMessageChange} value={state.newMessage} rows="3" cols="30"></textarea>
        <button onClick={sendMessages}>Send</button>
      </div>

    </div>
  );
}

export default Dialogs; 