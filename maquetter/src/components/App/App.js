import React from 'react';
import './App.scss';
import Menu from '../Menu';
import TestAssignment from '../TestAssignment';
import Acquainted from '../Acquainted';
import Users from '../Users';
import Register from '../Register';


const App = () => {
  return (
    <div className="App">
           
        <Menu />
        <TestAssignment />
        <Acquainted />
        <Users />
        <Register />
    </div>
  );
}

export default App;
