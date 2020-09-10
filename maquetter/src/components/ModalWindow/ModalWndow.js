import React, { Component } from 'react'; 
import Modal from 'react-bootstrap/Modal';

import './ModalWindow.scss';


const ModalWindow = () => {
    return (
        <div className="modal-window">
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Congratulation</Modal.Title>
              </Modal.Header>

              <Modal.Body>
               <p>You have successfully passed the registration</p>
              </Modal.Body>

              <Modal.Footer>
               <button className="modal-button">Great</button>
               
              </Modal.Footer>
            </Modal.Dialog>
        </div>
    )

}
export default ModalWindow;