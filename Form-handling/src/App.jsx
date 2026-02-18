import React from 'react'
import { useState } from 'react'

const App = () => {

  const [tittle, setTittle] = useState("")
  


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted ",{tittle})
    setTittle("")
  }

  return (
    <div><form action="" onSubmit={(e)=>{submitHandler(e)}}>
      <input type="text" placeholder='Enter your name'
        value={tittle}
        onChange={(e) => {
        setTittle(e.target.value)
      }}/>
      <button>Submit</button>
    </form></div>
  )
}

export default App

