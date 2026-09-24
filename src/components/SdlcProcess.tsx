import { useState } from 'react'
import { sdlcSteps } from '../data/sdlcSteps'

function SdlcProcess() {
  const [activeId, setActiveId] = useState<string | null>(sdlcSteps[0].id)

  return (
    <section id="sdlc-process">
      <h2>How this site was built</h2>
      <p className="sdlc-intro">
        This site is also a learning project for an AI-native software
        development lifecycle. Click a step to see what actually happened at
        that step for this project.
      </p>
      <div className="sdlc-steps">
        {sdlcSteps.map((step) => {
          const isActive = activeId === step.id
          return (
            <div key={step.id} className="sdlc-step">
              <button
                type="button"
                className="sdlc-step-trigger"
                aria-expanded={isActive}
                aria-controls={`sdlc-panel-${step.id}`}
                onClick={() => setActiveId(isActive ? null : step.id)}
              >
                {step.title}
              </button>
              {isActive && (
                <p
                  id={`sdlc-panel-${step.id}`}
                  className="sdlc-step-panel"
                  role="region"
                >
                  {step.description}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SdlcProcess
