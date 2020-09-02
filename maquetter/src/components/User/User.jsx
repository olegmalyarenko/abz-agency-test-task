import React, { Component } from 'react'; 
import './index.js';


export default class User extends Component {
    render() {
        console.log('Юзер ван', this.props.people[0]);
        
        return(
            
          <div>
              <img src={null} alt="user-photo"/>
              <h2> {null} </h2>
              <p>{null}</p>
              <p>{null}</p>
              <p>{null}</p>

          </div>
        )
    };
};
