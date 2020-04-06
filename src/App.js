import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navigation/NavigationContainer';
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
    <div className="app-wrapper"> 
    <Header />  
    <NavbarContainer />
      <div className="content">
        <Route render={() => <Profile />} 
                              path="/profile"/>
        <Route render={() => <DialogsContainer />} 
                              path="/dialogs"/>
        <Route render={() => <UsersContainer />} path="/users" />
        <Route component={News} path="/news"/>
        <Route component={Music} path="/music"/>
        <Route component={Settings} path="/settings"/>
      </div>
    </div>
  );
}

export default App;
