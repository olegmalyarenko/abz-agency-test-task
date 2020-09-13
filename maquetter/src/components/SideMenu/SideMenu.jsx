import React from 'react';
import './SideMenu.scss';

const SideMenu = (props) => {
  const open = "side-menu open";
  const close = "side-menu"
  const visibleMenu = props.visible ? open : close;
    return ( 
      <nav className={visibleMenu} >
          <ul>
           <li><a href="/">Привет</a></li>
           <li><a href="/">Олег</a></li>
          </ul>
      </nav>
        
    )
};

export default SideMenu;