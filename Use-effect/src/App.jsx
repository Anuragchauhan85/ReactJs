import React from 'react'
import { useEffect } from 'react'

const App = () => {
  
  useEffect(function () {
    console.log('use effect is running...')
  })


  return (
    <div>App</div>
  )
}

export default App