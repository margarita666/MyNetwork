import React from 'react';
import logo from './../../download.png';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div>
      <img src={logo} alt="logo"/>
      <p>My Network</p>
      </div>
    </header>
  );
}
 
export default Header;