const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGES = 'SEND-MESSAGES';

let dialogsReducer = (state, action) => {

  switch(action.type) {
    case SEND_MESSAGES:
      let newMessage = {
        id:5,
        text: state.newMessage
      }
    
      state.messages.push(newMessage);
      state.newMessage = '';

      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessage = action.newMessageText;
      
      return state;
    default: 
      return state;
  }

}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGES });
export const updateMessageTextActionCreator = (text) => (
  { type: UPDATE_MESSAGE_TEXT,
    newMessageText: text }
)

export default dialogsReducer;