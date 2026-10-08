import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StackedCardsProps {
  children: ReactNode[]
}

// Keep in sync with the sticky media query in App.css. Below these sizes a
// whole card does not fit on screen, so cards scroll normally instead.
const STACK_QUERY =
  '(prefers-reduced-motion: no-preference) and (min-width: 641px) and (min-height: 701px)'

function StackedCards({ children }: StackedCardsProps) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      STACK_QUERY,
      () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          '.stack-card',
          root.current,
        )

        cards.forEach((card, i) => {
          const next = cards[i + 1]
          if (!next) return
          // Cards underneath shrink slightly, forming visible layers.
          gsap.to(card, {
            scale: 1 - (cards.length - 1 - i) * 0.02,
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top bottom',
              end: () => `top ${parseFloat(getComputedStyle(next).top)}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
        })
      },
      root,
    )

    return () => mm.revert()
  }, [])

  return (
    <div ref={root} className="stack">
      {children.map((child, i) => (
        <article
          key={i}
          className="stack-card"
          style={{ '--i': i } as CSSProperties}
        >
          {child}
        </article>
      ))}
    </div>
  )
}

export default StackedCards
