import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../../hooks/useScrollAnimations.js'
import MediaFrame from './MediaFrame.jsx'
import './ProcessTimeline.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * ProcessTimeline — vertical timeline of process steps with paired media.
 *
 * Each step gets a Roman index, a name, a description, an optional artifact
 * line, and an optional media entry. Media alternates side on desktop.
 * Reduced-motion safe.
 */
export default function ProcessTimeline({
  steps = [],
  label,
  heading,
  intro,
  tone = 'light',
  className = '',
}) {
  const containerRef = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const steps = containerRef.current?.querySelectorAll('.process-step')
    const spine = containerRef.current?.querySelector('.process-spine-fill')

    if (steps?.length) {
      markReady(steps)
      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        }
      )
    }

    if (spine) {
      gsap.fromTo(
        spine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      )
    }
  }, { scope: containerRef })

  if (!steps.length) return null

  return (
    <section
      ref={containerRef}
      className={`process-timeline process-timeline--${tone} ${className}`}
    >
      {(label || heading || intro) && (
        <header className="process-timeline-header">
          {label && <p className="small-caps">{label}</p>}
          {heading && <h2 className="process-timeline-heading">{heading}</h2>}
          {intro && <p className="process-timeline-intro">{intro}</p>}
        </header>
      )}

      <div className="process-timeline-spine" aria-hidden="true">
        <div className="process-spine-fill" />
      </div>

      <ol className="process-timeline-list">
        {steps.map((step, i) => (
          <li
            key={step.num || i}
            className={`process-step process-step--${i % 2 === 0 ? 'left' : 'right'} scroll-reveal`}
          >
            <div className="process-step-marker" aria-hidden="true">
              <span className="process-step-tick" />
              <span className="process-step-num">{step.num || toRoman(i + 1)}</span>
              <span className="process-step-tick" />
            </div>

            <div className="process-step-text">
              <p className="frame-index process-step-label">
                Phase {step.num || toRoman(i + 1)} · {step.name}
              </p>
              <h3 className="process-step-headline">{step.headline || step.name}</h3>
              <p className="process-step-body">{step.body}</p>
              {step.artifact && (
                <p className="process-step-artifact">
                  <span className="frame-index process-step-artifact-label">Artifact</span>
                  {step.artifact}
                </p>
              )}
            </div>

            {step.media && (
              <div className="process-step-media">
                <MediaFrame entry={step.media} tone={tone} aspect={step.media.aspect || '4-5'} />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

function toRoman(n) {
  const map = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
  let out = ''
  for (const [r, v] of map) {
    while (n >= v) { out += r; n -= v }
  }
  return out
}
