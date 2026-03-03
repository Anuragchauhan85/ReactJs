import React from 'react'

const App = () => {
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }
  
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
        />

        <textarea
          placeholder="Enter Details"
          name=""
          id=""
          className="px-5 py-2 w-full h-32 flex items-start font-medium border-2 outline-none rounded flex-row"
        ></textarea>
        <button className="bg-white w-full text-black px-5 py-2 font-medium rounded outline-none">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default App