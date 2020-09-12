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
           <li><a href="/" className='side-menu__item'>About me</a></li>
           <li><a href="/" className='side-menu__item'>Relationships</a></li>
           <li><a href="/" className='side-menu__item'>Users</a></li>
           <li><a href="/" className='side-menu__item'>Sign Up </a></li>
           <li><a href="/" className='side-menu__item'>Terms and Conditions</a></li>
        </ul>

        <ul className='side-menu__nav'>
           <li><a href="/" className='side-menu__item'>How it works</a></li>
           <li><a href="/" className='side-menu__item'>Partnership</a></li>
           <li><a href="/" className='side-menu__item'>Help</a></li>
           <li><a href="/" className='side-menu__item'>Live testimonial</a></li>
           <li><a href="/" className='side-menu__item'>Contact us</a></li>
        </ul>

        <ul className='side-menu__nav'>
           <li><a href="/" className='side-menu__item'>Articles</a></li>
           <li><a href="/" className='side-menu__item'>Our news</a></li>
           <li><a href="/" className='side-menu__item'>Testimonials</a></li>
           <li><a href="/" className='side-menu__item'>Licenses</a></li>
           <li><a href="/" className='side-menu__item'>Privacy Policy</a></li>
        </ul>

      </div>
        
    )
};

export default SideMenu;