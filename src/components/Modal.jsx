import React from 'react';
import Button from './Button';
const Modal = (props) =>
{
    return(
        <div class="modalContainer" id="modal">
            <a class="backdrop" href="#home"></a>
            <div class= "center-box modalImage">
                <header>{props.title}</header>
                <div></div>
                <footer>
                    <Button class="btn--white" anchor={'#home'}> Close </Button>
                </footer>
            </div> 
        </div>
    ); 
}
export default Modal;