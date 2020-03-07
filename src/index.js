import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store, { subscribe } from './redux/state';
import {addPost, updateNewPostText, sendMessage, updateMessageText} from './redux/state';

let rerenderEntireTree = (state) => {

  ReactDOM.render(<BrowserRouter><App 
                  state={state} 
                  addPost={addPost} 
                  updatePost={updateNewPostText} 
                  sendMessage={sendMessage} 
                  updateMessage={updateMessageText}/></BrowserRouter>, document.getElementById('root'));
 
}
rerenderEntireTree(store.getState);

subscribe(rerenderEntireTree)