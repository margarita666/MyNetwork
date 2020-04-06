const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, text:`Hi, how are you?`, like:11},
    {id: 2, text:`It's my firs post`, like:7}
  ], 
  newPostText: 'Margarita',
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        text: state.newPostText,
        like: 0
      }   
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText:''
      }         
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default: 
      return state
  }
  
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_TEXT,
  newText: text}
)

export default profileReducer