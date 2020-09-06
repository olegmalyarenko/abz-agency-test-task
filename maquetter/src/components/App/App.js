import React, { Component } from 'react';
import './App.scss';
import Menu from '../Menu';
import TestAssignment from '../TestAssignment';
import Acquainted from '../Acquainted';
import Users from '../Users';
import Register from '../Register';
import getData from '../../services';


export default class App extends Component {

  state = {
    people: [],
    peopleCount: 6,
    button: true
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
  render() {
    const { people , peopleCount, button } = this.state;
  return (
    <div className="App">
           
        <Menu />
        <TestAssignment />
        <Acquainted />
        <Users  people={people} peopleCount={peopleCount} button={button} addUsers={this.addUsers} />
        <Register />
    </div>
  );
  }
}