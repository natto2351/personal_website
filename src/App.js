import Header from './components/Header'
import Modal from './components/Modal'
import Footer from './components/Footer'

import React, {useState} from 'react';


const App = () => {
const [bIsModalActive, setIsModalActive] = useState(false);

const modalTurnOff = () =>
{
  setIsModalActive(false);
};
const modalTurnOn = () =>
{
  setIsModalActive(true);
};

return (
    <div>
      {bIsModalActive && <Modal onConfirm = {modalTurnOff}></Modal>}
      <Header onConfirm = {modalTurnOn}>Testing text</Header>
      <Footer></Footer>
    </div>
  );
}

export default App;

//on the component declaration: prop is defined as the const being assigned (prop onConfirm is set to turn the modal on or off).
//inside the component, the prop is called through some action (e.g. onClick). i.e.: on click, execute onConfirm