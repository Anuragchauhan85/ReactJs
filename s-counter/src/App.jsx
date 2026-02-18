
import { useState } from 'react';

const App = () => {

  const [Num, setNum] = useState(0)

  function increaseNum() {
    setNum(Num + 1);
  }
  
  function decreaseNum() {
   setNum(Num - 1);
  }

  function jump5() {
    setNum(Num + 5);
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5}>jump by 5</button>
    </div>
  );
}

export default App