import HeroSection from "./HeroSection"
import NavBar from "./NavBar"
import About from "./About"
import Skills from "./Skills"
import ProjectSection from"./ProjectSection"
import Contact from "./Contact"
import Footer from "./Footer"
import Services from "./Services"
import { useState } from "react"

const Home = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div className="bg-white">
        <header>
          <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </header>
        <main>
          <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <ProjectSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </main>
        <footer>
            <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </footer>
      </div>
    </>
  )
}

export default Home
