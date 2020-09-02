import React, { Component } from 'react';
import './Users.scss';
import {
    getData
  } from '../../services';
 export default class Users extends Component {

    componentDidMount () {
        this.peopleData(); 
        
    }
    
    peopleData = async () => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6') 
       .then(function(response) { 
          return response.json(); 
        }) 
        .then(function(data) { 
            if(data) { 
                console.log(data);
                
                } else {
                    console.log('неудачно');  
                }
            })
    } 
    render(){

    
    return(
     <div>
       <div className="users-titles">  
         <h2>Our cheerful users</h2>
         <p>Attention! Sorting users by registration date</p>
       </div>  
     <div className="user-list">

     </div>
     <button>Show more</button>
     </div>
    )
    }
 };
