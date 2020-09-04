import React, { Component } from 'react';
import './Register.scss';
import { Form , Button } from 'react-bootstrap';

export default class Register extends Component {
    render(){
        return(
            <div className="container register-block">
                <h2>Register to get a work</h2>
                <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>

                <Form  className="form">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                    <Form.Text className="text-muted">
                      Absessive text.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="form-control" type="email" placeholder="Your email" />
                    <Form.Text className="text-muted">
                      Absessive text.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="+380 XX XXX XX XX" />
                    <Form.Text className="text-muted">
                      Enter phone number in the enter format.
                    </Form.Text>
                  </Form.Group>
              
                  
                  <Form.Group className="radio-row" >
                      <Form.Label>
                       Select your position
                     </Form.Label>
      
                     <Form.Check
                      type="radio"
                      label="Frontend developer"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                     />
                     <Form.Check
                      type="radio"
                      label="Beckend developer"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                     />
                     <Form.Check
                      type="radio"
                      label="Designer"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />

                      <Form.Check
                      type="radio"
                      label="QA"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />
                   </Form.Group>

                   <Form.File 
                    className ="loader"
                    id="custom-file"
                    label="Upload your photo"
                    custom
                    />
                   

                  <Button 
                  className="submit-button"
                  variant="primary" 
                  type="submit">
                   Sign up now
                  </Button>
                </Form>
            </div>
        )
    }
}
