import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { markReady } from '../../hooks/useScrollAnimations.js'
import './CinematicHero.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * CinematicHero — full-bleed hero scaffold.
 *
 * Composes:
 *  - a background media slot (image / video / placeholder)
 *  - a cinematic overlay
 *  - a corner slate (top-left index + corner label)
 *  - centred or left-aligned foreground content (label, headline, sub, CTAs)
 *
 * Behavior:
 *  - On desktop, pins through its own scroll length and fades content out
 *    as the next section approaches.
 *  - On mobile + reduced motion, content is static.
 */
export default function CinematicHero({
  media,
  index = 'VOL · 01',
  slate,
  align = 'left',
  tone = 'dark',
  children,
  className = '',
  pin = true,
}) {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    const section = heroRef.current
    const content = contentRef.current
    if (!section || !content) return

    if (prefersReducedMotion()) {
      gsap.set(content, { opacity: 1 })
      return
    }

    const mm = gsap.matchMedia()

    if (pin) {
      mm.add('(min-width: 768px)', () => {
        markReady(content)
        gsap.set(content, { opacity: 1 })

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=120%',
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
          },
        }).to(content, { opacity: 0, y: -28, ease: 'power2.in' }, 0.3)
      })
    }

    mm.add('(max-width: 767px)', () => {
      markReady(content)
      gsap.set(content, { opacity: 1 })
    })

    return () => mm.revert()
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      className={`cinematic-hero cinematic-hero--${tone} cinematic-hero--${align} grain ${className}`}
    >
      {/* Background media layer */}
      <div className="cinematic-hero-bg" aria-hidden="true">
        {media ? <HeroMedia media={media} /> : null}
        <div className="cinema-overlay" />
      </div>

      {/* Top-left corner slate */}
      <div className="cinematic-hero-slate">
        <span className="frame-index frame-index--amber">{index}</span>
        {slate && <span className="frame-index">{slate}</span>}
      </div>

      {/* Bottom-right scroll cue */}
      <div className="cinematic-hero-cue" aria-hidden="true">
        <span className="frame-index">Scroll</span>
        <span className="cinematic-hero-cue-line" />
      </div>

      {/* Foreground content */}
      <div ref={contentRef} className="cinematic-hero-content scroll-reveal">
        <div className="cinematic-hero-inner">{children}</div>
      </div>
    </section>
  )
}

function HeroMedia({ media }) {
  const { type, src, poster, alt = '', placeholder } = media

  if (placeholder || type === 'placeholder' || !src) {
    return <HeroPlaceholder slate={media.slate} label={media.label || alt} />
  }

  if (type === 'video') {
    return (
      <video
        className="cinematic-hero-video"
        src={src}
        poster={poster}
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        aria-hidden="true"
      />
    )
  }

  return (
    <img
      className="cinematic-hero-img"
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
    />
  )
}

function HeroPlaceholder({ slate, label }) {
  return (
    <div className="cinematic-hero-placeholder">
      <span className="cinematic-hero-placeholder-stripe" />
      <span className="cinematic-hero-placeholder-stripe cinematic-hero-placeholder-stripe--2" />
      <span className="cinematic-hero-placeholder-stripe cinematic-hero-placeholder-stripe--3" />
      <div className="cinematic-hero-placeholder-meta">
        <p className="frame-index frame-index--amber">Awaiting media</p>
        {label && <p className="cinematic-hero-placeholder-label">{label}</p>}
        {slate && <p className="frame-index">{slate}</p>}
      </div>
    </div>
  )
}
