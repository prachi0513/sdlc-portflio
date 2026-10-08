import { profile } from '../data/profile'
import Stats from './Stats'

function Intro() {
  return (
    <section id="intro">
      <div className="hero-copy">
        <p className="role-line">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="summary">{profile.summary}</p>
        <div className="hero-actions">
          <a href={profile.links.resume} download className="hero-cta">
            Download resume
          </a>
          <a href="#experience" className="hero-cta hero-cta-secondary">
            Experience
          </a>
          <a href="#projects" className="hero-cta hero-cta-secondary">
            Projects
          </a>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Intro
