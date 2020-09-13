import React from 'react';
import './BackDrop.scss';

const BackDrop = (props) => {
    
    return ( 
      <div className="backgrop"  onClick={props.click}/> 
    )
};

export default BackDrop;