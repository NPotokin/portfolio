import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'

function Sidenav() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
        <AiOutlineMenu 
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden' />
        {
            nav? (
                <div className='fixed w-full h-screen bg-sky-100/90 flex flex-col justify-center items-center z-20'>
                    <a 
                    href='#home' 
                    className='w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                     bg-sky-100 shadow-cyan-900 hover:scale-125 duration-500'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a 
                    href='#about' 
                    className='w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                     bg-sky-100 shadow-cyan-900 hover:scale-125 duration-500'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>About</span>
                    </a>
                    <a 
                    href='#projects' 
                    className='w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                     bg-sky-100 shadow-cyan-900 hover:scale-125 duration-500'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a 
                    href='#resume' 
                    className='w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                     bg-sky-100 shadow-cyan-900 hover:scale-125 duration-500'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a 
                    href='#contact' 
                    className='w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                     bg-sky-100 shadow-cyan-900 hover:scale-125 duration-500'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) 
            : (
                ''
            )
        }


        <div className='md:block hidden fixed  top-[25%] z-10'>
            <div className='flex flex-col '>
                <a href="#home" className='rounded-full shadow-lg bg-sky-100 shadow-cyan-900 m-2 p-4 cursor-pointer
                hover:scale-125 duration-500'>
                    <AiOutlineHome />
                </a>
                <a href="#about" className='rounded-full shadow-lg bg-sky-100 shadow-cyan-900 m-2 p-4 cursor-pointer
                hover:scale-125 duration-500'>
                    <AiOutlineHome />
                </a>
                <a href="#projects" className='rounded-full shadow-lg bg-sky-100 shadow-cyan-900 m-2 p-4 cursor-pointer
                hover:scale-125 duration-500'>
                    <AiOutlineHome />
                </a>
                <a href="#resume" className='rounded-full shadow-lg bg-sky-100 shadow-cyan-900 m-2 p-4 cursor-pointer
                hover:scale-125 duration-500'>
                    <AiOutlineHome />
                </a>
                <a href="#contact" className='rounded-full shadow-lg bg-sky-100 shadow-cyan-900 m-2 p-4 cursor-pointer
                hover:scale-125 duration-500'>
                    <AiOutlineHome />
                </a>
            </div>
        </div>

    </div>
  )
}

export default Sidenav