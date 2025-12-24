import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import LikeButton from './LikeButton';
import LudoBoard from './Ludo';
import TodoList from './todoList';

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <h1>state in react</h1>
  //     <Counter />
  //     <LikeButton />
  //   </>
  // );
  // return (
  //   <>
  //      <LudoBoard/>
  //   </>
  // );
   return (
     <>
       <TodoList/>
     </>
   );
}

export default App
