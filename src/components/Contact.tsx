import { useState } from 'react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, EmailIcon, CopyIcon, CheckIcon } from './icons'

function Contact() {
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(profile.links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto link still works as a fallback.
    }
  }

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
        <li className="contact-email-item">
          <a href={`mailto:${profile.links.email}`}>
            <EmailIcon />
            {profile.links.email}
          </a>
          <button
            type="button"
            className="copy-email-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Contact
