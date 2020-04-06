import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = ({store}) => {

//   let state=store.getState();

//   let addPosts=() => {
//     let action = addPostActionCreator();
//     store.dispatch(action);
//   }

//   let onPostChange = (text) =>{
//     let action = updateNewPostTextActionCreator(text)
//     store.dispatch(action);
//   }

//   return (
//     <MyPosts updateNewPostText={onPostChange} addPost={addPosts} 
//               posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//   );
  
// }

let mapStateToPrors = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispachToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToPrors, mapDispachToProps) (MyPosts)

export default MyPostsContainer;