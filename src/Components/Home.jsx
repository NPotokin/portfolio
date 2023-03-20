import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedin, FaGitAlt,  } from 'react-icons/fa'


function Home() {
  return (
    <div id='home'>
      <img 
      className='w-full h-screen object-cover object-left'
      src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-sky-100/50'>
        <div className='max-w-[700px], m-auto h-full flex flex-col justify-center items-center '>
          <h1 className='sm:text-5xl text-4xl font-extrabold text text-slate-800'>Howdy! My name is Nikita Potokin </h1>
          <h1 className='my-4 sm:text-4xl text-3xl font-bold text text-cyan-800'> 
             <TypeAnimation
              sequence={[
              'One', 
              2000, 
              'Two', 
              2000, 
              'Three', 
                          ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', paddingLeft:'5px'}}
            />
          </h1>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaLinkedin size={30} className='cursor-pointer' />
            <FaGitAlt size={30} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home