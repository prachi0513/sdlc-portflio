import Nav from './components/Nav'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import SdlcProcess from './components/SdlcProcess'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Intro />
        <Experience />
        <Skills />
        <Education />
        <SdlcProcess />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
