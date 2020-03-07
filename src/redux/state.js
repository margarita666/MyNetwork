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
        {id: 2, name:'Helen'},
        {id: 3, name:'Helen'}
      ]
    },
  },
  _rerenderEntireTree() {
    console.log('rerendered')
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 3,
      text: this._state.profilePage.newPostText,
      like: 0
    }
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText='';
    this._rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  sendMessage () {
    let newMessage = {
      id:5,
      text: this._state.dialogsPage.newMessage
    }
  
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessage = '';
    this._rerenderEntireTree(this._state);
  } ,

  updateMessageText(newMessageText) {
    this._state.dialogsPage.newMessage = newMessageText;
    this._rerenderEntireTree(this._state)
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  }
}


// let state = {
//   profilePage: {
//     posts: [
//       {id: 1, text:`Hi, how are you?`, like:11},
//       {id: 2, text:`It's my firs post`, like:7}
//     ], 
//     newPostText: 'Margarita',
//   },

//   dialogsPage: {
//     dialogs: [
//       {id: 1, name: 'Margarita'},
//       {id: 2, name: 'Helen'},
//       {id: 3, name: 'Inna'},
//       {id: 4, name: 'Ann'},
//     ],
//     messages: [
//       {id: 1, text: 'Hi'},
//       {id: 2, text: 'How are you'},
//       {id: 3, text: 'Hello'},
//       {id: 4, text: 'Wats up'},
//     ],
//     newMessage: '',
//   },

//   navbar: {
//     friends: [
//       {id: 1, name:'Helen'},
//       {id: 2, name:'Helen'},
//       {id: 3, name:'Helen'}
//     ]
//   },
// }

// let rerenderEntireTree = () =>{
//   console.log('rerendered')
// }

// export let addPost = () =>{
//   let newPost = {
//     id: 3,
//     text: state.profilePage.newPostText,
//     like: 0
//   }

//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText='';
//   rerenderEntireTree(state);
// }

// export let updateNewPostText = (newText) =>{
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);

// }

// export let sendMessage = () => {
//   let newMessage = {
//     id:5,
//     text: state.dialogsPage.newMessage
//   }

//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessage = '';
//   rerenderEntireTree(state);
// }

// export let updateMessageText = (newMessageText) => {
//   state.dialogsPage.newMessage = newMessageText;
//   rerenderEntireTree(state)
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }
 
export default store;