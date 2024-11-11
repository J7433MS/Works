
import { assets } from './../assets/assets_frontend/assets';

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tempore officia ullam velit laudantium, impedit dolorem minima debitis quaerat, repellendus maiores maxime fugiat temporibus tenetur deserunt distinctio. Nemo, esse ipsam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos labore, officia maxime vitae cum quo dolorem fugiat corporis repellat iste fugit. Ea commodi dolorem, quod totam atque veniam nisi.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur veritatis quaerat libero facilis iste, aperiam autem vero delectus, labore laudantium nihil perspiciatis amet esse a minus commodi quis cumque.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translation-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae harum fugit</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translation-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam perferendis ex magni minus sint dolor cumque aliquid et</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translation-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>

    </div>
  )
}

export default About
