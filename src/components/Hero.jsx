import React from 'react'
import mobileImage from "../assets/image-intro-mobile.jpg"
import desktopImage from "../assets/image-intro-desktop.jpg"
import pseudoBackgroundleft from "../assets/bg-pattern-intro-left-desktop.svg"
import pseudoBackgroundright from "../assets/bg-pattern-intro-right-desktop.svg"
import mobileImgLeft from "../assets/bg-pattern-intro-left-mobile.svg"
import mobieImgRight from "../assets/bg-pattern-intro-right-mobile.svg"

const HeroSection = () => {
  return (
    <div className='md:relative'>
        <section className='w-[100%] bg-[hsl(256,26%,20%)] md:px-15 lg:py-45 md:py-25'>
            <div className='second flex flex-col md:flex-row-reverse md:justify-between '>
                <div className='flex flex-1'>
                    <span className='block md:hidden container'><img className=' w-full grow-1' src={mobileImage} alt="" /></span>
                    <span className='deskImg hidden md:block container md:absolute md:w-[50%] md:top-20 md:right-15'><img src={desktopImage} alt="" /></span>
                    <span className='hidden md:block absolute left-0 top-75 lg:top-120 w-[150px] lg:w-[200px] md:top-85'><img src={pseudoBackgroundleft} alt="" /></span>
                    <span className='hidden md:block absolute top-0 right-0 z-2 w-[200px] lg:w-[420px]'><img src={pseudoBackgroundright} alt="" /></span>
                </div>
                <div className='sec-part text-white flex-1 my-auto flex flex-col md:items-start relative py-1'>
                    <span className='block md:hidden absolute left-0 w-[100px]'><img src={mobileImgLeft} alt="" /></span>
                    <p className='hidden md:block border-[1px] md:w-[40%] lg:w-[30%]  border-t-0 border-l-0 border-r-0'></p>
                    <h2 className='md:w-[70%] w-[90%] pt-6 text-center md:text-start mx-auto md:mx-0 text-3xl lg:text-6xl font-bold'>Humanizing your Insurance</h2>
                    <p className='md:w-[70%] w-[90%] py-4 text-center mx-auto md:mx-0 md:text-start text-[12px] lg:text-[15px]'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <button className='border-2 px-1 lg:w-[20%] py-1 w-[40%] font-semibold mx-auto md:mx-0 text-[10px] lg:text-[13px] my-2 hover:cursor-pointer hover:text-[hsl(256,26%,20%)] hover:bg-white'>VIEW PLANS</button>
                    <span className='block md:hidden absolute right-0 w-[100px] top-[150px]'><img src={mobieImgRight} alt="" /></span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection