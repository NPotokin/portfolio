import React from "react"
import ThemeExample from "./Components/ThemeExample"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import useStore from "./Components/Store"
import {BsToggleOn} from 'react-icons/bs'

function App() {

  const {darkMode, setDarkMode} = useStore();

  return (
    <div className={darkMode ? 'bg-sky-100' : 'bg-cyan-900'}>
      <BsToggleOn onClick={setDarkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />

      <ThemeExample />
      
     
    </div>
  )
}

export default App
