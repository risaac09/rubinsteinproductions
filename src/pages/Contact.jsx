import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import './Contact.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Contact() {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('idle')

  usePageMeta({
    title: 'Contact',
    description: 'Start a conversation with Rubinstein Productions. No pitch, no onboarding form. Response within 48 hours.',
    path: '/contact',
  }) // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', context: '', tier: '' })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

    // Hero
    const heroEls = document.querySelectorAll('.contact-hero .scroll-reveal')
    heroEls.forEach((el, i) => {
      markReady(el)
      gsap.fromTo(
        el,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    })

    // Form and sidebar slide in from opposite sides
    const formEl = document.querySelector('.contact-form-col')
    const sidebarEl = document.querySelector('.contact-sidebar')

    if (formEl && sidebarEl) {
      markReady([formEl, sidebarEl])
      gsap.fromTo(
        formEl,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: { trigger: formEl, start: 'top 78%' },
        }
      )
      gsap.fromTo(
        sidebarEl,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: { trigger: sidebarEl, start: 'top 78%' },
        }
      )
    }

  }, { scope: containerRef })

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    try {
      // TODO: Replace YOUR_FORM_ID with actual Formspree form ID
      // Sign up at formspree.io → create a form → paste the ID here
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>

      {/* ——— HERO ——— */}
      <section
        className="contact-hero section-pad"
        style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}
      >
        <div className="content-narrow">
          <p className="small-caps scroll-reveal">Contact</p>
          <h1 className="contact-headline scroll-reveal">Start a conversation.</h1>
          <p className="contact-sub scroll-reveal">
            No pitch. No onboarding form. Just a conversation to figure out
            whether the work makes sense.
          </p>
        </div>
      </section>

      {/* ——— FORM + SIDEBAR ——— */}
      <section className="contact-body section-pad bg-bone">
        <div className="contact-grid content-wide">

          {status === 'success' ? (
            <div className="contact-success">
              <p className="small-caps">Received</p>
              <h2>We'll talk soon.</h2>
              <p>Expect a response within 48 hours.</p>
            </div>
          ) : (
            <form className="contact-form-col scroll-reveal" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="context">What's the context?</label>
                <textarea
                  id="context"
                  name="context"
                  rows={5}
                  value={form.context}
                  onChange={handleChange}
                  placeholder="Where are you, what are you working on, what feels stuck?"
                />
              </div>

              <div className="form-field">
                <label htmlFor="tier">Which tier interests you? <span>(optional)</span></label>
                <select id="tier" name="tier" value={form.tier} onChange={handleChange}>
                  <option value="">Not sure yet</option>
                  <option value="mirror">The Mirror — Single session</option>
                  <option value="map">The Map — Say Why package</option>
                  <option value="territory">The Territory — Ongoing</option>
                </select>
              </div>

              {status === 'error' && (
                <p className="form-error">Something went wrong. Try emailing directly: risaac09@gmail.com</p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}

          <aside className="contact-sidebar scroll-reveal">
            <div className="sidebar-block">
              <p className="small-caps">Email</p>
              <a href="mailto:risaac09@gmail.com" className="sidebar-link">
                risaac09@gmail.com
              </a>
            </div>

            <div className="sidebar-block">
              <p className="small-caps">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/isaacrubinstein/"
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-link"
              >
                isaacrubinstein
              </a>
            </div>

            <div className="sidebar-block">
              <p className="small-caps">Response time</p>
              <p>Within 48 hours, usually sooner.</p>
            </div>

            <div className="sidebar-block">
              <p className="small-caps">What happens next</p>
              <p>
                A short call to hear where you are and whether the work is a fit.
                No pressure. No pitch. Just a conversation.
              </p>
            </div>
          </aside>

        </div>
      </section>

    </div>
  )
}
