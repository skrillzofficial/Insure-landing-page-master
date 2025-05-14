import React from 'react'
import footerMobile from "../assets/bg-pattern-footer-mobile.svg"
import footerDesktop from "../assets/bg-pattern-footer-desktop.svg"
import logo from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

const companyAndHelp = [
    {head:"OUR COMPANY", first:"HOW WE WORK", second:"WHY INSURE?", third:"VIEWPLANS", fourth:"REVIEWS"},
    {head:"HELP ME", first:"FAQ", second:"TERMS OF USE", third:"PRIVACY POLICY", fourth:"COOKIES"}
]
const contactAndOthers = [
    {head:"CONTACT", first:"SALES", second:"SUPPORT", third:"LIVE CHAT"},
    {head:"OTHERS", first:"CAREERS", second:"PRESS", third:"LICENSE"}
]

const Footer = () => {
  return (
    <div>
        <section className='relative bg-[hsl(0,0%,98%)] lg:py-7 '>
            <div>
                <div className=' flex flex-col md:flex-row md:justify-between md:gap-5 gap-7 w-[80%] mx-auto border border-r-0 border-l-0 border-t-0 border-[hsl(216,30%,68%)] py-10 '>
                    <div className=''>
                        <span className='absolute top-0 left-0 z-1 block md:hidden'><img className='w-[100%]' src={footerMobile} alt="" /></span>
                        <span className='absolute top-0 left-0 z-1 hidden md:block w-[40%]'><img src={footerDesktop} alt="" /></span>
                        <span><img className='mx-auto md:mx-0' src={logo} alt="" /></span>
                    </div>
                    <div className='flex justify-between gap-3 w-[60%] md:w-[25%] lg:w-[15%] mx-auto md:mx-0'>
                        <img className='hover:brightness-0 hover:cursor-pointer' src={facebook} alt="" />
                        <img className='hover:brightness-0 hover:cursor-pointer'  src={twitter} alt="" />
                        <img className='hover:brightness-0 hover:cursor-pointer'  src={pinterest} alt="" />
                        <img className='hover:brightness-0 hover:cursor-pointer'  src={instagram} alt="" />
                    </div>
                </div>
                <div className='w-[80%] mx-auto py-7 text-sm md:flex md:gap-10'>
                    <div className='flex flex-col md:flex-row md:flex-1 md:w-[50%]'>
                        {companyAndHelp.map((each, index)=>(
                           <div key={index} className='md:flex-1 text-center md:text-start font-semibold'>
                                <h1 className='text-[hsl(273,4%,51%)] py-5'>{each.head}</h1>
                                <a href="" className='block py-1 hover:underline'>{each.first}</a>
                                <a href="" className='block py-1 hover:underline'>{each.second}</a>
                                <a href="" className='block py-1 hover:underline'>{each.third}</a>
                                <a href="" className='block py-1 hover:underline'>{each.fourth}</a>
                           </div> 
                        ))}
                    </div>
                    <div className='flex flex-col md:flex-row md:flex-1 md:w-[50%]'>
                        {contactAndOthers.map((each, index)=>(
                            <div key={index} className='md:flex-1 text-center md:text-start font-semibold'>
                                <h1 className='text-[hsl(273,4%,51%)] py-5'>{each.head}</h1>
                                <a href="" className='block py-1 hover:underline'>{each.first}</a>
                                <a href="" className='block py-1 hover:underline'>{each.second}</a>
                                <a href="" className='block py-1 hover:underline'>{each.third}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer