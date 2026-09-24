import { profile } from '../data/profile'

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul className="education-list">
        {profile.education.map((entry) => (
          <li key={entry.institution} className="education-entry">
            <h3>{entry.institution}</h3>
            <p className="dates">
              {entry.credential}, {entry.field}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>
            <p className="dates">
              {entry.start} – {entry.end}
              {entry.cgpa ? ` · CGPA: ${entry.cgpa}` : ''}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="internships-heading">Internships</h2>
      <ul className="experience-list">
        {profile.internships.map((entry) => (
          <li key={`${entry.company}-${entry.start}`} className="experience-entry">
            <div className="experience-header">
              <h3>
                {entry.role} <span className="company">{'·'} {entry.company}</span>
              </h3>
              <p className="dates">
                {entry.start} – {entry.end}
                {entry.location ? ` ${'·'} ${entry.location}` : ''}
              </p>
            </div>
            <ul className="highlights">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Education
