import React from 'react'
import AboutData from '../Utilities/AboutData'
import useStore from '../Utilities/Store'


function About() {

  const{darkMode, setDarkMode} = useStore();
  
  return (
    <div className={`w-full h-full ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
    <div 
    id='about'
    className={`max-w-[1040px] m-auto md:pl-20 p-4 py-16 ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl pb-6 font-bold text-center ${darkMode 
          ? 'text-sky-300' 
          : 'text-cyan-800'}`}>About</h1>
      {AboutData.map((item) => (
          <div key={item.key}>
            <ol className={`flex flex-col md:flex-row relative border-l-2 
            ${darkMode ? 'border-sky-300' : 'border-cyan-800'}`}>
              <li className='mb-10 ml-10'>
                <div className={`absolute w-4 h-4 rounded-full mt-2 -left-2 ${darkMode 
                  ? 'bg-sky-300' 
                  : 'bg-cyan-800'}`} />
                <p className='flex flex-wrap gap-4 flex-row justify-start text-xs md:text-sm'>
                  <span className={`inline-block px-2 py-1 font-semibold rounded-lg 
                  ${darkMode 
                    ? ' text-cyan-900 bg-sky-300' 
                    : ' text-sky-100 bg-cyan-800'}`}>{item.year}</span>
                  <span className={`text-lg font-semibold 
                  ${darkMode 
                    ? 'text-slate-100' 
                    : 'text-slate-800'}`}>{item.title}</span>
                  <span className={`my-1 text-sm font-normal leading-none ${darkMode 
                    ? 'text-sky-300' 
                    : 'text-cyan-800'}`}>{item.duration}</span>
                </p>
                <p className={`my-2 text-base font-normal ${darkMode 
                    ? 'text-slate-100' 
                    : 'text-slate-800'}`}>{item.details}</p>
              </li>
            </ol>
          </div>

      ))}

      </div>
    </div>
  )
}

export default About

