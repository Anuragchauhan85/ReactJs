import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

     const Nav = useNavigate();

  return (
    <div className=" px-5 bg-cyan-700">
      <button
        onClick={() => {
          Nav("/");
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          Nav(-1);
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          Nav(+1);
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
}

export default Nav2