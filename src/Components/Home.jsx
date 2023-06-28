import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedin, FaGitAlt,  } from 'react-icons/fa'
import useStore from '../Utilities/Store'
import {MdWavingHand} from 'react-icons/md'
import {ImMail} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'


function Home() {
  
  const{darkMode, setDarkMode} = useStore();

  return (
    <div id='home'>
      <img 
      className='w-full h-screen object-cover'
      src="https://user-images.githubusercontent.com/116308322/229610001-f8c1db2b-f6ab-42c9-aee2-0c8565c935cc.jpg" 
      alt="" />
      <div className={`w-full h-screen absolute top-0 left-0 ${darkMode ? 'bg-cyan-900/50' : 'bg-sky-100/50'} `}>
        <div className='max-w-[700px], m-auto h-full flex flex-col justify-center items-center '>
          <h1 className={`py-3 sm:text-5xl text-4xl font-bold ${darkMode 
          ? 'text-slate-100' 
          : 'text-slate-800'}`}>
            Howdy!
            <MdWavingHand className='inline mx-6 hover:scale-125 duration-700' />
            </h1>
          <h1 className={`py-3 sm:text-5xl text-4xl font-bold ${darkMode 
          ? 'text-slate-100' 
          : 'text-slate-800'}`}>I am 
          <span className={`py-3 sm:text-5xl text-4xl font-black ${darkMode 
          ? 'text-sky-300' 
          : 'text-cyan-800'}`}> Nikita Potokin
            </span> </h1>
          <h1 className={`my-4 sm:text-4xl text-3xl font-bold text ${darkMode 
          ? 'text-slate-100' 
          : 'text-slate-800'}`}> 
             
             
             <TypeAnimation
              sequence={[
              'Engineer', 
              2000, 
              'Web-Developer', 
              2000, 
              'Tech-enthusiast',
              2000, 
              'Geothermal Energy fan',
              2000, 
              'Former Head Grower',
              2000, 
              'Standup Paddleboarder',
              2000, 
              'Dog owner',
              2000, 
               ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.4em', paddingLeft:'5px'}}
            />
          </h1>
          <div className={`flex justify-between pt-6 max-w-[300px] w-full ${darkMode 
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
    </div>
  )
}

export default Home