import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'

function App({state, addPost}) {
  return (
    <div className="app-wrapper"> 
    <Header />  
    <Navbar state={state.navbar}/>
      <div className="content">
        <Route render={() => <Profile state={state.profilePage} 
                                      addPost={addPost}/>} path="/profile"/>
        <Route render={() => <Dialogs state={state.dialogsPage}/>} path="/dialogs"/>
        <Route component={News} path="/news"/>
        <Route component={Music} path="/music"/>
        <Route component={Settings} path="/settings"/>
      </div>
    </div>
  );
}

export default App;
