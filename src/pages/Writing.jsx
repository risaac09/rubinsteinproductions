import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import essays, { getEssay } from '../data/essays.js'
import './Writing.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Writing() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'Writing',
    description: 'Short essays on evaluation practice, the parts of the work that don’t make it into the report.',
    path: '/writing',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }
    const items = document.querySelectorAll('.essay-card')
    items.forEach(el => {
      markReady(el)
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Rubinstein Productions — Writing',
        url: 'https://rubinsteinproductions.com/writing',
        author: { '@id': 'https://rubinsteinproductions.com/#isaac' },
        blogPost: essays.map(e => ({
          '@type': 'BlogPosting',
          headline: e.title,
          datePublished: e.dateISO,
          url: `https://rubinsteinproductions.com/writing/${e.slug}`,
          description: e.dek,
        })),
      }} />

      <section className="writing-hero section-pad">
        <div className="content-narrow">
          <p className="small-caps">Writing</p>
          <div className="divider-short" />
          <h1 className="writing-hero-headline">
            Working notes on <em>evaluation practice.</em>
          </h1>
          <p className="writing-hero-dek">
            Short essays on the parts of the work that don’t make it into the
            report. Updated as the work prompts them.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <ol className="essay-list" reversed>
            {essays.map(e => (
              <li key={e.slug} className="essay-card scroll-reveal">
                <Link to={`/writing/${e.slug}`} className="essay-card-link">
                  <span className="essay-card-meta">
                    {e.date} <span className="essay-card-dot">·</span> {e.readtime}
                  </span>
                  <h2 className="essay-card-title">{e.title}</h2>
                  <p className="essay-card-dek">{e.dek}</p>
                  <span className="essay-card-cue">Read →</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

export function Essay() {
  const { slug } = useParams()
  const essay = getEssay(slug)
  const containerRef = useRef(null)

  usePageMeta({
    title: essay ? essay.title.replace(/[’]/g, "'") : 'Writing',
    description: essay ? essay.dek : 'Essay not found.',
    path: essay ? `/writing/${essay.slug}` : '/writing',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }
    const el = document.querySelector('.essay-body')
    if (el) {
      markReady(el)
      gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
    }
  }, { scope: containerRef })

  if (!essay) return <Navigate to="/writing" replace />

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: essay.title,
        datePublished: essay.dateISO,
        url: `https://rubinsteinproductions.com/writing/${essay.slug}`,
        description: essay.dek,
        author: { '@id': 'https://rubinsteinproductions.com/#isaac' },
        publisher: { '@type': 'Organization', name: 'Rubinstein Productions' },
      }} />

      <article className="essay-wrap section-pad">
        <div className="content-narrow">
          <p className="small-caps">
            <Link to="/writing" className="essay-back">Writing</Link>
          </p>
          <div className="divider-short" />
          <h1 className="essay-title">{essay.title}</h1>
          <p className="essay-dek">{essay.dek}</p>
          <p className="essay-meta">
            {essay.date} <span className="essay-card-dot">·</span> {essay.readtime}
          </p>

          <div className="essay-body scroll-reveal">
            {essay.body.map((b, i) => {
              if (b.t === 'h') return <h2 key={i} className="essay-h">{b.c}</h2>
              if (b.t === 'q') return <blockquote key={i} className="essay-quote">{b.c}</blockquote>
              return <p key={i}>{b.c}</p>
            })}
          </div>

          <nav className="essay-foot">
            {essays.filter(e => e.slug !== essay.slug).map(e => (
              <Link key={e.slug} to={`/writing/${e.slug}`} className="essay-foot-link">
                {e.title} →
              </Link>
            ))}
            <Link to="/evaluation" className="essay-foot-link">The evaluation practice →</Link>
          </nav>
        </div>
      </article>
    </div>
  )
}
