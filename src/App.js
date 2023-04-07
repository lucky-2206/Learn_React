import { element } from 'prop-types';
import './App.css';
import Header from './Components/Header';
import React, { useState,useEffect } from 'react'

function App() {
  const[num,setNum]=useState(5);
  const[data,setData]= useState([]);

  useEffect(()=>{
    async function getData(){
      console.log(num)
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`);
      
      const res = await get.json();
      setData(res);
      console.log(res)
    }
    getData();
  },[num])
 
  return (
    <div className="App">
      <Header />
      <div>
      <p>UseEffect is called when the page is render for the first time or the page is rerender or any of the dependencies is changed </p>
        <h1>{num}</h1>
        <div className='buttons'>
          <button className='btn' onClick={()=>setNum(num+1)}>Increment</button>
          {
            data.map((element,index)=>{
              return(
                <div key={index} className='dataStyle'>
                  <h4>{element.firstName}</h4>
                  <h4>{element.lastName}</h4>
                  <h4>{element.email}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
