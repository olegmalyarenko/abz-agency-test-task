import React from 'react';
import './App.scss';
import Menu from '../Menu';
import TestAssignment from '../TestAssignment';
import Acquainted from '../Acquainted';
import Users from '../Users';


const App = () => {
  return (
    <div className="App">
           
        <Menu />
        <TestAssignment />
        <Acquainted />
        <Users />
    </div>
  );
}

export default App;
