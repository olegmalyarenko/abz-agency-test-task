import React, { Component } from 'react';
import './Users.scss';
import User from '../User';
import getData from '../../services';
 export default class Users extends Component {

    state = {
        people: [],
        peopleCount: 6
    }

    componentDidMount() {
      getData(this.state.peopleCount).then((data) => {
        console.log("Data", data);
        if (data) {
          this.setState((prevState) => ({
            ...prevState,
            people: data.users.sort((a, b, registration_timestamp) => b.registration_timestamp - a.registration_timestamp)
          }));
        }
      });
    }

    render(){
      const { people } = this.state;
      console.log('Users', people);
      
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
    
    return(
     <div>
       <div className="users-titles">  
         <h2>Our cheerful users</h2>
         <p>Attention! Sorting users by registration date</p>
       </div>  
     <div className="users-list">
        { userData }
     </div>
     <button>Show more</button>
     </div>
    )
    }
 };
