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

function App() {
  return (
    <div className="app-wrapper"> 
    <Header />  
    <Navbar />
      <div className="content">
      <Route component={Profile} path="/profile"/>
        <Route component={Dialogs} path="/dialogs"/>
        <Route component={News} path="/news"/>
        <Route component={Music} path="/music"/>
        <Route component={Settings} path="/settings"/>
      </div>
    </div>
  );
}

export default App;
