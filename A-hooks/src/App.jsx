import React, { useState } from 'react'

const App = () => {
 
 
//object manupulation
// const [num,setNum] =useState({user:"sarthak",age:"18"})

//   const btnclicked=()=> {
//     const newNum = { ...num };
//     newNum.user = "aman"
//     newNum.age=25
//     setNum(newNum)
//   }
  
//   return (
//     <div>
//       <h1>{num.user}, {num.age }</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
  //   )


  //array manupulation
  // const [num, setNum] = useState([10,20,30]);

  // const btnclicked = () => {
  //   const newNum = [...num] ;
  //   newNum.push(99)
  //   setNum(newNum);
  // };

  // return (
  //   <div>
  //     <h1>
  //       {num}
  //     </h1>
  //     <button onClick={btnclicked}>click</button>
  //   </div>
  // );


  //batch mangement
   const [num, setNum] = useState(10);

   const btnclicked = () => {
      setNum((prev) => prev + 1);
      setNum((prev) => prev + 1);
      setNum((prev) => prev + 1);
   };

   return (
     <div>
       <h1>{num}</h1>
       <button onClick={btnclicked}>click</button>
     </div>
   );
}

export default App
