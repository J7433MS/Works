import React from 'react'
import { BsFillPersonFill, BsFillTelephoneFill, BsFillCalendarFill, BsFillGeoAltFill, BsFillEnvelopeFill, BsFillPencilFill } from "react-icons/bs"


const About = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center sm:py-10 bg-white' id='About'>

      <div className='flex items-center justify-center py-5'>
        <h1 className='text-gray-900 font-bold text-4xl md:text-5xl border-b border-gray-900 py-4'>ABOUT ME</h1>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-5 my-10 place-items-center'>

        <div className='w-full flex justify-end'>
          <BsFillPersonFill className='text-4xl' />
        </div>
        
        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>이름</p>
          <p className='text-gray-600 font-semibold'>정민수</p>
        </div>

        <div className='w-full flex justify-end'>
          <BsFillCalendarFill className='text-4xl' />
        </div>

        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>생년월일</p>
          <p className='text-gray-600 font-semibold'>97.09.15</p>
        </div>

        <div className='w-full flex justify-end'>
          <BsFillGeoAltFill className='text-4xl' />
        </div>

        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>위치</p>
          <p className='text-gray-600 font-semibold'>경상북도 경산시</p>
        </div>

        <div className='w-full flex justify-end'>
          <BsFillTelephoneFill className='text-4xl' />
        </div>

        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>연락처</p>
          <p className='text-gray-600 font-semibold'>010-7433-5582</p>
        </div>

        <div className='w-full flex justify-end'>
          <BsFillEnvelopeFill className='text-4xl' />
        </div>

        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>이메일</p>
          <p className='text-gray-600 font-semibold'>J7433MS@gmail.com</p>
        </div>

        <div className='w-full flex justify-end'>
          <BsFillPencilFill className='text-4xl' />
        </div>

        <div className='w-full text-xs lg:text-sm'>
          <p className='text-gray-900 font-bold'>학력</p>
          <p className='text-gray-600 font-semibold'>한국폴리텍 VI대학</p>
          <p className='text-gray-600 font-semibold'>(AI소프트웨어학과)</p>
        </div>
      </div>

    </section>
  )
}

export default About
