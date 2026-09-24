import { profile } from '../data/profile'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-groups">
        {profile.skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
