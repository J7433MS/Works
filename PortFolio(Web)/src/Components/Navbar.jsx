import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {

  const [visible, setVisible] = useState(true)

  const scrollToSection = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className='z-10 fixed top-0 w-full bg-white lg:bg-none flex flex-col items-center py-2 justify-between'>
      <div className='w-full grid grid-cols-3 lg:grid-cols-[1fr_3fr]'>
        <div className='flex items-center justify-start pl-4 md:justify-center md:pl-0'>
          <h1 className='font-bold text-gray-800 text-xs sm:text-base md:text-xl lg:text-2xl cursor-pointer'>JMS's PortFolio</h1>
        </div>
        
        <div className='flex items-center justify-center'>
          <ul className='hidden lg:flex font-semibold text-xl'>
            <a href="#Home" onClick={(e) => scrollToSection(e, 'Home')} className="text-gray-800 px-5 cursor-pointer">
              Home</a>
            <a href="#About" onClick={(e) => scrollToSection(e, 'About')} className="text-gray-800 px-5 cursor-pointer">
              About</a>
            <a href="#Skills" onClick={(e) => scrollToSection(e, 'Skills')} className="text-gray-800 px-5 cursor-pointer">
              Skills</a>
            <a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')} className="text-gray-800 px-5 cursor-pointer">
              Projects</a>
          </ul>
        </div>
        <div className='flex lg:hidden items-center justify-end'>
        <FiAlignRight onClick={()=>setVisible(!visible)} className='pr-1 text-2xl md:text-4xl cursor-pointer hover:scale-110' />
        </div>
      </div>
      
      {/* Mobile */}
      <div className={`${visible ? 'flex items-center justify-start w-full mt-2' : 'hidden'} lg:hidden`}>
        <ul className='font-semibold text-xl flex flex-col ml-4  md:ml-[3.5rem]'>
          <a onClick={(e)=> {
            setVisible(!visible);
            scrollToSection(e, 'Home');
          }} href='#Home' className='text-sm md:text-lg text-gray-800 py-2 cursor-pointer'>Home</a>
          <a onClick={(e)=> {
            setVisible(!visible);
            scrollToSection(e, 'About');
          }} href='#About' className='text-sm md:text-lg text-gray-800 py-2 cursor-pointer'>About</a>
          <a onClick={(e)=> {
            setVisible(!visible);
            scrollToSection(e, 'Skills');
          }} href='#Skills' className='text-sm md:text-lg text-gray-800 py-2 cursor-pointer'>Skills</a>
          <a onClick={(e)=> {
            setVisible(!visible);
            scrollToSection(e, 'Projects');
          }} href='#Projects' className=' text-sm md:text-lg text-gray-800 py-2 cursor-pointer'>Projects</a>
        </ul>
      </div>

    </div>
    
  )
}

export default Navbar