import React, { Component } from 'react';
import './Users.scss';
import User from '../User';
import getData from '../../services';
 export default class Users extends Component {

    state = {
        page: 1,
        people: []
    }

    componentDidMount() {
      getData().then((data) => {
        if (data) {
          this.setState((prevState) => ({
            ...prevState,
            people: data.users.sort((a, b) => a - b)
          }));
        }
      });
    }

    render(){
      const { people } = this.state
    console.log('рендер стейт', people[0])
    
    return(
     <div>
       <div className="users-titles">  
         <h2>Our cheerful users</h2>
         <p>Attention! Sorting users by registration date</p>
       </div>  
     <div className="user-list">
       <User people={people[0]}/>
     </div>
     <button>Show more</button>
     </div>
    )
    }
 };
