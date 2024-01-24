import React from 'react'
import useStore from '../Utilities/Store'
import {ImHtmlFive} from 'react-icons/im'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiGithub, SiTailwindcss, SiReact, SiBootstrap, SiFigma, SiMongodb, SiPrisma} from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";


function TechStack() {

  const{darkMode, setDarkMode} = useStore();

  return (
    <div 
    id='skills'
    className={`w-full  ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
        <div className={`max-w-5xl m-auto md:pl-20 p-4 py-16 ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl pb-6 font-bold text-center ${darkMode 
            ? 'text-sky-300' 
            : 'text-cyan-800'}`}>
            Skills
            </h1>
            <div className='grid grid-cols-2 gap-12 lg:grid-cols-4 items-center text-center justify-between m-3 p-3 pl-12 my-6'>
                <ImHtmlFive size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <DiCss3 size={90} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiJavascript size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiBootstrap size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiGithub size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiTailwindcss size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiReact size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiFigma size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <TbBrandNextjs size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <FaNodeJs size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiMongodb size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                <SiPrisma size={75} className={`hover:scale-125 duration-700 ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}/>
                

            </div>


        </div>
        
        
    </div>
  )
}

export default TechStack