import React from 'react'; 
import './index.js';
import './User.scss';
import { ReactComponent as DefaultPhoto } from './photo-cover.svg';

const User = ({ user }) =>  {
         //console.log('Props', this.props);
        const falseData = () => {
            return (
                <p>Data is not ready</p>
            )
        }
        
        const trueData = () => {
            const { photo, name, position, email,phone } = user;
            //console.log('User', email);
            const personPhoto = photo ? photo : <DefaultPhoto/>;
            return(
            
                <div className="user-card" >
                    <img className="user-photo" src={personPhoto} alt='user' />
                    <h2> {name} </h2>
                    <p>{position}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
      
                </div>
              )

        }
        
        const userData = user ? trueData() : falseData();

        return(
          <div className="user">
            { userData }
          </div>
        )    
    };

 export default User;   
