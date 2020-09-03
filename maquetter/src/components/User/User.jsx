import React, { Component } from 'react'; 
import './index.js';


export default class User extends Component {
    render() {
        
        const { people } = this.props;
        console.log('Юзер ван', people);
        
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
