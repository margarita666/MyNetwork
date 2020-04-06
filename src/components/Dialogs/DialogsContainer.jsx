import React from 'react';
import './Dialogs.scss';
import {sendMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = ({ store }) => {
//   let state = store.getState();

//   let sendMessages = () => {
//     let action = sendMessageActionCreator();
//     store.dispatch(action);
//   }

//   let onMessageChange = (text) => {
//     let action  = updateMessageTextActionCreator(text)
//     store.dispatch(action);
//   }

//   return (
//     <Dialogs updateMessageText={onMessageChange} 
//               sendMessage={sendMessages}
//               newMessage={state.dialogsPage.newMessage}
//               dialogs={state.dialogsPage.dialogs}
//               messages={state.dialogsPage.messages}/>
//   );
// }
let mapStateToPrors = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

let mapDispachToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      let action  = updateMessageTextActionCreator(text)
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageActionCreator();
      dispatch(action);
    }
  }
}
const DialogsContainer = connect(mapStateToPrors, mapDispachToProps) (Dialogs)

export default DialogsContainer; 