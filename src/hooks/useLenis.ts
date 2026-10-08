import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis(): void {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis: Lenis | null = null
    let tick: ((time: number) => void) | null = null

    const start = () => {
      const instance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        anchors: { offset: -56 },
      })
      instance.on('scroll', ScrollTrigger.update)
      tick = (time) => instance.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      lenis = instance
    }

    const stop = () => {
      if (tick) gsap.ticker.remove(tick)
      lenis?.destroy()
      lenis = null
      tick = null
    }

    const sync = () => {
      if (query.matches) stop()
      else if (!lenis) start()
    }

    sync()
    query.addEventListener('change', sync)
    return () => {
      query.removeEventListener('change', sync)
      stop()
    }
  }, [])
}
