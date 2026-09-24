import Nav from './components/Nav'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import SdlcProcess from './components/SdlcProcess'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Reveal from './components/Reveal'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Intro />
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <SdlcProcess />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  )
}

export default App
