import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section>
      <div className='relative h-screen md:h-screen mb-4 bg-no-repeat bg-contain md:bg-cover md:bg-right lg:bg-top flex items-center w-full' style={{backgroundImage: "url('/BackGroundImg.png')"}} id='Header'>
      <Navbar />
        <div className='absolute flex-col my-0 top-[15%] left-[10%] sm:top-[25%] sm:left-[15%] md:top-[40%] text-gray-800'>
            <h1 className='flex items-center justify-center mx-10 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl'>Jeong MinSoo's</h1>
            <h1 className='flex items-center justify-center mx-10 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl'>PortFoilo</h1>
            <div className='flex items-center justify-center my-4'>
                <button className='bg-black rounded-full text-white text-sm sm:text-base md:text-xl lg:text-2xl px-8 py-2'>View</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
