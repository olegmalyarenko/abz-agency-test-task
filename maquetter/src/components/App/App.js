import React, { Component } from 'react';
import './App.scss';
import Menu from '../Menu';
import TestAssignment from '../TestAssignment';
import Acquainted from '../Acquainted';
import Users from '../Users';
import Register from '../Register';
import { getData, getStaff } from '../../services';
import ModalWindow from '../ModalWindow';


export default class App extends Component {

  state = {
    people: [],
    peopleCount: 6,
    button: true,
    modal: false,
    staff: [],
    width: 0
}
setSize = () =>  {
  this.setState({
      width: window.innerWidth
  });
  this.mobileUsers();
  
}

mobileUsers =() => {
  if (this.state.peopleCount > 6) {
    return;
  }

  if(this.state.width <= 450) {
    this.setState({
      peopleCount: 3
  });
  console.log ('Mob users', this.state.peopleCount);
  } else {
    this.setState({
      peopleCount: 6
  });
  }
}

updateState =  () => {
  getData(this.state.peopleCount).then((data) => {
    //console.log("Data", data);
    if (data) {
      this.setState((prevState) => ({
        ...prevState,
        people: data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
      }));
    }
  });

}

getStaffPositions = () => {
  getStaff().then((data) => {
   if (data) {
     console.log('staff', data);
      this.setState((prevState) => ({
        ...prevState,
        staff: data.positions
      }));
    }
  });
}


componentDidMount() {
  this.updateState();
  this.setSize();
  window.addEventListener('resize', this.setSize);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.setSize);
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
    //console.log('Button', this.state.button)
  }
  if(this.state.peopleCount === 42) {
    this.setState( (state) => ({
      peopleCount: state.peopleCount + 4
    }))
    //console.log('PeopleCount', this.state.peopleCount)
  } else {
  this.setState( (state) => ({
    peopleCount: state.peopleCount + 6,
  }))
  //console.log('PeopleCount', this.state.peopleCount)
  }
}

updatePeopleList = (email, name, phone, radio, image) => {
  const newUser = {
 email: email, 
 id: Math.round(Math.random()*(100 - 60) + 60), 
 name: name, 
 phone: phone, 
 photo: image, 
 position: radio,
 position_id: 1,
 registration_timestamp: Date.now()
};
console.log ('newUser',newUser);
if(this.state.peopleCount > 6) {
  
  this.setState(()=> ({
    peopleCount: 6,
  }));
}

this.setState((prevState) => ({
   
    people: prevState.people.unshift(newUser),
    ...prevState,
    
    }));

console.log('Новый юзер', this.state.people);  
}

modalToggleHandler = () => {
  this.setState((prevState) => {
      return {
          modal: !prevState.mobileMenu,
      }
  })
}

closeModalHandler = () => {
  debugger;
  this.setState(() => ({
      modal: false,
  }))

}

  render() {
    const { people , peopleCount, button, modal, width } = this.state;
    //console.log('Users users users', this.state.people);
    const modalWindow = modal ? <ModalWindow click={this.closeModalHandler} /> : null;
  return (
    <div className="App">
           
        <Menu />
        <TestAssignment  width={width}/>
        <Acquainted />
        <Users  
        width={width}
        people={people} 
        peopleCount={peopleCount} 
        button={button} 
        addUsers={this.addUsers}  
        />
        <Register
        updatePeopleList={this.updatePeopleList}
        modalToggleHandler={this.modalToggleHandler}
        modalWindow= {modalWindow}
        />
        
    </div>
  );
  }
}