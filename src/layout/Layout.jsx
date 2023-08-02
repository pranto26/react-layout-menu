import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <div className="navbar bg-info">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Module-8</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
      
      
    </ul>
  </div>
</div>
{props.children}
            
        </div>
    );
};

export default Layout;