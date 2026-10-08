import { GithubIcon } from './icons'
import SkillLabel from './SkillLabel'

const repoUrl = 'https://github.com/prachi0513/sdlc-portflio'
const stack = ['React', 'TypeScript', 'Vite', 'GitHub Actions', 'GitHub Pages']

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <div className="browser-frame" aria-hidden="true">
          <div className="browser-chrome">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          <div className="browser-body">
            <svg
              className="browser-preview"
              viewBox="0 0 320 200"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect width="320" height="200" fill="var(--bg)" />
              <rect
                x="16"
                y="12"
                width="44"
                height="6"
                rx="3"
                fill="var(--text-h)"
              />
              <g fill="var(--border)">
                <rect x="170" y="12" width="22" height="6" rx="3" />
                <rect x="200" y="12" width="22" height="6" rx="3" />
                <rect x="230" y="12" width="22" height="6" rx="3" />
                <rect x="260" y="12" width="22" height="6" rx="3" />
              </g>
              <rect x="0" y="28" width="320" height="1" fill="var(--border)" />
              <rect
                x="16"
                y="52"
                width="26"
                height="4"
                rx="2"
                fill="var(--accent)"
              />
              <rect
                x="16"
                y="66"
                width="120"
                height="14"
                rx="4"
                fill="var(--text-h)"
              />
              <g fill="var(--text)" opacity="0.5">
                <rect x="16" y="92" width="130" height="5" rx="2.5" />
                <rect x="16" y="104" width="116" height="5" rx="2.5" />
                <rect x="16" y="116" width="124" height="5" rx="2.5" />
              </g>
              <rect
                x="16"
                y="136"
                width="46"
                height="16"
                rx="4"
                fill="var(--accent)"
              />
              <rect
                x="68"
                y="136"
                width="46"
                height="16"
                rx="4"
                fill="none"
                stroke="var(--border)"
              />
              <g fill="var(--surface)" stroke="var(--border)">
                <rect x="176" y="52" width="60" height="44" rx="6" />
                <rect x="244" y="52" width="60" height="44" rx="6" />
                <rect x="176" y="104" width="60" height="44" rx="6" />
                <rect x="244" y="104" width="60" height="44" rx="6" />
              </g>
              <g fill="var(--text-h)">
                <rect x="184" y="62" width="22" height="8" rx="2" />
                <rect x="252" y="62" width="14" height="8" rx="2" />
                <rect x="184" y="114" width="26" height="8" rx="2" />
                <rect x="252" y="114" width="22" height="8" rx="2" />
              </g>
              <g fill="var(--text)" opacity="0.5">
                <rect x="184" y="78" width="40" height="4" rx="2" />
                <rect x="252" y="78" width="36" height="4" rx="2" />
                <rect x="184" y="130" width="36" height="4" rx="2" />
                <rect x="252" y="130" width="42" height="4" rx="2" />
              </g>
              <rect
                x="16"
                y="172"
                width="288"
                height="1"
                fill="var(--border)"
              />
            </svg>
          </div>
        </div>
        <div className="project-details">
          <h3>This portfolio site</h3>
          <p>
            Built as a practical learning project for an AI-native software
            development lifecycle: intent and plan documents, human review at
            every step, and CI/CD kept as real checkpoints rather than
            afterthoughts.
          </p>
          <ul className="project-stack">
            {stack.map((tech) => (
              <li key={tech}>
                <SkillLabel name={tech} />
              </li>
            ))}
          </ul>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-repo-link"
          >
            <GithubIcon />
            View source on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
