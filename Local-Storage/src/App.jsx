import React from 'react'

const App = () => {

  function getdata9() {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response);
  }

  return (
    <div><button onClick={getdata9}>get data</button>
    </div>
  )
}

export default App  