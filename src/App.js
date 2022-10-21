import Header from './components/Header'
import Modal from './components/Modal'
import Footer from './components/Footer'

import React from 'react';


const App = () => {


return (
    <div>
      
      <Header>Testing text</Header>
      <Footer></Footer>
      <Modal title={'Testing Modal'}></Modal>
    </div>
  );
}

export default App;

//on the component declaration: prop is defined as the const being assigned (prop onConfirm is set to turn the modal on or off).
//inside the component, the prop is called through some action (e.g. onClick). i.e.: on click, execute onConfirm