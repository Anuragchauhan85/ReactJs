import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
 
  const Nav = useNavigate();

  

  return (
    <div>
      <button
        onClick={() => {
          Nav("/");
        }}
        className="bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          Nav(-1);
        }}
        className="bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <h1>About Page</h1>
    </div>
  );
}

export default About