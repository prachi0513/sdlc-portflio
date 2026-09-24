import { profile } from '../data/profile'
import type { ExperienceEntry } from '../data/profile'

function formatDate(date: string): string {
  const [year, month] = date.split('-')
  if (!month) return year
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString(
    'en-US',
    { month: 'short' },
  )
  return `${monthName} ${year}`
}

function formatRange(entry: ExperienceEntry): string {
  const end = entry.end === 'present' ? 'Present' : formatDate(entry.end)
  return `${formatDate(entry.start)} – ${end}`
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul className="experience-list">
        {profile.experience.map((entry) => (
          <li key={`${entry.company}-${entry.start}`} className="experience-entry">
            <div className="experience-header">
              <h3>
                {entry.role} <span className="company">{'·'} {entry.company}</span>
              </h3>
              <p className="dates">
                {formatRange(entry)}
                {entry.location ? ` ${'·'} ${entry.location}` : ''}
              </p>
            </div>
            <p className="stack">{entry.stack.join(', ')}</p>
            <ul className="highlights">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
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
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
