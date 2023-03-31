import { element } from 'prop-types';
import './App.css';
import Header from './Components/Header';
import React, { useState } from 'react'

function App() {
  const[num,setnum]=useState(1);
  function inc(ne)
  {
    setnum(num+ne)
  }
  function dec(ne)
  {
    setnum(num-ne)
  }
  return (
    <div className="App">
      <Header />
      <div>
      <p>Demonstration of UseState where in clicking increment button number will be increased by 3 and on decreasing it gets decreased by 2</p>
        <h1>{num}</h1>
        <div className='buttons'>
          <button className='btn' onClick={()=>inc(3)}>Increment</button>
          <button className='btn' onClick={()=>dec(2)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
