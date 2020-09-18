import React from 'react';
import './TestAssignment.scss'; 

const TestAssignment =(props) => {
    

        if(props.width <= 500) { 

            return (
                <div className='test-assignment'>
                    <div className="container">
                      <h1>Test assignment for Frontend developer position</h1>
        
                      <p>We kingly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</p>
                      <button><a href="#register"> Sign up now</a></button>
                    </div>  
                </div>
            )

        } else {
       return (
        <div className='test-assignment'>
            <div className="container">
              <h1>Test assignment for Frontend developer position</h1>

              <p>We kingly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens  </p>
              <button><a href="#register">Лох Sign up now</a></button>
            </div>  
        </div>
     )
    }

};
export default TestAssignment;
