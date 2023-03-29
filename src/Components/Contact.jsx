import React from 'react'
import useStore from '../Utilities/Store'

function Contact() {

  const{darkMode, setDarkMode} = useStore();

  return (
    <div className={`w-full  ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
      <div 
      id='contact'
      className='max-w-[1040px] m-auto md:pl-20 py-16'
      >
        <h1 className={`text-4xl md:text-5xl lg:text-6xl pb-6 font-bold text-center ${darkMode 
            ? 'text-sky-300' 
            : 'text-cyan-800'}`}>
            Contact
        </h1>
        <form action="" method='POST' encType='multipart/form-data'>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col ml-2 mr-2'>
              <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Name</label>
              <input className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}`} 
              type="text" name='name' />
            </div>
            <div className='flex flex-col ml-2 mr-2'>
              <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Phone</label>
              <input className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}`} 
              type="text" name='phone' />
            </div>
          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>
            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Email</label>
            <input className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}`}
                type="email" name="email"/>
          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>
            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Subject</label>
            <input className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}`}
               type="text" name="subject"/>
          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>
            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Message</label>
            <textarea className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}`} 
              rows='10' name="message"/>
          </div>
          <button className={`p-3 m-1 my-auto mt-4 rounded-xl font-medium text-lg shadow-md hover:scale-110  
          hover:shadow-2xl duration-700 border block mx-auto
                 ${darkMode 
                 ? 'text-sky-300 shadow-sky-300 bg-cyan-900 border-sky-300' 
                 : 'text-cyan-800 shadow-cyan-800 bg-sky-100 border-cyan-800'}`}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact