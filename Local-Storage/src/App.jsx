import React from 'react'
import axios from 'axios'


const App = () => {

  // const getdata =async () => {
  //   const response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const data = await response.json()
  //   console.log(data);
  // }

  const getdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data);
  }

  return (
    <div>
      <button onClick={getdata}>get data</button>
    </div>
  )
}

export default App  