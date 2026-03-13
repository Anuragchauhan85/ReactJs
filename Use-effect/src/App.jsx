import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'

const App = () => {


  const [a, setA] = useState(0)
  const [b, setB] = useState(0);

  function Achanging(){
    console.log("a is changing")    
  }

  function Bchanging() {
    console.log("B is changing");
  }

  useEffect(function () {
    Achanging()
    console.log('use effect is running...')
  },[a])


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >a</button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >b</button>
    </div>
  );
}

export default App