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
        debugger;
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
            //let mobileMenu = this.state.mobileMenu ?  'block' : 'none';
            let sideMenu;
            let backDrop;
            if (this.state.mobileMenu) {
                sideMenu = <SideMenu />;
                backDrop = <BackDrop click={this.closemenuHandler} />;

            }
            return (
                <div className="menu" >
                    <div className="conteiner flex-menu">
                       <Logo/>
                       <MobileIcon onClick={this.menuToggleHandler}/>
                       { sideMenu }
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
                <li className={this.state.active === this.id ? 'active' : null} id="about-me" onClick={this.active}>About me</li>
                <li className="menu-items" id="relationships" onClick={this.active}>Relationships</li>
                <li className="menu-items" id="requirements" onClick={this.active}>Requirements</li>
                <li className="menu-items" id="users" onClick={this.active}>Users</li>
                <li className="menu-items" id="sign-up" onClick={this.active}>Sign Up</li>
    
              </ul>
            </div>

        </div>
    )
    }

}
