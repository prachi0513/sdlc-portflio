import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function apply(theme: Theme): void {
  const root = document.documentElement
  if (theme === 'dark') root.setAttribute('data-theme', 'dark')
  else root.removeAttribute('data-theme')
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(
    () => readStored() ?? (window.matchMedia(darkQuery).matches ? 'dark' : 'light'),
  )

  useEffect(() => {
    apply(theme)
  }, [theme])

  // Follow the system setting until the user picks a theme themselves.
  useEffect(() => {
    const query = window.matchMedia(darkQuery)
    const onChange = (event: MediaQueryListEvent) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('theme-transition')
      window.setTimeout(() => root.classList.remove('theme-transition'), 250)
    }
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable: the choice just won't persist.
    }
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
