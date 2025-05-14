import React from 'react'
import Snappy from "../assets/icon-snappy-process.svg"
import Affordable from "../assets/icon-affordable-prices.svg"
import People from "../assets/icon-people-first.svg"
import HowWeWorkMobile from "../assets/bg-pattern-how-we-work-mobile.svg"
import HowWeWorkDesktop from "../assets/bg-pattern-how-we-work-desktop.svg"

const rowSections = [
    { image: Snappy, header: "Snappy Process", text: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms"},
    { image: Affordable, header: "Affordable Prices", text: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible"},
    { image: People, header: "People First", text: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it"}
]


const MidSection = () => {
  return (
    <div className='py-10 md:py-25'>
        <section>
            <div>
                <p className='border-1 w-[50%] md:w-[20%] border-[hsl(216,30%,68%)] mx-auto md:ml-[10%] my-9'></p>
                <h1 className='font-bold text-center md:text-start text-4xl lg:text-6xl md:ml-[10%]'>We're different</h1>
                <div className='py-9 w-[90%] md:w-[80%] mx-auto md:flex gap-10'>
                    {rowSections.map((rowSection, index)=>(
                        <div key={index}>
                            <img className='mx-auto md:mx-0' src={rowSection.image} alt="" />
                            <h1 className='text-center md:text-start font-bold py-4 text-2xl'>{rowSection.header}</h1>
                            <p className='text-center md:text-start pb-3 text-sm'>{rowSection.text}</p>
                        </div>
                    ))}
                </div>
                <div className='relative bg-[hsl(256,26%,20%)] w-[90%] md:w-[80%] mx-auto text-white my-10 flex flex-col md:flex-row justify-between px-10 py-18 lg:py-20 md:px-15 gap-10 md:gap-0 '>
                    <span className='absolute z-1 top-0 right-0 block md:hidden'><img src={HowWeWorkMobile} alt="" /></span>
                    <span className='absolute z-1 top-0 right-0 lg:left-157 hidden md:block w-[60%]'><img src={HowWeWorkDesktop} alt="" /></span>
                    <h2 className='text-3xl text-center md:text-start md:w-[58%] lg:text-5xl lg:w-[48%] font-bold'>Find out more about how we work</h2>
                    <button className='font-semibold z-1 border border-white md:h-[25%] py-2 px-2 my-auto w-[60%] md:w-[30%] lg:w-[20%] md:mx-0 text-sm mx-auto hover:cursor-pointer hover:text-[hsl(256,26%,20%)] hover:bg-white'>How we work</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MidSection