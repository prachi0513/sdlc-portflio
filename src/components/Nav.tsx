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
  return (
    <nav aria-label="Section navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
