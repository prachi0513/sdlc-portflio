import { useState, Fragment } from 'react'
import { sdlcSteps } from '../data/sdlcSteps'

const fileRefPattern = /\b[\w.-]+\.(?:md|pdf)\b/g

function renderDescription(text: string) {
  const parts = text.split(fileRefPattern)
  const matches = text.match(fileRefPattern) ?? []
  return parts.flatMap((part, index) => {
    const match = matches[index]
    return match ? (
      <Fragment key={index}>
        {part}
        <code>{match}</code>
      </Fragment>
    ) : (
      part
    )
  })
}

function SdlcProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = sdlcSteps[activeIndex]
  const activeLabel = activeStep.title.replace(/^\d+\.\s*/, '')

  return (
    <section id="sdlc-process">
      <h2>How this site was built</h2>
      <p className="sdlc-intro">
        This site is also a learning project for an AI-native software
        development lifecycle. Step through the process to see what actually
        happened at each stage for this project.
      </p>
      <div className="sdlc-panel">
        <nav className="sdlc-steps-nav" aria-label="SDLC steps">
          {sdlcSteps.map((step, index) => {
            const isActive = index === activeIndex
            const label = step.title.replace(/^\d+\.\s*/, '')
            return (
              <button
                key={step.id}
                type="button"
                className={`sdlc-nav-item${isActive ? ' sdlc-nav-item-active' : ''}`}
                aria-current={isActive}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sdlc-nav-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {label}
              </button>
            )
          })}
        </nav>

        <div className="sdlc-terminal">
          <div className="browser-chrome">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="sdlc-terminal-path">
              ~/sdlc/{String(activeIndex + 1).padStart(2, '0')}-{activeStep.id}.log
            </span>
          </div>
          <div className="sdlc-terminal-body" key={activeStep.id}>
            <p className="sdlc-terminal-prompt">$ cat {activeLabel.toLowerCase().replace(/\s+/g, '-')}.log</p>
            <p className="sdlc-terminal-output">
              {renderDescription(activeStep.description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SdlcProcess
