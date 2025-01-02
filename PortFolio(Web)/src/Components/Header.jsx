import React from 'react'
import Navbar from './Navbar'

const Header = () => {

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
    <section className='w-full' id='Home'>
      <div className='z-0 relative h-[70vh] sm:h-[80vh] md:h-[90vh] bg-no-repeat bg-contain md:bg-cover md:bg-right lg:bg-top' style={{backgroundImage: "url('/BackGroundImg.png')"}}>
      <Navbar />
        <div className='absolute flex-col top-[20%] left-[3%] sm:top-[30%] md:top-[40%] md:left-[10%] text-gray-800'>
            <h1 className='flex items-center justify-center mx-10 text-lg font-semibold sm:text-2xl md:text-3xl lg:text-5xl'>Jeong MinSoo's</h1>
            <h1 className='flex items-center justify-center mx-10 text-lg font-semibold sm:text-2xl md:text-3xl lg:text-5xl'>PortFoilo</h1>
            <div className='flex items-center justify-center my-4 md:my-8'>
                <button onClick={(e)=>{
                  scrollToSection(e, 'About');
                }} className='bg-black rounded-full text-white text-xs sm:text-base md:text-xl lg:text-2xl px-8 py-2'>View</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
