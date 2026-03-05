import React, { useState } from 'react'
import { X } from "lucide-react";


const App = () => {
 
    const [tittle, setTittle] = useState("");
  const [details, setDetails] = useState("");
  
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("tittle :",tittle,"details :", details);

    const copyTask = [...task];

    copyTask.push({ tittle, details })
    
    setTask(copyTask)

    setDetails("");
    setTittle("");
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 item-start lg:w-1/2 flex-col p-10 "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded "
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value);
          }}
        />

        <textarea
          placeholder="Enter Details"
          name=""
          id=""
          className="px-5 py-2 w-full h-32 flex items-start font-medium border-2 outline-none rounded flex-row"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-white w-full active:scale-95 text-black px-5 py-2 font-medium rounded outline-none">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 bg-cover rounded-2xl text-black p-4 bg-[url(D:\ReactJs\Notes-App\src\assets\katie-goertzen-CYU1x_bW5MA-unsplash-Picsart-AiImageEnhancer.jpg)] "
              >
                <button
                  onClick={() => deleteNote(idx)}
                  className="absolute top-2.5 cursor-pointer active:scale-125 right-2"
                >
                  <X size={18} color="#ff0000" strokeWidth={3} />
                </button>
                <h3 className="leading-tight text-xl font-bold">
                  {elem.tittle}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-600">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App