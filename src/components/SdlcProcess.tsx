import { Fragment } from 'react'
import { sdlcPhases, sdlcSteps, type SdlcStep } from '../data/sdlcSteps'
import { siteStack } from '../data/siteStack'
import SkillLabel from './SkillLabel'
import StackedCards from './StackedCards'

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

const stepsById: Record<string, SdlcStep> = Object.fromEntries(
  sdlcSteps.map((step) => [step.id, step]),
)

function SdlcProcess() {
  return (
    <section id="sdlc-process">
      <h2>How this site was built</h2>
      <p className="sdlc-intro">
        This site is also a learning project for an AI-native software
        development lifecycle. Here is what actually happened at each stage, in
        five phases.
      </p>

      <StackedCards>
        {sdlcPhases.map((phase, index) => (
          <div key={phase.id} className="phase">
            <div className="phase-head">
              <span className="phase-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{phase.title}</h3>
              <p>{phase.summary}</p>
            </div>
            <ol className="phase-steps">
              {phase.stepIds.map((id) => {
                const step = stepsById[id]
                return (
                  <li key={id}>
                    <h4>{step.title.replace(/^\d+\.\s*/, '')}</h4>
                    <p>{renderDescription(step.description)}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        ))}
      </StackedCards>

      <div className="site-stack">
        <h3>The stack</h3>
        <div className="site-stack-groups">
          {siteStack.map((group) => (
            <div key={group.label} className="site-stack-group">
              <p className="site-stack-label">{group.label}</p>
              <ul className="stack-chips">
                {group.items.map((item) => (
                  <li key={item}>
                    <SkillLabel name={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SdlcProcess
