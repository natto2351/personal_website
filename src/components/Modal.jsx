import React from 'react';
import Button from './Button';


const Modal = (props) =>
{
    return(
        <div class="modalContainer" id="modal">
            <a class="backdrop" href="#qualifications"> </a>
            <div class= "modal-center-box">
                <header class="modal-header">{props.title}</header>
                <p class="modal-content">{props.content}</p>
                <footer class="modal-footer">
                    <Button class="btn btn--white" anchor={'#qualifications'}> Close </Button>
                </footer>
            </div> 
        </div>
    ); 
}
export default Modal;