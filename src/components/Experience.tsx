import { profile } from '../data/profile'
import { formatRange } from '../utils/dates'
import SkillLabel from './SkillLabel'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul className="experience-list">
        {profile.experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.start}`}
            className="experience-entry"
          >
            <div className="experience-meta">
              <p className="dates">{formatRange(entry)}</p>
              {entry.location && <p className="dates">{entry.location}</p>}
              {entry.sector && (
                <span className="sector-badge">{entry.sector}</span>
              )}
            </div>
            <div className="experience-body">
              <h3>
                {entry.role}{' '}
                <span className="company">
                  {entry.url ? (
                    <a href={entry.url} target="_blank" rel="noreferrer">
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}
                </span>
              </h3>
              <ul className="stack-chips">
                {entry.stack.map((tech) => (
                  <li key={tech}>
                    <SkillLabel name={tech} />
                  </li>
                ))}
              </ul>
              <ul className="highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {entry.metrics && entry.metrics.length > 0 && (
                <ul className="metric-row">
                  {entry.metrics.map((metric) => (
                    <li key={metric.label} className="metric-chip">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {entry.newSkillsLearned && entry.newSkillsLearned.length > 0 && (
                <div className="new-skills">
                  <p className="new-skills-label">New skills learned</p>
                  <ul>
                    {entry.newSkillsLearned.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
