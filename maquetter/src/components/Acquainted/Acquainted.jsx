import React, { Component } from 'react';
import './Acquainted.scss';
import { ReactComponent as Img } from './man-laptop-v1.svg';

export default class Acquainted extends Component  {
    state = {
        width: 0,
    }

    setSize = () =>  {
        this.setState({
            width: window.innerWidth
        });
      }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
      }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
      }


 render() {   
    
        
       if(this.state.width <= 400) { 
        return (
            <div className="conteiner acquained">
              <h2>Let's get acquainted</h2>
         
               <Img height="243" width="288" />;
            

             <div className="text-side">
                 <h2>I am cool frontend developer</h2>
                 <p>We will evaluate how clean your approach to writing CSS and JavaScript code is. You can use any CSS and JavaScript 3rd party libraries without any restriction.</p>

                 <p>If 3rd party css/javascript libraries are added to the prodject via bower/npm/yarn you will get bonus points. If you are use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
                 <button><a href="#register">Sign up now</a></button>
             </div>
            </div>
    
        )
       }
        
       if(this.state.width < 800 && this.state.width > 400) {  
            return (
                <div className="conteiner acquained">
                  <h2>Let's get acquainted</h2>
                  <div className="row"> 
                   <Img height="206" width="246" />
              
  
                   <div className="text-side">
                     <h2>I am cool frontend developer</h2>
                     <p>We will evaluate how clean your approach to writing CSS and JavaScript code is. You can use any CSS and JavaScript 3rd party libraries without any restriction.</p>
  
                     <p>If 3rd party css/javascript libraries are added to the prodject via bower/npm/yarn you will get bonus points. If you are use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
                     <button><a href="#register">Sign up now</a></button>
                    </div>
                   </div>
                </div>
                
            )
        } 
        
       
           

    return (
      <div className="conteiner acquained">
         <h2>Let's get acquainted</h2>
         <div className="row"> 
           <Img height="300" width="340" />


           <div className="text-side">
            <h2>I am cool frontend developer</h2>
            <p>We will evaluate how clean your approach to writing CSS and JavaScript code is. You can use any CSS and JavaScript 3rd party libraries without any restriction.</p>

            <p>If 3rd party css/javascript libraries are added to the prodject via bower/npm/yarn you will get bonus points. If you are use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
            <button><a href="#register">Sign up now</a></button>
          </div>
         </div>
        </div>
     
 )
 }
}
