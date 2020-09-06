import React, { Component } from 'react';
import './Users.scss';
import User from '../User';
const Users = ({ people, button, addUsers }) => {
      
      const Loading = () => {
        return (
            <p>Data is not ready</p>
        )
      };
      const peopleList = () => {
        return people.map((user) => {
          const { id } = user;
          return (
            <User key={id} user={user} />
          )

        })
      };

      const userData = people ? peopleList() : Loading();

      const showButton = () => {
        return(
          <button onClick={addUsers} className="show-button">Show more</button>
        )
      };
      
      const disabledButton = () => {
        return(
          <button className="disabled-button">Disabled</button>
        )
      };

      const buttonToggle = button ? showButton() : disabledButton();
      
    
    
    return(
     <div className="users-block ">
       <div className="conteiner">
         <div className="users-titles">  
           <h2>Our cheerful users</h2>
           <p>Attention! Sorting users by registration date</p>
          </div>  
          <div className="users-list">
            { userData }
          </div>
          <div className="button-row">
            { buttonToggle } 
          </div>  
        </div>
     </div>
    )
    
 };
 export default Users;
