import React from 'react';
import './Dialogs.scss';
import MessageItem from './MessagesItem/MessageItem';
import DialogItem from './DialogItems/DialogItem';

const Dialogs = ({updateMessageText, newMessage, dialogs, messages, sendMessage }) => {

  let dialogsElements = dialogs.map((el) => {
    return <DialogItem name={el.name} key={el.id} id={el.id}></DialogItem>
  })

  let messagesElements = messages.map((el) => {
    return <MessageItem text={el.text} key={el.id}></MessageItem>
  })

  let sendMessages = () => {
    sendMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    updateMessageText(text)
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
        <textarea onChange={onMessageChange} value={newMessage} rows="3" cols="30"></textarea>
        <button onClick={sendMessages}>Send</button>
      </div>

    </div>
  );
}

export default Dialogs; 