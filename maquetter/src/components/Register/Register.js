import React, { Component } from 'react';
import './Register.scss';
import { Form , Button } from 'react-bootstrap';

export default class Register extends Component {

  state = {
    formData : [],
    email: '',
    phone: '',
    name: '',
    radio: '',
    image: [],
    emailValid: false,
    phoneValid: false,
    formValid: false

  }

  validate = () => {
    if(this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      console.log('eeee', this.state.email);
      this.setState({emailValid: false});
      //alert('email')
    } else {
      this.setState({emailValid: true});
    }

    if(this.state.name.match(/^[a-z ,.'-]+$/i)) {
      console.log('Name Valid', this.state.name);
      this.setState({nameValid: false});
      //alert('Name Valid')
    } else {
      this.setState({nameValid: true});
    }
   
    if(this.state.phone.match(/^\+?3?8?(0[5-9][0-9]\d{7})$/i)) {
      console.log('Phone Valid', this.state.phone);
      alert('Phone Valid');
      this.setState({phoneValid: false});
    } else {
      this.setState({phoneValid: true});
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.validate(); 
  
  }

  handleUserInput = e => {
    this.setState({[e.target.name]: e.target.value});
    console.log('Radio',this.state.radio)
  }

  handleFileInput = e => {
    let file = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload= e => {
      
      this.setState({image: e.target.result});
      console.warn('img data', this.state.image);
    }


  }

    render(){
     const { emailValid, phoneValid, nameValid } = this.state;
     const nameFormText = nameValid ? <span className="error-text">Error</span> : null; 
     const emailFormText = emailValid ? <span className="error-text">Error</span> : null; 
     const phoneFormText = phoneValid ? <span className="error-text">Error</span> : <span>Enter phone number in the enter format.</span>;

     const nameFormClass = nameValid ? 'error-form' : null;
     const emailFormClass = emailValid ? 'error-form' : null;
     const phoneFormClass = phoneValid ? 'error-form' : null;


     

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
                    className={nameFormClass}
                    />
                    <Form.Text className="text-muted">
                      { nameFormText }
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
                      className={emailFormClass}
                      />
                    <Form.Text className="text-muted">
                     { emailFormText }
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
                    className={phoneFormClass}
                    />
                    <Form.Text className="text-muted">
                    { phoneFormText } 
                    </Form.Text>
                  </Form.Group>
              
                  
                  <Form.Group className="radio-row"  >
                      <Form.Label>
                       Select your position
                     </Form.Label>
      
                     <Form.Check
                      custom
                      required
                      type="radio"
                      label="Frontend developer"
                      value="Frontend developer"
                      name="radio"
                      id="formHorizontalRadios1"
                      onClick={this.handleUserInput}
                     />
                     <Form.Check
                      custom
                      type="radio"
                      label="Beckend developer"
                      value="Beckend developer"
                      name="radio"
                      id="formHorizontalRadios2"
                      onClick={this.handleUserInput}
                     />
                     <Form.Check
                      custom
                      type="radio"
                      label="Designer"
                      value="Designer"
                      name="radio"
                      id="formHorizontalRadios3"
                      onClick={this.handleUserInput}
                      />

                      <Form.Check
                      custom
                      type="radio"
                      label="QA"
                      value="QA"
                      name="radio"
                      id="custom-radio"
                      onClick={this.handleUserInput}
                      />

                       


                        
                       
                   </Form.Group>

                   <Form.File 
                    className ="loader"
                    id="custom-file"
                    name = "image"
                    label="Upload your photo"
                    custom 
                    onChange={this.handleFileInput}
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
