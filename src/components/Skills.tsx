import { profile } from '../data/profile'
import SkillLabel from './SkillLabel'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="domains-row">
        <span className="domains-label">Industries worked in</span>
        <ul className="domains-list">
          {profile.domains.map((domain) => (
            <li key={domain} className="sector-badge">
              {domain}
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-rows">
        {profile.skillGroups.map((group) => (
          <div key={group.category} className="skill-row">
            <h3>
              {group.category}
              <span className="skill-count">{group.items.length}</span>
            </h3>
            <ul className="skill-tiles">
              {group.items.map((item) => (
                <li key={item}>
                  <SkillLabel name={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
