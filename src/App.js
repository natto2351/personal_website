import Header from './components/Header'
//import Modal from './components/Modal'
import Footer from './components/Footer'
import Qualifications from './components/Qualifications'
import Gallery from './components/Gallery'
import CoverLetter from './components/CoverLetter'
import Contact from './components/Contact'
import React from 'react';


const App = () => {


return (
    <div class="main-grid">
      
      <Header></Header>
      <CoverLetter></CoverLetter>
      <Qualifications></Qualifications>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

//on the component declaration: prop is defined as the const being assigned (prop onConfirm is set to turn the modal on or off).
//inside the component, the prop is called through some action (e.g. onClick). i.e.: on click, execute onConfirm