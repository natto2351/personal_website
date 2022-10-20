import React from 'react';
import Button from './Button';
const Modal = (props) =>
{
    return(
        <div>
            <div class="backdrop" onClick= {props.onConfirm}></div>
            <div class= "modalImage">
                <header>{props.title}</header>
                <div></div>
                <footer>
                    <Button class="btn--white" onClick= {props.onConfirm}> Close </Button>
                </footer>
            </div>
        </div>
    ); 
}
export default Modal;