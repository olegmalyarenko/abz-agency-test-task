import React, { Component } from 'react';
import Logo from '../Logo';
import { ReactComponent as MobileIcon } from './menu icon.svg';
import './Menu.scss';
import SideMenu from '../SideMenu/SideMenu';
import BackDrop from '../BackDrop/BackDrop';
export default class Menu extends Component {
    state = {
        width: 0,
        active: null,
        mobileMenu: false
    }

    menuToggleHandler = () => {
        this.setState((prevState) => {
            return {
                mobileMenu: !prevState.mobileMenu,
            }
        })

    }

    closemenuHandler = () => {
        this.setState(() => ({
            mobileMenu: false,
        }))

    }
    
    setSize = () =>  {
        this.setState({
            width: window.innerWidth
        });
      }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
      }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
      }
    
      active = (e) => {
          //e.target.classList.add('active');
          console.log(e.target.id);
          const target = e.target.id;
          this.setState(() => ({
            active: target,
          }));
          console.log(this.state.active);

      }

    render() {
            
        
        
        
        if(this.state.width < 800) {
            let backDrop = this.state.mobileMenu ? <BackDrop click={this.closemenuHandler} /> : null;
            
            return (
                <div className="menu" >
                    <div className="conteiner flex-menu">
                       <Logo/>
                       <MobileIcon onClick={this.menuToggleHandler}/>
                       <SideMenu visible={this.state.mobileMenu} click={this.menuToggleHandler}/>
                       { backDrop }
                    </div>
        
                </div>
            )

        }
    
    return (
        <div className="menu">
            <div className="conteiner flex-menu">
             <Logo/>
             <ul className="navigation">
                <li  id="about-me" ><a href="#register" className="menu-items">About me</a></li>
                <li  id="relationships" ><a href="#register" className="menu-items">Relationships</a></li>
                <li  id="requirements" ><a href="#register" className="menu-items">Requirements</a></li>
                <li  id="users" ><a href="#register" className="menu-items">Users</a></li>
                <li  id="sign-up" ><a href="#register" className="menu-items" >Sign Up</a></li>
    
              </ul>
            </div>

        </div>
    )
    }

}
