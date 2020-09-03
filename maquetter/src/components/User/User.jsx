import React, { Component } from 'react'; 
import './index.js';
import './User.scss';


export default class User extends Component {
    render() {
        console.log('Props', this.props);
        const falseData = () => {
            return (
                <p>Data is not ready</p>
            )
        }
        
        const trueData = () => {
            const { photo, name, position, email,phone } = this.props.user;
            console.log('User', email);
            return(
            
                <div className="user-card" >
                    <img className="user-photo" src={photo} alt="user-photo"/>
                    <h2> {name} </h2>
                    <p>{position}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
      
                </div>
              )

        }
        
        const userData = this.props.user ? trueData() : falseData();

        return(
          <div className="user">
            { userData }
          </div>
        )    
    };
};
