import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper"> 
    <Header />  
    <Navbar />
    <Profile />
    </div>
  );
}

export default App;
