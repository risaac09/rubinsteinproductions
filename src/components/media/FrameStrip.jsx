import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../../hooks/useScrollAnimations.js'
import MediaFrame from './MediaFrame.jsx'
import './FrameStrip.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * FrameStrip — horizontal contact-sheet row of frames.
 * Each frame is a compact MediaFrame. Captions sit below.
 * Desktop: grid. Mobile: horizontal scroll (snapping).
 */
export default function FrameStrip({
  entries = [],
  heading,
  label,
  tone = 'light',
  aspect = '3-2',
  className = '',
}) {
  const stripRef = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const items = stripRef.current?.querySelectorAll('.frame-strip-item')
    if (!items?.length) return

    markReady(items)
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: stripRef.current, start: 'top 80%' },
      }
    )
  }, { scope: stripRef })

  if (!entries.length) return null

  return (
    <section
      ref={stripRef}
      className={`frame-strip frame-strip--${tone} ${className}`}
    >
      {(label || heading) && (
        <header className="frame-strip-header">
          {label && <p className="small-caps">{label}</p>}
          {heading && <h2 className="frame-strip-heading">{heading}</h2>}
          <span className="rule-thin frame-strip-rule" aria-hidden="true" />
        </header>
      )}

      <div className="frame-strip-track">
        {entries.map((entry, i) => (
          <div key={entry.id || i} className="frame-strip-item scroll-reveal">
            <span className="frame-index frame-strip-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <MediaFrame entry={entry} aspect={aspect} tone={tone} />
          </div>
        ))}
      </div>
    </section>
  )
}
