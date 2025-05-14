import React, {useState} from 'react'
import {Menu, X} from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
       <nav className="container bg-white shadow-md w-full z-50">
        <div className="container mx-auto flex justify-between px-10 py-5 items-center"> 
            <img src="/src/assets/logo.svg" alt="Logo" />
            <div className="hidden md:flex gap-6 text items-center">
            <a className="text-gray-600 hover:text-blue-600" href="#">
              HOW WE WORK
            </a>
            <a className="text-gray-600 hover:text-blue-600" href="#">
              BLOG
            </a>
            <a className="text-gray-600 hover:text-blue-600" href="#">
              ACCOUNT
            </a>
                <button className='bg-white text-black px-4 border-2 hover:bg-black hover:text-white '>View Plans</button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
            {isOpen && (
          <div className="md:hidden flex flex-col bg-white px-4 pb-4 space-y-2">
            <a className="text-gray-600 hover:text-black" href="#">
            HOW WE WORK
            </a>
            <a className="text-gray-600 hover:text-black" href="#">
            BLOG
            </a>
            <a className="text-gray-600 hover:text-black" href="#">
            ACCOUNT
            </a>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-black">
              View Plans
            </button>
          </div>
         )}
       </nav>
    </div>
  )
}

export default Navbar