let state = {
  profilePage: {
    posts: [
      {id: 1, text:`Hi, how are you?`, like:11},
      {id: 2, text:`It's my firs post`, like:7}
    ]
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
    ]
  },

  navbar: {
    friends: [
      {id: 1, name:'Helen'},
      {id: 2, name:'Helen'},
      {id: 3, name:'Helen'}
    ]
  },
}

export let addPost = (postText) =>{
  debugger;
  let newPost = {
    id: 3,
    text: postText,
    like: 0
  }
  debugger;
  state.profilePage.posts.push(newPost)
}
export default state;