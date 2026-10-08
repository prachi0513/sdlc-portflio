import { skillIconPath } from '../data/skillIcons'

interface SkillLabelProps {
  name: string
}

/** A technology name with its small monochrome logo, when one exists. */
function SkillLabel({ name }: SkillLabelProps) {
  const path = skillIconPath(name)
  return (
    <>
      {path && (
        <svg
          className="skill-logo"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      )}
      {name}
    </>
  )
}

export default SkillLabel
