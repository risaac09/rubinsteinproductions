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
    description: 'Three tiers of facilitated video production. The Mirror (single session from $500), The Map (full package $5K–$12K), The Territory (monthly $4K–$8K/mo).',
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

    // Tier cards: stagger 0.9→1 scale
    const tierCards = document.querySelectorAll('.tier-card')
    const tierGrid = document.querySelector('.tier-grid')
    if (tierCards.length && tierGrid) {
      markReady(tierCards)

      // Pin the section title
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

      gsap.fromTo(
        tierCards,
        { opacity: 0, y: 50, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: tierGrid,
            start: 'top 75%',
          },
        }
      )

      // Featured card (The Map, index 1): slightly more dramatic + subtle border pulse
      const featuredCard = tierCards[1]
      if (featuredCard) {
        gsap.fromTo(
          featuredCard,
          { opacity: 0, y: 60, scale: 0.87 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power2.out',
            delay: 0.1,
            scrollTrigger: {
              trigger: tierGrid,
              start: 'top 75%',
            },
          }
        )
      }
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
            name: 'The Mirror — Single Facilitation Session',
            description: 'One 90-minute facilitated conversation with narrative synthesis document.',
            price: '500',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            name: 'The Map — Full Say Why Package',
            description: 'Facilitation, camera shipped to you, 3-minute produced brand video, all raw footage returned.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: '5000',
              maxPrice: '12000',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            name: 'The Territory — Ongoing Monthly Partnership',
            description: 'Monthly facilitation and video production, 2–4 videos per month.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: '4000',
              maxPrice: '8000',
              priceCurrency: 'USD',
              unitText: 'MONTH',
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
              Three ways in.<br />
              One honest <em>conversation.</em>
            </h1>
            <p className="services-hero-sub">
              The work takes different shapes depending on where you are.
              All three share the same foundation: facilitation, film, and
              the conviction that clarity is relational.
            </p>
          </div>
        </div>
      </section>

      {/* ——— TIER CARDS ——— */}
      <section className="tiers-section section-pad">
        <div className="content-wide">
          <div className="tier-section-title scroll-reveal">
            <p className="small-caps">Work with me</p>
            <h2 className="tiers-headline">Three tiers. One methodology.</h2>
          </div>

          <div className="tier-grid">
            <div className="tier-card scroll-reveal">
              <p className="tier-tag small-caps">Single session</p>
              <h3 className="tier-name">The Mirror</h3>
              <p className="tier-price">Starting at $500</p>
              <p className="tier-desc">
                One facilitated conversation. Enough to hear yourself clearly
                and know what to do next.
              </p>
              <ul className="tier-list">
                <li>90-minute facilitated session</li>
                <li>Narrative synthesis document</li>
                <li>Recording of the conversation</li>
              </ul>
              <Link to="/contact" className="cta-link">Start here</Link>
            </div>

            <div className="tier-card tier-card--featured scroll-reveal">
              <p className="tier-tag small-caps" style={{ color: 'var(--amber)' }}>Most complete</p>
              <h3 className="tier-name">The Map</h3>
              <p className="tier-price">$5,000 – $12,000</p>
              <p className="tier-desc">
                The full offering. Facilitation, camera, film, and a message
                you can finally stand behind.
              </p>
              <ul className="tier-list">
                <li>2–3 facilitated sessions</li>
                <li>Camera and lens shipped to you</li>
                <li>3-minute produced brand video</li>
                <li>All raw footage returned</li>
                <li>Performance data and messaging doc</li>
              </ul>
              <Link to="/contact" className="cta-link">Start here</Link>
            </div>

            <div className="tier-card scroll-reveal">
              <p className="tier-tag small-caps">Ongoing partnership</p>
              <h3 className="tier-name">The Territory</h3>
              <p className="tier-price">$4,000 – $8,000 / month</p>
              <p className="tier-desc">
                Monthly facilitation and production. For when the work is ongoing
                and the clarity needs to keep pace.
              </p>
              <ul className="tier-list">
                <li>Monthly facilitation sessions</li>
                <li>2–4 produced videos per month</li>
                <li>Strategic narrative guidance</li>
                <li>Ongoing creative partnership</li>
              </ul>
              <Link to="/contact" className="cta-link">Start here</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— METHODOLOGY ——— */}
      <section className="bg-bone section-pad">
        <div className="content-narrow">
          <div className="scroll-reveal">
            <p className="small-caps">Methodology</p>
            <h2 className="methodology-headline">Four phases. One honest conversation.</h2>
            <p style={{ color: 'var(--ash)', marginTop: '0.5rem' }}>
              <Link to="/about">Learn more about Isaac's facilitation approach.</Link>
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
          <h2 className="services-cta-headline">Not sure which tier fits?</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '2.5rem' }}>
            Start with a conversation. We'll figure it out together.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>

    </div>
  )
}
