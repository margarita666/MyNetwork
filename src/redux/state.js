import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, text:`Hi, how are you?`, like:11},
        {id: 2, text:`It's my firs post`, like:7}
      ], 
      newPostText: 'Margarita',
    },
  
    dialogsPage: {
      dialogs: [
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
    },
  
    navbar: {
      friends: [
        {id: 1, name:'Helen'},
        {id: 2, name:'Julia'},
        {id: 3, name:'Inna'}
      ]
    },
  },
  _callSubscriber() {
    console.log('rerendered')
  },

  getState() {
    return this._state;
  },
    subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
    this._callSubscriber(this._state);
  }, 

  addPost() {
    let newPost = {
      id: 3,
      text: this._state.profilePage.newPostText,
      like: 0
    }
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText='';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  sendMessage () {
    let newMessage = {
      id:5,
      text: this._state.dialogsPage.newMessage
    }
  
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessage = '';
    this._callSubscriber(this._state);
  } ,

  updateMessageText(newMessageText) {
    this._state.dialogsPage.newMessage = newMessageText;
    this._callSubscriber(this._state)
  },

}
 
export default store;
window.store = store;