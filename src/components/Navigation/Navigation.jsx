import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="item">
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className="item">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="item">
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className="item">
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;