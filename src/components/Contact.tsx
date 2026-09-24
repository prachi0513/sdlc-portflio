import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul className="contact-links">
        <li>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.links.resume} download>
            Download resume
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
