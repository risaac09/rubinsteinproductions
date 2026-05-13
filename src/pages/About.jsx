import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { staggerEntrance, markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import CinematicHero from '../components/media/CinematicHero.jsx'
import MediaFrame from '../components/media/MediaFrame.jsx'
import AudioMoment from '../components/media/AudioMoment.jsx'
import { media } from '../data/media.js'
import './About.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function About() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'About',
    description: 'Isaac Rubinstein is a facilitator and filmmaker. MPH. Based between Seattle and Oslo. Grounded in relational ontology — clarity is something that happens between people.',
    path: '/about',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    // Content chapters
    const chapters = document.querySelectorAll('.chapter')
    chapters.forEach(chapter => {
      markReady(chapter)
      gsap.fromTo(
        chapter,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: { trigger: chapter, start: 'top 80%' },
        }
      )
    })

    // Voice grid
    const voiceItems = document.querySelectorAll('.voice-item')
    if (voiceItems.length) {
      staggerEntrance(document.querySelector('.voice-grid'), voiceItems)
    }

    // Cities split: opposite-direction slide
    const seattle = document.querySelector('.about-cities-frame--seattle')
    const oslo = document.querySelector('.about-cities-frame--oslo')
    ;[seattle, oslo].forEach((el, i) => {
      if (!el) return
      markReady(el)
      gsap.fromTo(
        el,
        { opacity: 0, x: i === 0 ? -40 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        }
      )
    })
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

      {/* ——— CINEMATIC HERO with portrait ——— */}
      <CinematicHero
        media={media.aboutPortrait}
        index="ABOUT · 02"
        slate="THE PRACTITIONER"
        tone="dark"
        align="left"
      >
        <p className="small-caps about-hero-label">About</p>
        <h1 className="about-hero-headline">
          Facilitation and film<br />
          at the edge of <em>honest speech.</em>
        </h1>
        <p className="about-hero-lede">
          Isaac Rubinstein is a facilitator, filmmaker, and voice liberation specialist.
          He doesn't show up with a crew. He sends you a camera.
        </p>
      </CinematicHero>

      {/* ——— CHAPTER I — ORIGIN ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide about-chapter-grid">
          <div className="chapter chapter--text">
            <p className="frame-index">Chapter I · Origin</p>
            <h2 className="about-section-headline">Where this practice came from.</h2>
            <p className="about-lede-text">
              The practice is grounded in relational ontology: the idea that
              we don't exist prior to our relationships but through them.
              You do the work. He holds the space.
            </p>
            <p>
              Master of Public Health. A decade working inside the systems that train people
              to optimize instead of speak: healthcare, nonprofits, social enterprise.
              He left to build a practice at the intersection of facilitation, film,
              and the philosophy of information — what happens when people metabolize
              what they know into what they can say.
            </p>
            <p>I hold a container.</p>
            <p>We experience it together, and share, between us and more widely.</p>
          </div>

          <div className="chapter chapter--media">
            <MediaFrame entry={media.aboutStudio} aspect="16-9" />
          </div>
        </div>
      </section>

      {/* ——— CHAPTER II — PHILOSOPHY + AUDIO MOMENT ——— */}
      <section className="section-pad bg-marrow grain about-chapter-philosophy">
        <div className="content-wide about-chapter-grid about-chapter-grid--reverse">
          <div className="chapter chapter--text">
            <p className="frame-index frame-index--amber">Chapter II · Philosophy</p>
            <h2 className="about-section-headline" style={{ color: 'var(--bone)' }}>
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

          <div className="chapter chapter--audio">
            <AudioMoment
              tone="dark"
              label="Working note · Voice memo"
              quote="The work is not to manufacture honesty. It is to change the conditions under which honesty can arrive."
              attribution="Isaac Rubinstein · Field journal"
              transcript="Honesty isn't a quality of a person. It's a quality of a room. You don't drag it out of someone — you change the conditions under which it can show up. That's why this work is facilitation and not coaching. Coaching tries to improve the speaker. Facilitation changes the listening."
              duration={62}
            />
          </div>
        </div>
      </section>

      {/* ——— CHAPTER III — BACKGROUND ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide about-chapter-grid">
          <div className="chapter chapter--text">
            <p className="frame-index">Chapter III · Background</p>
            <h2 className="about-section-headline">
              The systems that trained the problem.
            </h2>
            <p>
              Isaac spent a decade working inside nonprofit healthcare, social enterprise,
              and mission-driven organizations — the exact environments where the gap
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

          <div className="chapter chapter--media">
            <MediaFrame entry={media.aboutTranscript} aspect="4-5" />
          </div>
        </div>
      </section>

      {/* ——— CHAPTER IV — TWO ROOMS (Seattle + Oslo split) ——— */}
      <section className="section-pad about-cities-section">
        <div className="content-wide">
          <header className="about-cities-header">
            <p className="frame-index">Chapter IV · Location</p>
            <h2 className="about-section-headline">Two rooms. Same practice.</h2>
            <span className="rule-thin" aria-hidden="true" />
          </header>

          <div className="about-cities-grid">
            <div className="about-cities-frame about-cities-frame--seattle">
              <MediaFrame entry={media.aboutRoomSeattle} aspect="3-2" />
            </div>
            <div className="about-cities-frame about-cities-frame--oslo">
              <MediaFrame entry={media.aboutRoomOslo} aspect="3-2" />
            </div>
          </div>

          <p className="margin-note about-cities-note">
            The Pacific Northwest and Scandinavia share a particular light —
            grey, long, patient. Both rooms support the same kind of listening.
          </p>
        </div>
      </section>

      {/* ——— VOICE & TONE ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide">
          <div className="chapter">
            <p className="frame-index">Chapter V · Voice &amp; Tone</p>
            <h2 className="about-section-headline">How this practice sounds.</h2>
          </div>
          <div className="voice-grid">
            {[
              { label: 'Direct', desc: 'No hedging. No throat-clearing. The thing, then the reason.' },
              { label: 'Warm', desc: "Not cheerful. Present. There's a difference." },
              { label: 'Clear', desc: 'Simple sentences. One idea at a time. White space is not weakness.' },
              { label: 'Honest', desc: 'Including about limits. Especially about limits.' },
            ].map(({ label, desc }, i) => (
              <div key={label} className="voice-item scroll-reveal">
                <p className="frame-index voice-item-num">0{i + 1}</p>
                <h3>{label}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="bg-marrow-deep grain section-pad">
        <div className="content-narrow chapter" style={{ textAlign: 'center' }}>
          <p className="small-caps" style={{ color: 'var(--amber)' }}>Work together</p>
          <h2 className="about-section-headline" style={{ color: 'var(--bone)' }}>
            Ready to say the thing?
          </h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem' }}>
            Start with a conversation. No pitch. No pressure.
          </p>
          <Link to="/contact" className="btn-primary btn-primary--invert">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
