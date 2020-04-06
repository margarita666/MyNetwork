import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'
import Friends from '../Friends/Friends';

const Navbar = ({state}) => {
  let friendElement = state.friends.map((el) => <Friends name={el.name} key={el.id}/>)
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

      <div className="friends">
        <p>Friends</p>
        <div className="friends__wrap">
          {friendElement}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;