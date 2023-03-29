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
import TechStack from "./Components/TechStack"
import Footer from "./Components/Footer"

function App() {

  const {darkMode, setDarkMode} = useStore();

  return (
    <div >
      <Sidenav />
      <Home />
      <TechStack />
      <About />
      <Projects />
      {/* <Resume  /> */}
      <Contact />
      <Footer />
      {/* <ThemeExample /> */}
    </div>
  )
}

export default App
