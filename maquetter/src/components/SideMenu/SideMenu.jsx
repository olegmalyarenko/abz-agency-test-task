import React from 'react';
import './SideMenu.scss';
import Logo from '../Logo';


const SideMenu = (props) => {
  const open = "side-menu open";
  const close = "side-menu"
  const visibleMenu = props.visible ? open : close;
    return ( 
      <div className={visibleMenu} >
        <Logo />
        <ul className='side-menu__nav'>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>About me</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Relationships</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Users</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Sign Up </a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Terms and Conditions</a></li>
        </ul>

        <ul className='side-menu__nav'>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>How it works</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Partnership</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Help</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Live testimonial</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Contact us</a></li>
        </ul>

        <ul className='side-menu__nav'>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Articles</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Our news</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Testimonials</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Licenses</a></li>
           <li><a href="#register" className='side-menu__item' onClick={props.click}>Privacy Policy</a></li>
        </ul>

      </div>
        
    )
};

export default SideMenu;