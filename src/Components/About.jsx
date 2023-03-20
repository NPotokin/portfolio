import React from 'react'
import AboutData from './AboutData'

function About() {
  return (
    <div 
    id='about'
    className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-cyan-800'>About</h1>
      {AboutData.map((item, id) => (
          <div>
            <ol className='flex flex-col md:flex-row relative border-l border-sky-100'>
              <li className='mb-10 ml-10'>
                <div className='absolute w-3 h-3 bg-sky-100 rounded-full mt-1.5 -left-1.5 border-cyan-600' />
                <p className='flex flex-wrap gap-4 flex-row justify-start text-xs md:text-sm'>
                  <span className='inline-block px-2 py-1 font-semibold text-sky-100 bg-cyan-600 rounded-lg'>{item.year}</span>
                  <span className='text-lg font-semibold text-slate-800'>{item.title}</span>
                  <span className='my-1 text-sm font-normal leading-none text-cyan-800 '>{item.duration}</span>
                </p>
                <p className='my-2 text-base font-normal text-slate-800 '>{item.details}</p>
              </li>
            </ol>
          </div>

      ))}

    </div>
  )
}

export default About