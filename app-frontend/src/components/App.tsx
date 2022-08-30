import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

/*
    Footer being outside of the #App div is intended.
    This is to make it properly stick to the bottom of the page
    no matter how big or small the device/zoom is.
*/

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Main /> 
    </div>
    <Footer />
    </>
  );
}

export default App;
