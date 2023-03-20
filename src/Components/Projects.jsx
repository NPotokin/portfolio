import React from 'react'


function Projects() {
  return (
    <div 
    id='projects'
    className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-slate-800'>Projects</h1>
      <p className='py-8 text-center'>
        Project description or bla bla bla
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl
          shadow-cyan-800 rounded-xl group hover:bg-cyan-200'>
          <img 
          className='rounded-xl group-hover:opacity-30 max-w-[256px] max-h-[256px] object-fill'
          src='../src/Assets/weatherapp.png' 
          alt="" />
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-sky-100 tracking-wider text-center'>
              Title
            </h3>
            <p>Short description</p>
            <div className='container flex flex-row justify-around'>
              <button className='p-1 m-1 rounded-lg bg-cyan-800'>Example</button>
              <button className='p-1 m-1 rounded-lg bg-cyan-800'>Code</button>
            </div>

          </div>
        </div>
        
      </div>
      </div>
  )
}

export default Projects