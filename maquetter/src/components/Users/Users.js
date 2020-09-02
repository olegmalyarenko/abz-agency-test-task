import React, { Component } from 'react';
import './Users.scss';
import User from '../User';
import {
    getData
  } from '../../services';
 export default class Users extends Component {

    state = {
        page: 1,
        people: []
    }

    componentDidMount () {
        this.peopleData(); 
        
    }
    
    peopleData = async () => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=46') 
       .then(function(response) { 
          return response.json(); 
        }) 
        .then((data)  => { 
            if(data) { 
                let curData = data.users.sort(function(a, b) {
                    return a - b;
                  });
                  
                console.log(curData);
                
                this.setState(({ people }) => { 
                    const newArr = [...curData]
        
                    return {
                        people: newArr
                    }
        
                })

                
                } else {
                    console.log('неудачно');  
                }
            })
    } 
    render(){
    console.log('рендер стейт', this.state.people)
    
    return(
     <div>
       <div className="users-titles">  
         <h2>Our cheerful users</h2>
         <p>Attention! Sorting users by registration date</p>
       </div>  
     <div className="user-list">
       <User people={this.state.people}/>
     </div>
     <button>Show more</button>
     </div>
    )
    }
 };
