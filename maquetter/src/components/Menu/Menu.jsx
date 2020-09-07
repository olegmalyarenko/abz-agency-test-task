import React, { Component } from 'react';
import Logo from '../Logo';
import { ReactComponent as MobileIcon } from './menu icon.svg';
import './Menu.scss';
export default class Menu extends Component {
    state = {
        width: 0
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
    

    render() {
            

        
        if(this.state.width < 800) {
            return (
                <div className="menu" >
                    <div className="conteiner flex-menu">
                       <Logo/>
                       <MobileIcon />
                    </div>
        
                </div>
            )

        }
    
    return (
        <div className="menu">
            <div className="conteiner flex-menu">
             <Logo/>
             <ul className="navigation">
                <li>About me</li>
                <li>Relationships</li>
                <li>Requirements</li>
                <li>Users</li>
                <li>Sign Up</li>
    
              </ul>
            </div>

        </div>
    )
    }

}
