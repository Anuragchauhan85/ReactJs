import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'

const App = () => {

  // localStorage.setItem('user', 'sarthak')
  // localStorage.setItem("age", "18");
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem("age");
  // localStorage.removeItem('user')
  // console.log(user,age);

  const user = {
    namer: 'Anurag',
    age: 18,
    city:'Mainpuri'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const data= JSON.parse(localStorage.getItem('user'))
  console.log(data)


  return (
    <div>app</div>
  )

  // const getdata =async () => {
  //   const response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const data = await response.json()
  //   console.log(data);
  // }

  // const getdata = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );
  //   console.log(response.data);
  // }

  // const [data, setData] = useState([])

  // const getdata = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list");

  //   setData(response.data);
  // }




  // return (
  //   <div>
  //     <button onClick={getdata}>get data</button>
  //     <div>
  //       {data.map(function (elem, idx) {
  //         return <h3>hello {elem.author} { idx}</h3>
  //       })}
  //     </div>
  //   </div>
  // )
}

export default App  