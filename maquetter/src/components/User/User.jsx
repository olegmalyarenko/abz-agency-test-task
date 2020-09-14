import React from 'react'; 
import './index.js';
import './User.scss';
import { ReactComponent as DefaultPhoto } from './photo-cover.svg';
import ReactTooltip from 'react-tooltip';

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
                    <h2 data-tip={name}> {name} </h2>
                    <p data-tip={position}>{position}</p>
                    <p data-tip={email}>{email}</p>
                    <p data-tip={phone}>{phone}</p>
                    <ReactTooltip place='bottom' />
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
