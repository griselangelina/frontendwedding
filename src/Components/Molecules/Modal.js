import React, { Component } from 'react';
import UserService from '../../Service/UserService';

class Modal extends Component {

    render() {
        const { children,handleCancel }= this.props;

        return (
            <div class="modal">
                <div class="modal-content">
                    <span onClick={handleCancel} id="cancel-button" class="btn-cancel">X</span>
                    <div class="modal-body">
                        {children}
                    </div> 
                </div>
            </div>
        );
    }
}




export default Modal;