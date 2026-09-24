import { GithubIcon } from './icons'

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
            <span className="browser-body-title">This portfolio site</span>
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
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="project-repo-link">
            <GithubIcon />
            View source on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
