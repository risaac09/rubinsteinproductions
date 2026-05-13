import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import CinematicHero from '../components/media/CinematicHero.jsx'
import MediaFrame from '../components/media/MediaFrame.jsx'
import ProcessTimeline from '../components/media/ProcessTimeline.jsx'
import { media } from '../data/media.js'
import './Services.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    function onMessage(e) {
      if (e.origin !== 'https://risaac09.github.io') return
      if (e.data?.type === 'height') {
        const f = document.querySelector('iframe[title="Information Metabolism Diagnostic"]')
        if (f) f.style.height = e.data.px + 'px'
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

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

    // Tier cards
    const tierCards = document.querySelectorAll('.service-track')
    if (tierCards.length) {
      markReady(tierCards)
      tierCards.forEach(card => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 80%' },
          }
        )
      })
    }

    // Case study fade
    const caseEls = document.querySelectorAll('.case-study .scroll-reveal')
    caseEls.forEach(el => {
      markReady(el)
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    })

    // Diagnostic + CTA fade
    const fadeBlocks = document.querySelectorAll('.services-diagnostic .scroll-reveal, .services-cta .scroll-reveal')
    fadeBlocks.forEach(el => {
      markReady(el)
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    })
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

      {/* ——— CINEMATIC HERO ——— */}
      <CinematicHero
        media={media.servicesHero}
        index="SERVICES · 03"
        slate="THE OFFER"
        tone="dark"
        align="left"
      >
        <p className="small-caps services-hero-label">Services</p>
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
      </CinematicHero>

      {/* ——— SERVICE TRACKS ——— */}
      <section className="service-tracks bg-bone section-pad">
        <div className="content-wide">
          <header className="service-tracks-header">
            <p className="small-caps">Two ways to work</p>
            <span className="rule-thin" aria-hidden="true" />
          </header>

          {/* Track 01 — Founder Story */}
          <article className="service-track scroll-reveal">
            <div className="service-track-meta">
              <p className="frame-index frame-index--blood">Track 01 · Start here</p>
              <h2 className="service-track-name">Founder Story</h2>
              <p className="service-track-tag">A facilitated conversation and a short film.</p>
              <p className="service-track-price">$1,500 – $2,500</p>
              <p className="service-track-desc">
                You talk. I listen. We make something you can point to.
                For founders, practitioners, and individuals in transition who need
                a tangible artifact of who they've become.
              </p>
              <ul className="service-track-list">
                <li>1–2 facilitated sessions (90 min each)</li>
                <li>Camera and lens shipped to you</li>
                <li>2–3 minute produced film</li>
                <li>All raw footage returned</li>
                <li>Narrative synthesis document</li>
              </ul>
              <Link to="/contact" className="cta-link">Start a conversation</Link>
            </div>
            <div className="service-track-media">
              <MediaFrame entry={media.servicesFounderStory} aspect="4-5" />
            </div>
          </article>

          {/* Track 02 — Program Engagement */}
          <article className="service-track service-track--reverse scroll-reveal">
            <div className="service-track-meta">
              <p className="frame-index frame-index--amber">Track 02 · For programs</p>
              <h2 className="service-track-name">Program Engagement</h2>
              <p className="service-track-tag">Embedded documentation. Real evaluation.</p>
              <p className="service-track-price">$3,000 – $8,000</p>
              <p className="service-track-desc">
                For cohorts, workshops, and design containers where something real
                is happening and you need it documented, evaluated, and translated —
                not just marketed.
              </p>
              <ul className="service-track-list">
                <li>Embedded facilitation across the program arc</li>
                <li>Individual participant interviews</li>
                <li>Compilation film + individual stories</li>
                <li>Impact evaluation report with longitudinal data</li>
                <li>Pulse surveys + narrative artifacts per participant</li>
              </ul>
              <Link to="/contact" className="cta-link">Let's talk about your program</Link>
            </div>
            <div className="service-track-media">
              <MediaFrame entry={media.servicesProgram} aspect="4-5" />
            </div>
          </article>
        </div>
      </section>

      {/* ——— CASE STUDY: GENESIS DESIGN CHALLENGE ——— */}
      <section className="case-study section-pad">
        <div className="content-narrow">
          <div className="scroll-reveal">
            <p className="frame-index frame-index--amber">Case study · Genesis Design Challenge</p>
            <h2 className="case-study-headline">
              When I embedded in a 10-week design challenge.
            </h2>

            <div className="case-study-video">
              <iframe
                src="https://www.youtube.com/embed/I5HH-s8Z5yU"
                title="The Genesis Design Challenge: Making the Invisible Value Visible"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="slate case-study-slate">
              <span>Run 2024</span>
              <span className="slate-sep" aria-hidden="true" />
              <span>10 weeks</span>
              <span className="slate-sep" aria-hidden="true" />
              <span>8 participants</span>
              <span className="slate-sep" aria-hidden="true" />
              <span>5 pulse surveys</span>
              <span className="slate-sep" aria-hidden="true" />
              <span>15-min film</span>
            </div>

            <p className="case-study-body">
              The Genesis Design Challenge brought eight people together to
              build something from nothing. I embedded as facilitator and
              documentarian — conducting wayfinding interviews, tracking
              individual learning arcs, and producing a compilation film.
            </p>
            <p className="case-study-body">
              The result: a 15-minute film, an impact evaluation report with
              longitudinal data across five pulse surveys, and individual
              narrative artifacts for each participant.
            </p>
            <p className="case-study-body">
              This is what happens when facilitation and film go deeper —
              embedded in a program, documenting what emerges, and producing
              evaluation data that proves it happened.
            </p>
          </div>
        </div>
      </section>

      {/* ——— THE METHOD ENGINE ——— */}
      <ProcessTimeline
        label="How it works · The method"
        heading="Four phases. One honest conversation."
        intro="Receive. Talk. Film. Keep. Same shape on a 90-minute Founder Story call and on a 10-week embedded engagement — the depth and deliverables scale."
        tone="dark"
        steps={[
          {
            num: 'I',
            name: 'Receive',
            headline: 'A camera and a lens at your door.',
            body: 'A small Pelican case arrives. Inside: a camera body, a lens, a charged battery, and a handwritten note. The technology is part of the process — owning the means of production changes the relationship with what you produce.',
            artifact: 'Deliverable: kit + onboarding note + technical primer.',
            media: media.homeMethodReceive,
          },
          {
            num: 'II',
            name: 'Talk',
            headline: 'Facilitated conversation. Not coaching.',
            body: "We have one or two sessions (or many, across a program arc). I'm there to listen and reflect, not to script. Honest things get said. Noise falls away. The synthesis document comes from this — your own words, organized.",
            artifact: 'Deliverable: synthesis document in your voice.',
            media: media.homeMethodTalk,
          },
          {
            num: 'III',
            name: 'Film',
            headline: 'You film yourself, on your terms.',
            body: 'Your hands on the camera. Your space, your light, your timing. The footage is yours before the edit. For programs, this includes individual participant films and a compilation cut.',
            artifact: 'Deliverable: raw footage + produced film(s).',
            media: media.homeMethodFilm,
          },
          {
            num: 'IV',
            name: 'Keep',
            headline: 'A film, the footage, the data, the experience.',
            body: 'A produced brand video. All raw footage returned. Performance data from every take. The synthesis document. For programs: impact evaluation, longitudinal pulse data, and individual narrative artifacts.',
            artifact: 'Deliverable: a body of work you can point to and the receipts behind it.',
            media: media.homeMethodKeep,
          },
        ]}
      />

      {/* ——— DIAGNOSTIC ——— */}
      <section className="services-diagnostic section-pad">
        <div className="content-narrow">
          <div className="scroll-reveal services-diagnostic-header">
            <p className="frame-index">Not sure where to start?</p>
            <h2 className="services-diagnostic-headline">Take the diagnostic.</h2>
            <p className="services-diagnostic-sub">
              Twelve questions about how information moves through your system.
              Four minutes. The report tells you which service tier fits — or whether
              you need something else entirely.
            </p>
          </div>
          <iframe
            src="https://risaac09.github.io/alchemy-diagnostic/embed.html"
            style={{ width: '100%', border: 'none', display: 'block' }}
            title="Information Metabolism Diagnostic"
            loading="lazy"
          />
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="services-cta section-pad bg-bone">
        <div className="content-narrow scroll-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Start</p>
          <h2 className="services-cta-headline">It starts with a conversation.</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Tell me what you're building, where you are in the process,
            and what you need to show for it. We'll figure out the rest together.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
