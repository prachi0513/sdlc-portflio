import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/profile'
import { MoonIcon, SunIcon } from './icons'

const navItems = [
  { href: '#intro', label: 'Intro' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#sdlc-process', label: 'How it was built' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <nav aria-label="Section navigation">
      <a href="#intro" className="nav-brand">
        {profile.name}
      </a>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label={`Switch to ${next} mode`}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  )
}

export default Nav
