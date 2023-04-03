import React from 'react'
import useStore from '../Utilities/Store'
import {ImMail} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import {FaLinkedin, FaGitAlt,  } from 'react-icons/fa'



function Footer() {

  const{darkMode, setDarkMode} = useStore();

  return (
    <div className={`w-full pl-12  ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
       <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col md:flex-row'>
        <div className={`text-xl md:text-xl lg:text-2xl pb-6 font-bold mx-auto mr-1 ml-1 ${darkMode 
            ? 'text-sky-300' 
            : 'text-cyan-800'}`}>Copiwright 2023. All rights reserved</div>
        <div className={`flex w-1/2 lg:w-1/3 ml-12 justify-between ${darkMode 
          ? 'text-sky-300' 
          : 'text-cyan-800'}`}>
            <a 
            className='cursor-pointer hover:scale-125 duration-700' 
            target="_blank" rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/nikitapotokin/">
              <FaLinkedin size={35}  />
            </a>

           <a 
           href="https://github.com/NPotokin" 
           target="_blank" rel="noopener noreferrer"
           className='cursor-pointer hover:scale-125 duration-700'>
            <FaGitAlt size={35} />
           </a>
            
          <a href="mailto:npotokin@gmail.com" 
          className='cursor-pointer hover:scale-125 duration-700'
          target="_blank" rel="noopener noreferrer">
            <ImMail size={35} />
          </a>
          </div>


       </div>
    </div>
  )
}

export default Footer