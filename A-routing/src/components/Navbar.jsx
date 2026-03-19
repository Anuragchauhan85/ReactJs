import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gray-800">
      <h2 className="text-2xl font-blold">Anurag chauhan</h2>
      <div className="flex gap-10">
        <a className="text-lg font-medium" href="/">
          Home
        </a>
        <a className="text-lg font-medium" href="about">
          About
        </a>
        <a className="text-lg font-medium" href="contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar