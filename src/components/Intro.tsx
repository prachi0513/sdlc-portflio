import { profile } from '../data/profile'
import Stats from './Stats'

function Intro() {
  return (
    <section id="intro">
      <h1>{profile.name}</h1>
      <p className="role-line">{profile.role}</p>
      <p className="summary">{profile.summary}</p>
      <div className="hero-actions">
        <a href={profile.links.resume} download className="hero-cta">
          Download resume
        </a>
        <a href="#projects" className="hero-cta hero-cta-secondary">
          See the work
        </a>
      </div>
      <Stats />
    </section>
  )
}

export default Intro
