import { profile } from '../data/profile'

function Intro() {
  return (
    <section id="intro">
      <h1>{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p className="summary">{profile.summary}</p>
    </section>
  )
}

export default Intro
