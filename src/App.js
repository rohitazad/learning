
import './App.css';
import React, { useState } from 'react';
// import CounterComponent from './Counter';
// import {Hello,  HelloIm} from './Hello';
// import ClockComponent from './Clock';



import StateMangeCoponent from './StateTutorials';

import FooterCompo from './Component/Footer';
import HeaderCompo from './Component/Header';
import AbooutPage from './about';
import ContactPage from  './contact';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  let [text, setText] = useState('Rohit');
  const updateHandler = (receText)=>{
    return setText(receText)
  }
  return (
    <div className="App">
      <Router>
      <HeaderCompo />

      <Routes>
        <Route element={<StateMangeCoponent text={text} updateTxt={updateHandler}/>} path="/" />
        <Route element={<AbooutPage text={text} />} path="/about" />
        <Route element={<ContactPage text={text} />} path="/contact" />
      </Routes>
      {/* <ClockComponent />
      <br />
        <CounterComponent />
        <br />
        <Hello/>
        <hr />
        <HelloIm /> */}

        
        <hr />
        <FooterCompo />
        </Router>
    </div>
  );
}

export default App;
