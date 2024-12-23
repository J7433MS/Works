import React from 'react'
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-white bg-opacity-50 w-full flex items-center py-3 justify-around hover:bg-opacity-100'>
      <div className='flex items-center justify-center text-2xl text-gray-950'>
        <h1 className='font-bold text-base sm:text-2xl lg:text-4xl cursor-pointer hover:scale-105'>JMS's PortFolio</h1>
      </div>
      <div className='flex items-center justify-start'>
        <ul className='flex font-semibold text-sm sm:text-xl'>
            <li className='text-gray-800 px-5 cursor-pointer hover:scale-110'>Home</li>
            <li className='text-gray-800 px-5 cursor-pointer hover:scale-110'>About</li>
            <li className='text-gray-800 px-5 cursor-pointer hover:scale-110'>Skills</li>
            <li className='text-gray-800 px-5 cursor-pointer hover:scale-110'>Projects</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
