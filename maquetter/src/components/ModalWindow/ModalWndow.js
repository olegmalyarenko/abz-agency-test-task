import React, { Component } from 'react'; 
import Modal from 'react-bootstrap/Modal';

import './ModalWindow.scss';


const ModalWindow = (props) => {
    return (
        <div className="modal-window">
            <Modal.Dialog>
              <Modal.Header closeButton onClick={props.click}>
                <Modal.Title>Congratulation</Modal.Title>
              </Modal.Header>

              <Modal.Body>
               <p>You have successfully passed the registration</p>
              </Modal.Body>

              <Modal.Footer>
               <button className="modal-button" onClick={props.click}>Great</button>
               
              </Modal.Footer>
            </Modal.Dialog>
        </div>
    )

}
export default ModalWindow;