import React, { Component } from 'react';
import './Register.scss';
import { Form , Button } from 'react-bootstrap';

export default class Register extends Component {

  state = {
    formData : [],
    email: '',
    phone: '',
    name: '',
    emailValid: false,
    phoneValid: false,
    formValid: false

  }

  validate = () => {


  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      console.log('eeee', this.state.email);
      //alert('email')
    }

    if(this.state.name.match(/^[a-z ,.'-]+$/i)) {
      console.log('Name Valid', this.state.name);
      //alert('Name Valid')
    }

    if(this.state.phone.match(/^\+?3?8?(0[5-9][0-9]\d{7})$/i)) {
      console.log('Phone Valid', this.state.phone);
      alert('Phone Valid');


    } else {
      alert('Phone not Valid');
      console.log('Phone not Valid!!', this.state.phone);
    }
    
    //console.log('name', this.state.name);
    //console.log('phone', this.state.phone);
    //console.log('email', this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));  
  }

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

    render(){
        return(
            <div className="container register-block">
                <h2>Register to get a work</h2>
                <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>

                <Form  className="form" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your name" 
                    name="name"
                    onChange={this.handleUserInput}
                    required
                    />
                    <Form.Text className="text-muted">
                      Absessive text.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      className="form-control" 
                      type="email" 
                      placeholder="Your email"
                      name="email"
                      onChange={this.handleUserInput}
                      required
                      />
                    <Form.Text className="text-muted">
                      Absessive text.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control 
                    type="phone" 
                    placeholder="+380 XX XXX XX XX" 
                    onChange={this.handleUserInput}
                    required
                    name="phone"
                    />
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
