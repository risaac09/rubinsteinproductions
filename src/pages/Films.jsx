import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady, prefersReducedMotion } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import { featured, verticals } from '../data/films.js'
import './Films.css'

const CHANNEL = 'https://www.youtube.com/@risaac09'

// Click-to-load: show the YouTube thumbnail until the user opts in, then swap in
// the iframe. Keeps the page fast (no third-party iframe on first paint) and
// privacy-light (youtube-nocookie). `ratio` is the padding-bottom percentage.
function LiteYouTube({ id, title, ratio }) {
  const [active, setActive] = useState(false)
  return (
    <div className="lite-yt" style={{ paddingBottom: ratio }}>
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          className="lite-yt-poster"
          onClick={() => setActive(true)}
          aria-label={`Play: ${title}`}
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
        >
          <span className="lite-yt-play" aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  )
}

export default function Films() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'Films',
    description: 'Documentary and vertical-format film from Rubinstein Productions. Embedded program documentation, founder stories, and short vertical work.',
    path: '/films',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }
    const els = document.querySelectorAll('.films-reveal')
    els.forEach(el => {
      markReady(el)
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 86%' },
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: featured.title,
        description: featured.blurb,
        thumbnailUrl: `https://i.ytimg.com/vi/${featured.id}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${featured.id}`,
        uploadDate: '2025-01-01',
        publisher: { '@type': 'Organization', name: 'Rubinstein Productions' },
      }} />

      {/* ——— HERO ——— */}
      <section className="films-hero section-pad">
        <div className="content-narrow">
          <p className="small-caps">Films</p>
          <h1 className="films-hero-headline">
            The camera says<br />what you’ve <em>become.</em>
          </h1>
          <p className="films-hero-dek">
            Documentary work from inside programs, founder stories, and short
            vertical pieces. The throughline: people film themselves, on their own
            terms, with someone listening the whole time.
          </p>
        </div>
      </section>

      {/* ——— FEATURED ——— */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="content-narrow films-reveal">
          <p className="small-caps">Featured</p>
          <div className="divider-short" />
          <LiteYouTube id={featured.id} title={featured.title} ratio="56.25%" />
          <h2 className="films-featured-title">{featured.title}</h2>
          <p className="films-featured-blurb">{featured.blurb}</p>
        </div>
      </section>

      {/* ——— VERTICAL ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide films-reveal">
          <p className="small-caps">Vertical work</p>
          <div className="divider-short" />
          {verticals.length > 0 ? (
            <div className="vertical-grid">
              {verticals.map(v => (
                <figure key={v.id} className="vertical-card">
                  <LiteYouTube id={v.id} title={v.title} ratio="177.78%" />
                  <figcaption>
                    <span className="vertical-card-title">{v.title}</span>
                    {v.blurb && <span className="vertical-card-blurb">{v.blurb}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="vertical-empty">
              <p>
                New vertical pieces land on YouTube first. The gallery fills in as
                they’re published.
              </p>
              <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="cta-link">
                Watch on YouTube →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section-pad">
        <div className="content-narrow films-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Make one</p>
          <h2 className="films-cta-headline">Want a film that says it?</h2>
          <p style={{ color: 'var(--ash)', maxWidth: '34rem', margin: '0 auto 2rem' }}>
            The Founder Story starts with a conversation and a camera at your door.
          </p>
          <Link to="/services" className="btn-primary">See how it works</Link>
        </div>
      </section>
    </div>
  )
}
