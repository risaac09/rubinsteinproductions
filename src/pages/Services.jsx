import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { markReady, staggerEntrance } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import './Services.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Services() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'Services & Pricing',
    description: 'Founder Story: facilitated conversation + short film from $1,500. Program engagement for cohorts and workshops. Facilitation, film, and evaluation grounded in real methodology.',
    path: '/services',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    const mm = gsap.matchMedia()

    // Hero
    mm.add('(min-width: 768px)', () => {
      const heroSection = document.querySelector('.services-hero')
      const heroInner = document.querySelector('.services-hero-inner')
      if (!heroSection || !heroInner) return

      markReady(heroInner)
      gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: '+=80%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      }).to(heroInner, { opacity: 0, y: -20, ease: 'power2.in' }, 0.4)
    })

    mm.add('(max-width: 767px)', () => {
      markReady('.services-hero-inner')
      gsap.set('.services-hero-inner', { opacity: 1 })
    })

    // Tier cards: fade in + scale
    const tierCards = document.querySelectorAll('.tier-card')
    if (tierCards.length) {
      markReady(tierCards)

      // Section title
      const tierTitle = document.querySelector('.tier-section-title')
      if (tierTitle) {
        markReady(tierTitle)
        gsap.fromTo(
          tierTitle,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: tierTitle, start: 'top 85%' },
          }
        )
      }

      tierCards.forEach(card => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.93 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        )
      })
    }

    // Methodology items: stagger
    const methodItems = document.querySelectorAll('.methodology-item')
    if (methodItems.length) {
      markReady(methodItems)
      gsap.fromTo(
        methodItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: document.querySelector('.methodology-list'),
            start: 'top 78%',
          },
        }
      )

      // Line draw for each item separator
      const lines = document.querySelectorAll('.methodology-item-line')
      lines.forEach(line => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: line, start: 'top 90%' },
          }
        )
      })
    }

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'Rubinstein Productions Services',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Founder Story — Facilitated Conversation + Short Film',
            description: "One or two facilitated conversations and a 2–3 minute produced film that says what you've become.",
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: '1500',
              maxPrice: '2500',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'Program Engagement — Embedded Documentation + Evaluation',
            description: 'Facilitation, documentation, and evaluation embedded in your program, workshop, or cohort.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: '3000',
              maxPrice: '8000',
              priceCurrency: 'USD',
            },
          },
        ],
      }} />

      {/* ——— HERO ——— */}
      <section className="services-hero">
        <div className="services-hero-inner scroll-reveal">
          <div className="content-narrow">
            <p className="small-caps">Services</p>
            <h1 className="services-hero-headline">
              The work scales<br />
              to where <em>you are.</em>
            </h1>
            <p className="services-hero-sub">
              It starts with a facilitated conversation and a short film.
              For programs and cohorts, it goes deeper — embedded documentation
              and evaluation. Same foundation: facilitation, film, and
              the conviction that clarity is relational.
            </p>
          </div>
        </div>
      </section>

      {/* ——— FOUNDER STORY ——— */}
      <section className="tiers-section section-pad">
        <div className="content-wide">
          <div className="tier-section-title scroll-reveal">
            <p className="small-caps">Start here</p>
            <h2 className="tiers-headline">Founder Story</h2>
          </div>

          <div className="tier-grid">
            <div className="tier-card tier-card--featured scroll-reveal" style={{ maxWidth: '38rem', margin: '0 auto' }}>
              <p className="tier-tag small-caps" style={{ color: 'var(--amber)' }}>The offering</p>
              <h3 className="tier-name">Say what you've become.</h3>
              <p className="tier-price">$1,500 – $2,500</p>
              <p className="tier-desc">
                A facilitated conversation and a short film. You talk.
                I listen. We make something you can point to.
              </p>
              <ul className="tier-list">
                <li>1–2 facilitated sessions</li>
                <li>Camera and lens shipped to you</li>
                <li>2–3 minute produced film</li>
                <li>All raw footage returned</li>
                <li>Narrative synthesis document</li>
              </ul>
              <Link to="/contact" className="cta-link">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CASE STUDY: GDC ——— */}
      <section className="bg-bone section-pad">
        <div className="content-narrow">
          <div className="scroll-reveal">
            <p className="small-caps">What this becomes</p>
            <h2 style={{ marginBottom: '1.5rem' }}>When I embedded in a 10-week design challenge</h2>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              marginBottom: '2rem',
              borderRadius: '4px',
            }}>
              <iframe
                src="https://www.youtube.com/embed/I5HH-s8Z5yU"
                title="The Genesis Design Challenge: Making the Invisible Value Visible"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p style={{ color: 'var(--ash)', marginBottom: '1rem' }}>
              The Genesis Design Challenge brought eight people together to
              build something from nothing. I embedded as facilitator and
              documentarian — conducting wayfinding interviews, tracking
              individual learning arcs, and producing a compilation film.
            </p>
            <p style={{ color: 'var(--ash)', marginBottom: '1rem' }}>
              The result: a 15-minute film, an impact evaluation report with
              longitudinal data across five pulse surveys, and individual
              narrative artifacts for each participant.
            </p>
            <p style={{ color: 'var(--ash)', marginBottom: '1.5rem' }}>
              This is what happens when facilitation and film go deeper —
              embedded in a program, documenting what emerges, and producing
              evaluation data that proves it happened.
            </p>
          </div>
          <div className="scroll-reveal" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div className="tier-card" style={{ flex: '1', minWidth: '14rem' }}>
              <p className="tier-tag small-caps">Program engagement</p>
              <h3 className="tier-name" style={{ fontSize: '1.1rem' }}>For cohorts, workshops, and containers</h3>
              <p className="tier-price">$3,000 – $8,000</p>
              <ul className="tier-list">
                <li>Embedded facilitation across the program arc</li>
                <li>Individual participant interviews</li>
                <li>Compilation film + individual stories</li>
                <li>Impact evaluation report</li>
              </ul>
              <Link to="/contact" className="cta-link">Let's talk about your program</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— METHODOLOGY ——— */}
      <section className="bg-bone section-pad">
        <div className="content-narrow">
          <div className="scroll-reveal">
            <p className="small-caps">How it works</p>
            <h2 className="methodology-headline">Four phases. One honest conversation.</h2>
            <p style={{ color: 'var(--ash)', marginTop: '0.5rem' }}>
              <Link to="/about">Learn more about the facilitation approach.</Link>
            </p>
          </div>

          <div className="methodology-list">
            {[
              {
                num: 'I',
                name: 'Receive',
                desc: 'A camera and lens arrive at your door. You unbox them. You hold them. The technology is part of the process — owning the means of production changes the relationship with what you produce.',
              },
              {
                num: 'II',
                name: 'Talk',
                desc: "We have facilitated conversations. Not interviews. Not coaching sessions with homework. Conversations where what's honest surfaces and what's noise falls away. The synthesis document comes from this.",
              },
              {
                num: 'III',
                name: 'Film',
                desc: 'You film yourself. Your hands. Your space. Your terms. The footage is yours before the edit. This is your performance — documented on your own equipment, in your own environment.',
              },
              {
                num: 'IV',
                name: 'Keep',
                desc: 'A 3-minute brand video. All raw footage returned. Performance data from every take. The messaging document. And the experience of having said it yourself, with someone listening the whole time.',
              },
            ].map(({ num, name, desc }) => (
              <div key={num} className="methodology-item scroll-reveal">
                <div className="methodology-item-line" />
                <div className="methodology-item-inner">
                  <span className="methodology-num">{num}</span>
                  <div className="methodology-content">
                    <h3 className="methodology-name">{name}</h3>
                    <p className="methodology-desc">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section-pad">
        <div className="content-narrow scroll-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Start</p>
          <h2 className="services-cta-headline">It starts with a conversation.</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem' }}>
            Tell me what you're building, where you are in the process,
            and what you need to show for it. We'll figure out the rest together.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
