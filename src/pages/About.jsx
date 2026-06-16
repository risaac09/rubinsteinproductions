import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { fadeInUp, staggerEntrance, markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import './About.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function About() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'About',
    description: 'Isaac Rubinstein is a facilitator and filmmaker. MPH. Based between Seattle and Oslo. Grounded in relational ontology: clarity is something that happens between people.',
    path: '/about',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    const mm = gsap.matchMedia()

    // Hero: pinned on desktop
    mm.add('(min-width: 768px)', () => {
      const heroSection = document.querySelector('.about-hero')
      const heroInner = document.querySelector('.about-hero-inner')
      if (!heroSection || !heroInner) return

      markReady(heroInner)

      gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      }).to(heroInner, { opacity: 0, y: -30, ease: 'power2.in' }, 0.3)
    })

    mm.add('(max-width: 767px)', () => {
      markReady('.about-hero-inner')
      gsap.set('.about-hero-inner', { opacity: 1 })
    })

    // Content blocks
    const blocks = document.querySelectorAll('.about-block')
    blocks.forEach(block => {
      markReady(block)
      gsap.fromTo(
        block,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: block, start: 'top 80%' },
        }
      )
    })

    // Voice grid
    const voiceItems = document.querySelectorAll('.voice-item')
    if (voiceItems.length) {
      staggerEntrance(document.querySelector('.voice-grid'), voiceItems)
    }

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Isaac Rubinstein',
        jobTitle: 'Facilitator & Filmmaker',
        url: 'https://rubinsteinproductions.com/about',
        worksFor: {
          '@type': 'Organization',
          name: 'Rubinstein Productions',
          url: 'https://rubinsteinproductions.com',
        },
        knowsAbout: ['Facilitation', 'Filmmaking', 'Brand Video Production', 'Relational Ontology'],
        alumniOf: { '@type': 'EducationalOrganization', name: 'Master of Public Health Program' },
        sameAs: ['https://www.linkedin.com/in/isaacrubinstein/'],
      }} />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner scroll-reveal">
          <div className="content-narrow">
            <p className="small-caps">About</p>
            <h1 className="about-hero-headline">
              Facilitation and film<br />
              at the edge of <em>honest speech.</em>
            </h1>
            <p className="about-hero-lede">
              Isaac Rubinstein is a facilitator, filmmaker, and voice liberation specialist.
              He doesn't show up with a crew. He sends you a camera.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      {/* TODO: Add headshot, public/images/isaac-rubinstein-headshot.webp; would anchor credibility on this page */}
      <section className="bg-bone section-pad">
        <div className="content-narrow about-block scroll-reveal">
          <p className="small-caps">Origin</p>
          <div className="divider-short" />
          <p className="about-lede-text">
            The practice is grounded in relational ontology: the idea that
            we don't exist prior to our relationships but through them.
            You do the work. He holds the space.
          </p>
          <p>
            Master of Public Health. A decade working inside the systems that train people
            to optimize instead of speak: healthcare, nonprofits, social enterprise.
            He left to build a practice at the intersection of facilitation, film,
            and the philosophy of information: what happens when people metabolize
            what they know into what they can say.
          </p>
          <p>
            Based between Seattle and Oslo.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-pad">
        <div className="content-narrow about-block scroll-reveal">
          <p className="small-caps">Philosophy</p>
          <div className="divider-short" />
          <h2 className="about-section-headline">
            Relational, not transactional.
          </h2>
          <p>
            Most communication consulting treats clarity as a product to be manufactured.
            Better words, better slides, better delivery. That model assumes the problem
            is technical. It isn't.
          </p>
          <p>
            The problem is structural: the systems you operate inside reward performance
            over honesty, precision over directness, polish over truth. The fix isn't
            better packaging. It's a different relationship with your own voice.
          </p>
          <p>
            That's what facilitation does. Not coaching you toward a script.
            Listening until what's true becomes speakable.
          </p>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="bg-bone section-pad">
        <div className="content-narrow about-block scroll-reveal">
          <p className="small-caps">Background</p>
          <div className="divider-short" />
          <h2 className="about-section-headline">
            The systems that trained the problem.
          </h2>
          <p>
            Isaac spent a decade working inside nonprofit healthcare, social enterprise,
            and mission-driven organizations: the exact environments where the gap
            between what people believe and what they say is widest.
          </p>
          <p>
            He knows the language. He also knows how it gets used to avoid saying anything.
            The MPH gave him methodology. The film work gave him a camera.
            The facilitation practice gives clients the room to figure out
            what they actually want to say.
          </p>
          <p>
            The "Say Why" methodology emerged from that collision:
            what happens when you stop optimizing your message and start
            metabolizing it instead.{' '}
            <Link to="/services">See the three ways to work together.</Link>
          </p>
        </div>
      </section>

      {/* VOICE & TONE */}
      <section className="section-pad">
        <div className="content-wide">
          <div className="about-block scroll-reveal">
            <p className="small-caps">Voice &amp; Tone</p>
            <div className="divider-short" />
            <h2 className="about-section-headline">How this practice sounds.</h2>
          </div>
          <div className="voice-grid">
            {[
              { label: 'Direct', desc: 'No hedging. No throat-clearing. The thing, then the reason.' },
              { label: 'Warm', desc: "Not cheerful. Present. There's a difference." },
              { label: 'Clear', desc: 'Simple sentences. One idea at a time. White space is not weakness.' },
              { label: 'Honest', desc: 'Including about limits. Especially about limits.' },
            ].map(({ label, desc }) => (
              <div key={label} className="voice-item scroll-reveal">
                <h3>{label}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone section-pad">
        <div className="content-narrow about-block scroll-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Work together</p>
          <h2 className="about-section-headline">Ready to say the thing?</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem' }}>
            Start with a conversation. No pitch. No pressure.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
