import React from 'react';
import './SideMenu.scss';

const SideMenu = (props) => {
    return ( 
      <nav className="side-menu" onClick={props.closemenuHandler}>
          <ul>
           <li><a href="/">Привет</a></li>
           <li><a href="/">Олег</a></li>
          </ul>
      </nav>
        
    )
};

export default SideMenu;