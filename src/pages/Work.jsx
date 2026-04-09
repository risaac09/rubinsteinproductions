import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady, staggerEntrance } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import './Work.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Work() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'Work',
    description: 'Case studies from facilitated video production engagements. Real voice, documented transformation. Coming soon.',
    path: '/work',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    // Hero elements
    const heroEls = document.querySelectorAll('.work-hero .scroll-reveal')
    heroEls.forEach((el, i) => {
      markReady(el)
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay: i * 0.12,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    })

    // Placeholder mark
    const placeholder = document.querySelector('.work-placeholder')
    if (placeholder) {
      markReady(placeholder)
      gsap.fromTo(
        placeholder,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: placeholder, start: 'top 80%' },
        }
      )
    }

    // What to expect grid
    const expectItems = document.querySelectorAll('.expect-item')
    if (expectItems.length) {
      staggerEntrance(document.querySelector('.expect-grid'), expectItems)
    }

  }, { scope: containerRef })

  return (
    <div ref={containerRef}>

      {/* ——— HERO ——— */}
      <section className="work-hero section-pad" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
        <div className="content-narrow">
          <p className="small-caps scroll-reveal">Work</p>
          <h1 className="work-headline scroll-reveal">Case Studies</h1>
          <p className="work-sub scroll-reveal">
            Documentation of real work, in real voice. Coming soon.
          </p>
        </div>
      </section>

      {/* ——— PLACEHOLDER ——— */}
      <section className="section-pad bg-bone">
        <div className="content-narrow" style={{ textAlign: 'center' }}>
          <p className="work-placeholder scroll-reveal">···</p>
          <p className="work-placeholder-note scroll-reveal">
            Each engagement is different. What gets documented is what's true —
            not a highlight reel.
          </p>
        </div>
      </section>

      {/* ——— WHAT TO EXPECT ——— */}
      <section className="section-pad">
        <div className="content-wide">
          <div className="scroll-reveal">
            <p className="small-caps">What to expect</p>
            <h2 className="work-expect-headline">When the case studies arrive.</h2>
          </div>
          <div className="expect-grid">
            {[
              {
                label: 'Transformation arc',
                desc: 'Before and after. Not polish vs. not polish — what the person was carrying and what shifted.',
              },
              {
                label: 'Process documentation',
                desc: 'How the facilitation moved. What surfaced, what fell away. The methodology in action.',
              },
              {
                label: 'Actual metrics',
                desc: 'Video performance data. Engagement numbers. What the work produced.',
              },
              {
                label: 'Patterns across clients',
                desc: "What's common. What's different. What the work keeps finding.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="expect-item scroll-reveal">
                <h3>{label}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="bg-bone section-pad">
        <div className="content-narrow scroll-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Be documented</p>
          <h2 className="work-cta-headline">Want to be first?</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem' }}>
            The first case studies will come from the first engagements.
            Start a conversation now.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
