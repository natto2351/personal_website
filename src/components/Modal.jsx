import React from 'react';
import Button from './Button';
const Modal = (props) =>
{
    return(
        <div class="modalContainer" id="modal">
            <a class="backdrop" href="#home"></a>
            <div class= "modal-center-box">
                <header class="modal-header">{props.title}</header>
                <div class="modal-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi sapiente adipisci, quibusdam ipsa, hic voluptas quasi natus sint beatae eos voluptates itaque placeat!</div>
                <footer class="modal-footer">
                    <Button class="btn btn--white" anchor={'#home'}> Close </Button>
                </footer>
            </div> 
        </div>
    ); 
}
export default Modal;