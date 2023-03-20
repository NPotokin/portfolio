import React from "react"
import ThemeExample from "./Components/ThemeExample"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import useStore from "./Utilities/Store"
import {BsToggleOn} from 'react-icons/bs'
import Sidenav from "./Components/Sidenav"
import Resume from "./Components/Resume"

function App() {

  const {darkMode, setDarkMode} = useStore();

  return (
    <div >
      <Sidenav />
      <Home />
      <About />
      <Projects />
      <Resume  />
      <Contact />
      <ThemeExample />
    </div>
  )
}

export default App
