import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import LikeButton from './LikeButton';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>state in react</h1>
      <Counter />
      <LikeButton />
    </>
  );
}

export default App
