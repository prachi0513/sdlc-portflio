const repoUrl = 'https://github.com/prachi0513/sdlc-portflio'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-entry">
        <h3>This portfolio site</h3>
        <p>
          Built as a practical learning project for an AI-native software
          development lifecycle (SDLC), with human review, planning docs,
          testing, and CI/CD kept as real checkpoints. React, TypeScript, and
          Vite, deployed on GitHub Pages.
        </p>
        <a href={repoUrl} target="_blank" rel="noreferrer">
          View source on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects
