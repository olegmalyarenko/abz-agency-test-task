import React, { Component } from 'react';
import './Users.scss';
import User from '../User';
import getData from '../../services';
 export default class Users extends Component {

    state = {
        people: [],
        peopleCount: 6,
        button: true,
    }
    

    updateState =  () => {
      getData(this.state.peopleCount).then((data) => {
        console.log("Data", data);
        if (data) {
          this.setState((prevState) => ({
            ...prevState,
            people: data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
          }));
        }
      });

    }
    componentDidMount() {
      this.updateState();
     
    }

    componentDidUpdate (prevState){
      if (this.state.peopleCount !== prevState.peopleCount){
        this.updateState();
      }
    }

    addUsers = () => {
      if(this.state.peopleCount === 46 ) {
        this.setState({
          button: false,
        })
        console.log('Button', this.state.button)
      }
      if(this.state.peopleCount === 42) {
        this.setState( (state) => ({
          peopleCount: state.peopleCount + 4
        }))
        console.log('PeopleCount', this.state.peopleCount)
      } else {
      this.setState( (state) => ({
        peopleCount: state.peopleCount + 6,
      }))
      console.log('PeopleCount', this.state.peopleCount)
    }
    }

    render(){
      const { people, button } = this.state;
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

      const showButton = () => {
        return(
          <button onClick={this.addUsers} className="show-button">Show more</button>
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
    }
 };
