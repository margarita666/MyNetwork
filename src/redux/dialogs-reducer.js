const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGES = 'SEND-MESSAGES';

let initialState = {dialogs: [
  {id: 1, name: 'Margarita'},
  {id: 2, name: 'Helen'},
  {id: 3, name: 'Inna'},
  {id: 4, name: 'Ann'},
],
messages: [
  {id: 1, text: 'Hi'},
  {id: 2, text: 'How are you'},
  {id: 3, text: 'Hello'},
  {id: 4, text: 'Wats up'},
],
newMessage: '',
}

let dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case SEND_MESSAGES:{
      let newMessage = {
        id:5,
        text: state.newMessage
      }
      return{
        ...state,
        messages: [...state.messages, newMessage],
        newMessage: ''
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessage: action.newMessageText
      }     
    }
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