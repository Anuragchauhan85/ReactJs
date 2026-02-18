import React from 'react'

const App = () => {
  return (
    <div className="h-screen  bg-black text-white">
      <form className="flex item-start justify-between  p-10 ">
        <div className="flex w-full item-start gap-4 flex-col">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 w-full border-2 rounded "
          />

          <textarea
            placeholder="Enter Details"
            name=""
            id=""
            className="px-5 py-2 w-full h-20 border-2 rounded "
          ></textarea>
          <button className="bg-white w-full text-black px-5 py-2 rounded ">
            Add Note
          </button>
        </div>
        <img
          className="h-52"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BWj15xplp-o5EEnGyXnIjlQRyKGHR7pDgg&s"
          alt=""
        />
      </form>
    </div>
  );
}

export default App