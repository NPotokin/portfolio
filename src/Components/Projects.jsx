import React from 'react'
import useStore from '../Utilities/Store'
import ProjectData from '../Utilities/ProjectData'





function Projects() {

  

  const{darkMode, setDarkMode} = useStore();

  return (
    <div className={`w-full  ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
      <div 
      id='projects'
      className='max-w-5xl m-auto md:pl-20 p-4 py-16'>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl pb-6 font-bold text-center ${darkMode 
            ? 'text-sky-300' 
            : 'text-cyan-800'}`}>
            Projects
        </h1>
        <div className='grid my-3 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {ProjectData.map((item) => (
          
          <div key={item.key} 
          className={`relative flex items-center justify-center h-full w-full shadow-lg rounded-xl group 
             ${darkMode ? ' shadow-sky-300 hover:bg-cyan-900' : ' shadow-cyan-800 hover:bg-sky-100'}`}>
            <img 
            className={`rounded-xl group-hover:opacity-30 object-fill max-w-[300px] max-h-[300px] 
            ${darkMode ? 'bg-cyan-900 opacity-70' : 'bg-sky-100 opacity-70'}`}
            src={item.image} 
            alt={item.title} />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%]'>
              <h3 className={`w-[250px] text-2xl font-bold  tracking-wider text-center 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`}>
                {item.title}
              </h3>
              <p className={`text-lg font-medium px-1 text-justify 
              ${darkMode ? 'text-slate-100' : 'text-slate-800'} `}>
                {item.description}</p>
              <div className={`container flex flex-row justify-around p1 m-1 my-2 
              ${darkMode
              ? 'text-sky-300' 
              : 'text-cyan-800'}`}>
              {item.icons.map((item, index) => {
                const Icon = item;
               return <Icon key={index} size={35}/>
                })}

              </div>  
              <div className='container flex flex-row justify-around p-1 m-1'>
                <button
                onClick={item.exampleClick} 
                className={`p-2 m-1 rounded-xl font-medium text-lg shadow-md hover:scale-110  hover:shadow-2xl duration-700 border
                 ${darkMode 
                 ? 'text-sky-300 shadow-sky-300 bg-cyan-900 border-sky-300' 
                 : 'text-cyan-800 shadow-cyan-800 bg-sky-100 border-cyan-800'}`}>Example</button>
                <button
                onClick={item.codeClick} 
                className={`p-2 m-1 rounded-xl font-medium text-lg shadow-md hover:scale-110  hover:shadow-2xl duration-700 border
                 ${darkMode 
                 ? 'text-sky-300 shadow-sky-300 bg-cyan-900 border-sky-300' 
                 : 'text-cyan-800 shadow-cyan-800 bg-sky-100 border-cyan-800'}`}>Code</button>
              </div>
            </div>
          </div>
           ))}


        </div>
        </div>
      </div>
  )
}

export default Projects