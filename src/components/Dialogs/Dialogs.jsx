import React from 'react';
import './Dialogs.scss';
import MessageItem from './MessagesItem/MessageItem';
import DialogItem from './DialogItems/DialogItem';
import {sendMessageActionCreator, updateMessageTextActionCreator} from './../../redux/dialogs-reducer.js'

const Dialogs = ({ state, dispatch }) => {

  let dialogsElements = state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id}></DialogItem>
  })

  let messagesElements = state.messages.map((el) => {
    return <MessageItem text={el.text}></MessageItem>
  })

  let sendMessages = () => {
    let action = sendMessageActionCreator();
    dispatch(action);
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    let action  = updateMessageTextActionCreator(text)
    dispatch(action);
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
        <textarea onChange={onMessageChange} value={state.newMessage} rows="3" cols="30"></textarea>
        <button onClick={sendMessages}>Send</button>
      </div>

    </div>
  );
}

export default Dialogs; 