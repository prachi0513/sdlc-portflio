export interface StackGroup {
  label: string
  items: string[]
}

/** Technologies used to build and ship this site. */
export const siteStack: StackGroup[] = [
  { label: 'Build', items: ['React', 'TypeScript', 'Vite'] },
  { label: 'Motion', items: ['GSAP', 'Lenis'] },
  {
    label: 'Quality & delivery',
    items: ['ESLint', 'GitHub Actions', 'GitHub Pages'],
  },
  { label: 'AI workflow', items: ['Claude Code'] },
]
