import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
import {FaToggleOff, FaToggleOn} from 'react-icons/fa'
import useStore from '../Utilities/Store'
import {ImHome} from 'react-icons/im'
import {Bs0CircleFill, BsInfoCircleFill} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'
import {HiDocument} from 'react-icons/hi'
import {IoMdContact} from 'react-icons/io'

function Sidenav() {

  const{darkMode, setDarkMode} = useStore();
    
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
        {darkMode ? (
            <FaToggleOn
            size={40}
            onClick={setDarkMode}
            className='fixed top-4 right-4 z-[99] rounded-full shadow-lg text-sky-300 bg-cyan-900 shadow-sky-300 m-4 p-2 cursor-pointer
            hover:scale-125 duration-500'
            />
        ) : (
            <FaToggleOff
            onClick={setDarkMode}
            size={40}
            className='fixed top-4 right-4 z-[99] rounded-full shadow-lg text-cyan-800 bg-sky-100 shadow-cyan-900 m-4 p-2 cursor-pointer
            hover:scale-125 duration-500'
            />
        )}

        <AiOutlineMenu size={40} 
            onClick={handleNav}
            className={`fixed top-20 right-4 z-[99] md:hidden rounded-full shadow-lg hover:scale-125 duration-500
            m-4 p-2 cursor-pointer
             ${darkMode 
             ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
             : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`} 
        />
        
        {
            nav? (
                <div className={`fixed w-full h-screen ${darkMode ? 'bg-cyan-900/60' : 'bg-sky-100/60'} flex flex-col justify-center items-center z-20`}>
                    <a 
                    onClick={handleNav}
                    href='#home' 
                    className={`w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                    hover:scale-125 duration-500 font-semibold text-lg
                    ${darkMode 
                        ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                        : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
                        <ImHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a 
                    onClick={handleNav}
                    href='#about' 
                    className={`w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                    hover:scale-125 duration-500 font-semibold text-lg
                    ${darkMode 
                        ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                        : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
                        <BsInfoCircleFill size={20} />
                        <span className='pl-4'>About</span>
                    </a>
                    <a 
                    onClick={handleNav}
                    href='#projects' 
                    className={`w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                    hover:scale-125 duration-500 font-semibold text-lg
                    ${darkMode 
                        ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                        : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
                        <MdOutlineWork size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav}
                    href='#resume' 
                    className={`w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                    hover:scale-125 duration-500 font-semibold text-lg
                    ${darkMode 
                        ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                        : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
                        <HiDocument size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a onClick={handleNav}
                    href='#contact' 
                    className={`w-[75%] flex justify-center rounded-full shadow-lg m-2 p-4 cursor-pointer
                    hover:scale-125 duration-500 font-semibold text-lg
                    ${darkMode 
                        ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                        : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
                        <IoMdContact size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) 
            : (
                null
            )
        }

        
        <div className='md:block hidden fixed  top-[25%] z-10'>
          <div className='flex flex-col '>
            <a 
            href="#home" 
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-125 duration-500
                ${darkMode 
                ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
            <ImHome />
            </a>
            <a 
            href="#about" 
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-125 duration-500
                ${darkMode 
                ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
            <BsInfoCircleFill />
            </a>
            <a 
            href="#projects" 
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-125 duration-500
                ${darkMode 
                ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
            <MdOutlineWork />
            </a>
            <a 
            href="#resume" 
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-125 duration-500
                ${darkMode 
                ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
            <HiDocument />
            </a>
            <a 
            href="#contact" 
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-125 duration-500
                ${darkMode 
                ? ' text-sky-300 bg-cyan-900 shadow-sky-300' 
                : ' text-cyan-800 bg-sky-100 shadow-cyan-800'}`}>
            <IoMdContact />
            </a>
                
          </div>
        </div>
        
    </div>
  )
}

export default Sidenav