import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeInUp, staggerEntrance, slideIn, markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import './Home.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Home() {
  const containerRef = useRef(null)

  usePageMeta({
    title: null,
    description: "Facilitation and film for people in transition. A camera, a conversation, and a short film that says what you've become.",
    path: '/',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      // Show everything immediately
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    const mm = gsap.matchMedia()

    // ——— HERO: PINNED SCROLL-THROUGH ———
    mm.add('(min-width: 768px)', () => {
      const heroSection = document.querySelector('.hero-section')
      const heroHeadline = document.querySelector('.hero-headline')
      const heroLabel = document.querySelector('.hero-label')
      const heroSub = document.querySelector('.hero-sub')
      const heroCtas = document.querySelector('.hero-ctas')

      if (!heroSection) return

      markReady([heroHeadline, heroLabel, heroSub, heroCtas])

      // Initial state
      gsap.set([heroHeadline, heroLabel, heroSub, heroCtas], { opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: '+=150%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      // CTAs fade out first (0–20% of scroll range)
      tl.to(heroCtas, { opacity: 0, y: -20, ease: 'power2.in' }, 0)

      // Label + sub fade out faster (0–35%)
      tl.to([heroLabel, heroSub], { opacity: 0, y: -15, ease: 'power2.in' }, 0)

      // Headline scales up then fades (20–100%)
      tl.to(heroHeadline, { scale: 1.15, ease: 'none' }, 0.05)
      tl.to(heroHeadline, { opacity: 0, ease: 'power2.in' }, 0.5)
    })

    // Mobile hero: simple fade-in, no pin
    mm.add('(max-width: 767px)', () => {
      const heroEls = [
        '.hero-label',
        '.hero-headline',
        '.hero-sub',
        '.hero-ctas',
      ]
      heroEls.forEach(sel => markReady(sel))
      gsap.set(heroEls, { opacity: 1 })
    })

    // ——— METABOLIZE SECTION: label slides, text fades ———
    const metabolizeLabel = document.querySelector('.metabolize-label')
    const metabolizeParagraphs = document.querySelectorAll('.metabolize-body p')

    if (metabolizeLabel) {
      markReady(metabolizeLabel)
      gsap.fromTo(
        metabolizeLabel,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: metabolizeLabel, start: 'top 85%' },
        }
      )
    }

    if (metabolizeParagraphs.length) {
      markReady(metabolizeParagraphs)
      gsap.fromTo(
        metabolizeParagraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: metabolizeParagraphs[0],
            start: 'top 80%',
          },
        }
      )
    }

    // ——— TIME GRID: staggered cell entrance ———
    const timeCells = document.querySelectorAll('.time-cell')
    if (timeCells.length) {
      markReady(timeCells)
      gsap.fromTo(
        timeCells,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.time-grid',
            start: 'top 80%',
          },
        }
      )
    }

    // ——— FILTER SECTION: opposite-direction slide ———
    const filterRelease = document.querySelector('.filter-col--release')
    const filterKeep = document.querySelector('.filter-col--keep')

    if (filterRelease) slideIn(filterRelease, 'left')
    if (filterKeep) slideIn(filterKeep, 'right')

    // ——— METHOD STEPS: stagger with number count-up ———
    const methodSteps = document.querySelectorAll('.method-step')
    if (methodSteps.length) {
      staggerEntrance(document.querySelector('.method-steps'), methodSteps)
    }

    // ——— PERSONAS: stagger left-to-right ———
    const personaCards = document.querySelectorAll('.persona-card')
    if (personaCards.length) {
      staggerEntrance(document.querySelector('.persona-grid'), personaCards)
    }

    // ——— OFFERING SECTION: dark reveal ———
    const offeringSection = document.querySelector('.offering-section')
    if (offeringSection) {
      const offeringInner = offeringSection.querySelector('.offering-inner')
      markReady(offeringInner)
      gsap.fromTo(
        offeringInner,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: offeringSection,
            start: 'top 70%',
          },
        }
      )
    }

    // ——— CTA SECTION: fade + scale ———
    const ctaSection = document.querySelector('.home-cta-section')
    if (ctaSection) {
      markReady(ctaSection)
      gsap.fromTo(
        ctaSection,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 80%',
          },
        }
      )
    }

    return () => {
      mm.revert()
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Rubinstein Productions',
        description: 'Facilitation and film for mission-driven professionals',
        url: 'https://rubinsteinproductions.com',
        founder: {
          '@type': 'Person',
          name: 'Isaac Rubinstein',
          jobTitle: 'Facilitator & Filmmaker',
        },
        priceRange: '$500 – $12,000',
        serviceType: ['Facilitation', 'Documentary Film', 'Program Evaluation'],
        sameAs: [
          'https://www.linkedin.com/in/isaacrubinstein/',
        ],
      }} />

      {/* ——— HERO ——— */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-label scroll-reveal">
            <span className="small-caps">Rubinstein Productions</span>
            <span className="hero-label-sep" aria-hidden="true" />
            <span className="small-caps">Facilitation &amp; Film</span>
          </div>
          <h1 className="hero-headline scroll-reveal">
            Say <em>why.</em>
          </h1>
          <p className="hero-sub scroll-reveal">
            Honesty and clarity are natural. The systems we live inside make them
            feel impossible. This is facilitation and film that makes space for
            what's already true.
          </p>
          <div className="hero-ctas scroll-reveal">
            <Link to="/services" className="btn-primary">How it works</Link>
            <Link to="/contact" className="btn-ghost">Start a conversation</Link>
          </div>
        </div>
      </section>

      {/* ——— METABOLIZE / APPROACH ——— */}
      <section className="metabolize-section bg-marrow">
        <div className="content-narrow">
          <svg className="liver-mark scroll-reveal" width="64" height="64" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="40" cy="40" rx="36" ry="32" fill="none" stroke="var(--ash)" strokeWidth="1.5" opacity="0.4" />
            <ellipse cx="42" cy="42" rx="20" ry="18" fill="none" stroke="var(--blood)" strokeWidth="2" />
            <circle cx="42" cy="42" r="3" fill="var(--amber)" />
          </svg>
          <p className="small-caps metabolize-label scroll-reveal" style={{ color: 'var(--ash)' }}>
            The Digital Liver
          </p>
          <h2
            className="metabolize-headline"
            aria-label="The Say Why facilitation approach: metabolizing your message"
          >
            Your message doesn't need more polish.<br />
            It needs <span style={{ color: 'var(--amber)' }}>metabolizing.</span>
          </h2>
          <div className="metabolize-body">
            <p>
              The feeling of saying something honest and clear — you know it. It's
              fleeting. Not because you lack courage, but because the systems you
              operate inside are designed to extract, optimize, and package
              everything you say. Jargon, hedging, over-explaining, silence: these
              aren't personal failures. They're rational responses to an irrational
              environment.
            </p>
            <p>
              Clarity is relational. It happens between people, not inside them.
              Someone listens. Something loosens. What's true gets simpler.
            </p>
          </div>
        </div>
      </section>

      {/* ——— TIME GRID ——— */}
      <section className="time-grid-section">
        <div className="time-grid">
          {[
            { label: 'Past · Person', text: 'Who you were before clarity felt dangerous.', dark: false },
            { label: 'Present · Place', text: 'Here. Inside the noise, looking for signal.', dark: true },
            { label: 'Future · Thing', text: 'The work that exists once you finally say it.', dark: false },
            { label: 'Past · Place', text: 'The systems that taught you to optimize instead of speak.', dark: true },
            { label: 'Present · Person', text: 'You. Unscripted, unhedged, exactly as you are.', dark: false },
            { label: 'Future · Place', text: 'The room where what you say and what you mean are the same.', dark: true },
            { label: 'Past · Thing', text: 'The pitch that never landed. The grant that fell flat.', dark: false },
            { label: 'Present · Thing', text: 'This conversation. This facilitation. This moment.', dark: true },
            { label: 'Future · Person', text: "Someone whose clarity isn't fleeting anymore.", dark: false },
          ].map(({ label, text, dark }, i) => (
            <div key={i} className={`time-cell scroll-reveal${dark ? ' time-cell--dark' : ''}`}>
              <p className="time-cell-label">{label}</p>
              <p className="time-cell-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— FILTER: LET GO / KEEP ——— */}
      <section className="filter-section-wrap section-pad content-narrow">
        <p className="small-caps">What the liver does</p>
        <h2 className="filter-headline">
          Filter. Keep what nourishes. Release what doesn't.
        </h2>
        <div className="filter-cols">
          <div className="filter-col filter-col--release scroll-reveal">
            <h3>Let go of</h3>
            <ul>
              {[
                'Jargon as armor',
                'Performing credibility',
                'Hedging every sentence',
                "Waiting until it's perfect",
                'Explaining instead of saying',
                'The fear of being held to your words',
              ].map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="filter-col filter-col--keep scroll-reveal">
            <h3>Keep</h3>
            <ul>
              {[
                'The thing you actually believe',
                'The sentence that scares you',
                'Your real voice',
                'The work that matters',
                'Conviction without performance',
                'Simple, true statements',
              ].map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— THE OFFERING ——— */}
      <section className="offering-section bg-marrow">
        <div className="offering-inner content-narrow scroll-reveal">
          <p className="small-caps" style={{ color: 'var(--amber)' }}>The offering</p>
          <h2 className="offering-headline">I send you a camera and a lens.</h2>
          <p style={{ color: 'var(--ash)' }}>
            We talk. You film yourself. You learn the technology.
            You hold the means of production in your own hands.
            When you're done, you send the camera back.
          </p>
          <p>
            You get a 3-minute brand video. You get all your raw footage.
            You get the data from every performance.
            And you get the experience of having done it yourself,
            with someone listening the whole time.
          </p>
          <Link to="/services" className="cta-link" style={{ color: 'var(--bone)', borderColor: 'var(--blood)' }}>
            See how it works
          </Link>
        </div>
      </section>

      {/* ——— METHOD STEPS ——— */}
      <section className="method-section section-pad">
        <div className="content-wide">
          <p className="small-caps">How the work moves</p>
          <div className="divider-short" />
          <div className="method-steps">
            {[
              { num: 'I', name: 'Receive', text: 'A camera and lens arrive at your door. The technology is part of the process.' },
              { num: 'II', name: 'Talk', text: "We have facilitated conversations. What's honest surfaces. What's noise falls away." },
              { num: 'III', name: 'Film', text: 'You film yourself. Your hands, your space, your terms. This is your performance.' },
              { num: 'IV', name: 'Keep', text: "A 3-minute brand video. All your footage. The data. The experience. It's yours." },
            ].map(({ num, name, text }) => (
              <div key={num} className="method-step scroll-reveal">
                <p className="method-step-num">{num}</p>
                <p className="method-step-name">{name}</p>
                <p className="method-step-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— WHO THIS IS FOR ——— */}
      <section className="personas-section bg-bone section-pad">
        <div className="content-wide">
          <p className="small-caps">Who this is for</p>
          <h2 className="personas-headline">
            People who've been through something real and need to show it.
          </h2>
          <div className="persona-grid">
            {[
              {
                name: 'Starting a new chapter',
                desc: "You've been through a transition — burnout recovery, a career shift, grad school, a layoff — and the story hasn't caught up to who you've become. You need something tangible to point to.",
              },
              {
                name: 'Running a program',
                desc: "You're holding a container — a cohort, a workshop, a design challenge — and something real is happening inside it. You need it documented and evaluated, not just marketed.",
              },
              {
                name: 'Building something new',
                desc: "You're developing a methodology, launching a practice, or piloting something that doesn't fit neatly into existing categories. You need someone who can hold the complexity while you articulate it.",
              },
            ].map(({ name, desc }) => (
              <div key={name} className="persona-card scroll-reveal">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
            <Link to="/services" className="cta-link">See how it works →</Link>
          </p>
        </div>
      </section>

      {/* ——— HOME CTA ——— */}
      <section className="home-cta-section bg-bone section-pad scroll-reveal">
        <div className="content-narrow" style={{ textAlign: 'center' }}>
          <p className="small-caps">Start</p>
          <h2 className="home-cta-headline">Ready?</h2>
          <p className="home-cta-sub">
            It starts with a conversation. Then a camera shows up at your door.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
