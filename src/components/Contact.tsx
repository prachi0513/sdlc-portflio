import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, DownloadIcon } from './icons'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul className="contact-links">
        <li>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </li>
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.links.resume} download>
            <DownloadIcon />
            Download resume
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
