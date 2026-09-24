import { useState } from 'react'
import { profile } from '../data/profile'

function monogram(category: string): string {
  const words = category.split(/\s+/).filter((word) => word !== '&')
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return category.slice(0, 2).toUpperCase()
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    profile.skillGroups[0].category,
  )
  const activeGroup =
    profile.skillGroups.find((group) => group.category === activeCategory) ??
    profile.skillGroups[0]

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

      <div className="skill-tabs" role="tablist" aria-label="Skill categories">
        {profile.skillGroups.map((group) => {
          const isActive = group.category === activeCategory
          return (
            <button
              key={group.category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`skill-tab${isActive ? ' skill-tab-active' : ''}`}
              onClick={() => setActiveCategory(group.category)}
            >
              <span className="skill-group-monogram" aria-hidden="true">
                {monogram(group.category)}
              </span>
              {group.category}
            </button>
          )
        })}
      </div>

      <div className="skill-group" role="tabpanel">
        <ul>
          {activeGroup.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
