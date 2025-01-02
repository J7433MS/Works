import React from 'react'

const Projects = () => {
  return (
    <section className='w-full bg-lightGray' id='Projects'>
      <div className='flex items-center justify-center py-5'>
        <h1 className='text-5xl font-bold border-b border-gray-600 py-4 my-10'>PROJECTS</h1>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-4 place-items-center pb-16'>
        <div className='w-[90%] lg:w-[45vw] h-[325px] sm:h-[335px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
            <div className='flex my-4 mx-4'>
                <p className='bg-lightRed px-4 py-1 rounded-xl font-bold text-white'>포트폴리오 웹사이트 (React)</p>
            </div>
            <div className='my-4 mx-4'>
                <p className='border-b border-gray-400 text-gray-400 text-sm'>2024.12 (1人 프로젝트)</p>
            </div>
            <div className='flex flex-col mt-4 mx-4'>
                <h2 className='font-bold'>포트폴리오 웹사이트</h2>
                <ul className='list-disc my-4 mx-4 text-sm lg:text-base '>
                    <li className='text-gray-800'>프로젝트들을 관리하기 위해 만든 포트폴리오용 웹사이트</li>
                    <li className='text-gray-800'>직접 개발한 첫번째 반응형 웹사이트</li>
                </ul>
                <a className='border-l-4 border-blue-400 px-4 text-blue-400 text-sm mb-4' href="https://www.naver.com" target='_blink'>https://www.naver.com</a>
                <div className='flex'>
                    <p className='bg-lightYellow font-light text-sm border border-yellow-300 py-1 px-4 rounded-lg'>React, Tailwind CSS, Javascipt, React Hooks</p>
                </div>
            </div>
        </div>

        <div className='w-[90%] lg:w-[45vw] h-[325px] sm:h-[335px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
            <div className='flex my-4 mx-4'>
                <p className='bg-lightRed px-4 py-1 rounded-xl font-bold text-white'>쇼핑몰 웹사이트</p>
            </div>
            <div className='my-4 mx-4'>
                <p className='border-b border-gray-400 text-gray-400 text-sm'>2024.10 (1人 프로젝트)</p>
            </div>
            <div className='flex flex-col mt-4 mx-4'>
                <h2 className='font-bold'>쇼핑몰 FrontEnd 부분 개발발</h2>
                <ul className='list-disc my-4 mx-4 text-sm lg:text-base '>
                    <li className='text-gray-800'>FrontEnd개발을 공부하기 위하여 Youtube를 보고 개발한 첫번째 웹사이트</li>
                    <li className='text-gray-800'>재사용을 하기 위한 컴포넌트 사용</li>
                    <li className='text-gray-800'></li>
                </ul>
                <a className='border-l-4 border-blue-400 px-4 text-blue-400 text-sm mb-4' href="https://www.naver.com" target='_blink'>https://www.naver.com</a>
                <div className='flex'>
                    <p className='bg-lightYellow font-light text-sm border border-yellow-300 py-1 px-4 rounded-lg'>React, Tailwind CSS, Javascipt, React Hooks</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
