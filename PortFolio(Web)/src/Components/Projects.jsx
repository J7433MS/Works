import React from 'react'

const Projects = () => {
  return (
    <section className='w-full bg-lightGray' id='Projects'>
      <div className='flex items-center justify-center py-5'>
        <h1 className='text-5xl font-bold border-b border-gray-600 py-4 my-10'>PROJECTS</h1>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-4 place-items-center pb-16'>
        <div className='w-[90%] lg:w-[45vw] h-[400px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
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

        <div className='w-[90%] lg:w-[45vw] h-[400px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
            <div className='flex my-4 mx-4'>
                <p className='bg-lightRed px-4 py-1 rounded-xl font-bold text-white'>쇼핑몰 웹사이트</p>
            </div>
            <div className='my-4 mx-4'>
                <p className='border-b border-gray-400 text-gray-400 text-sm'>2024.10 (1人 프로젝트)</p>
            </div>
            <div className='flex flex-col mt-4 mx-4'>
                <h2 className='font-bold'>관련된 상품 띄우기, 검색, 장바구니 등 쇼핑몰이 가지고 있는 기능들을 구현한 쇼핑몰 웹사이트</h2>
                <ul className='list-disc my-4 mx-4 text-sm lg:text-base '>
                    <li className='text-gray-800'>FrontEnd 개발을 공부하기 위하여 Youtube를 보고 개발한 첫번째 웹사이트</li>
                    <li className='text-gray-800'>쇼핑몰의 FrontEnd 구현</li>
                    <li className='text-gray-800'>Context를 사용하여 React Router 내에서 데이터를 교환 방식 사용</li>
                    <li className='text-gray-800'>다중 필터링 기능 구현</li>
                </ul>
                <a className='border-l-4 border-blue-400 px-4 text-blue-400 text-sm mb-4' href="https://jms-market-app.netlify.app" target='_blink'>https://jms-market-app.netlify.app</a>
                <div className='flex'>
                    <p className='bg-lightYellow font-light text-sm border border-yellow-300 py-1 px-4 rounded-lg'>React, Tailwind CSS, Javascipt, React Hooks</p>
                </div>
            </div>
        </div>

        <div className='w-[90%] lg:w-[45vw] h-[400px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
            <div className='flex my-4 mx-4'>
                <p className='bg-lightRed px-4 py-1 rounded-xl font-bold text-white'>병원 예약 사이트(FE)</p>
            </div>
            <div className='my-4 mx-4'>
                <p className='border-b border-gray-400 text-gray-400 text-sm'>2024.11 (1人 프로젝트)</p>
            </div>
            <div className='flex flex-col mt-4 mx-4'>
                <h2 className='font-bold'>진료과목 필터링, 의사 예약 가능 시간을 구현한 병원 예약 웹사이트</h2>
                <ul className='list-disc my-4 mx-4 text-sm lg:text-base '>
                    <li className='text-gray-800'>FrontEnd 개발을 공부하기 위하여 Youtube를 보고 개발한 두번째 웹사이트</li>
                    <li className='text-gray-800'>병원 예약 시스템의 FrontEnd 구현</li>
                    <li className='text-gray-800'>React Hook과 Javascript 함수를 활용하여 진료과목 필터 기능 구현</li>
                    <li className='text-gray-800'>오늘 포함 7일 동안 10시부터 9시까지 30분 간격으로 예약할 수 있는 시스템 구현</li>
                </ul>
                <a className='border-l-4 border-blue-400 px-4 text-blue-400 text-sm mb-4' href="https://jms-bookapp-fe.netlify.app" target='_blink'>https://jms-bookapp-fe.netlify.app</a>
                <div className='flex'>
                    <p className='bg-lightYellow font-light text-sm border border-yellow-300 py-1 px-4 rounded-lg'>React, Tailwind CSS, Javascipt, React Hooks</p>
                </div>
            </div>
        </div>

        <div className='w-[90%] lg:w-[45vw] h-[400px] bg-white px-4 py-4 rounded-xl shadow-2xl'>
            <div className='flex my-4 mx-4'>
                <p className='bg-lightRed px-4 py-1 rounded-xl font-bold text-white'>병원 예약 사이트 (FE + BE)</p>
            </div>
            <div className='my-4 mx-4'>
                <p className='border-b border-gray-400 text-gray-400 text-sm'>2024.11 - 12 (1人 프로젝트)</p>
            </div>
            <div className='flex flex-col mt-4 mx-4'>
                <h2 className='font-bold'>MERN 스택을 활용하여 만든 병원 예약 웹사이트</h2>
                <ul className='list-disc my-4 mx-4 text-sm lg:text-base '>
                    <li className='text-gray-800'>node와 Express를 활용하여 의사, 관리자용 사이트 따로 구현</li>
                    <li className='text-gray-800'>Cloudinary를 활용하여 의사와 유저의 이미지를 업로드할 수 있도록 함</li>
                    <li className='text-gray-800'>MongoDB를 통하여 의사나 유저 추가, 삭제 등 자유로운 데이터 관리 가능</li>
                    <li className='text-gray-800'>jwt를 활용하여 로그인 인증 기능 구현</li>
                    <li className='text-gray-800'>유저들이 예약한 시간과 의사들의 예약 가능 시간을 연동하여 의사들의 시간 당 1명의 유저만 예약이 가능하고 의사나 관리자가 승인, 거부를 할 수 있는 기능 구현</li>
                </ul>
                <a className='border-l-4 border-blue-400 px-4 text-blue-400 text-sm mb-4' href="https://github.com/J7433MS/BookApp" target='_blink'>https://github.com/J7433MS/BookApp</a>
                <div className='flex'>
                    <p className='bg-lightYellow font-light text-sm border border-yellow-300 py-1 px-4 rounded-lg'>MongoDB Atlas, Express, React,  NodeJS, Tailwind CSS, Javascipt, React Hooks</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
