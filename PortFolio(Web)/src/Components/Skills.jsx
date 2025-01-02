import React from 'react'
import githubImg from '../assets/github.png'

const Skills = () => {
  return (
    <section className='w-full flex' id='Skills'>
        {/* Left Side */}
      <div className='w-full flex flex-col items-center justify-start py-5 bg-yellow-500'>
        <h1 className='font-bold text-4xl md:text-5xl border-b border-gray-900 py-4 my-10'>SKILLS</h1>
        <div className='w-4/5 bg-lightYellow shadow-2xl rounded-lg'>
          <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_5fr] my-3'>
            <div className='flex items-center justify-center my-5'>
              <h1 className='text-gray-900 font-bold text-4xl'>Good</h1>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-xs lg:text-base'>
              <p className='bg-html font-semibold text-white border-none rounded-lg py-1 px-4'>HTML</p>
              <p className='bg-css font-semibold text-white border-none rounded-lg py-1 px-4'>CSS</p>
              <p className='bg-javascript font-semibold text-black border-none rounded-lg py-1 px-4'>Javascript</p>
              <p className='bg-react font-semibold text-white border-none rounded-lg py-1 px-4'>React</p>
              <p className='bg-black font-semibold text-white border-none rounded-lg py-1 px-4'>React-Hooks</p>
              <p className='bg-tailwindCss font-semibold text-white border-none rounded-lg py-1 px-4'>Tailwind CSS</p>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_5fr] my-3'>
            <div className='flex items-center justify-center my-5'>
              <h1 className='text-gray-900 font-bold text-4xl'>Basic</h1>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-xs lg:text-base'>
              <p className='bg-node font-semibold text-white border-none rounded-lg py-1 px-4'>Express</p>
              <p className='bg-mongo font-semibold text-white border-none rounded-lg py-1 px-4'>MongoDB</p>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_5fr] my-3'>
            <div className='flex items-center justify-center my-5'>
              <h1 className='text-gray-900 font-bold text-4xl'>Etc.</h1>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-xs lg:text-base'>
              <p className='bg-vsCode font-semibold text-white border-none rounded-lg py-1 px-4'>VSCode</p>
              <p className='bg-vite font-semibold text-white border-none rounded-lg py-1 px-4'>Vite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
