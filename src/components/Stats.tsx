import { profile } from '../data/profile'

function Stats() {
  return (
    <dl className="stats-strip">
      {profile.stats.map((stat) => (
        <div key={stat.label} className="stat">
          <dt className="stat-value">{stat.value}</dt>
          <dd className="stat-label">{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}

export default Stats
