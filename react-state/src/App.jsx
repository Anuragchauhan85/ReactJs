import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import LikeButton from './LikeButton';
import LudoBoard from './Ludo';
import TodoList from './todoList';
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from './helper';
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
  //  return (
  //    <>
  //      <TodoList/>
  //    </>
  //  );
  // return (
  //   <>
  //     <Lottery/>
  //   </>
  // )
  let winCondition = (ticket) => {
    // return sum(ticket) === 15;                                win condition for sum of num is 15
    // return ticket.every((num) => num === ticket[0]);          win condition for all num is same
    return ticket[0] === 0;                              
    //         win condition first num is 0
  }

    return (
      <>
        <Lottery n={3} winCondition={winCondition} />
      </>
    );
}

export default App
