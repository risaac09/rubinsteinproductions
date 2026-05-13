import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import MediaFrame from '../components/media/MediaFrame.jsx'
import { media } from '../data/media.js'
import './Contact.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Contact() {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', context: '', tier: '' })

  usePageMeta({
    title: 'Contact',
    description: 'Start a conversation with Rubinstein Productions. No pitch, no onboarding form. Response within 48 hours.',
    path: '/contact',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }

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
      const res = await fetch('https://formspree.io/f/mojpzory', {
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
          <div className="contact-hero-slate">
            <span className="frame-index frame-index--amber">CONTACT · 04</span>
            <span className="rule-thin" aria-hidden="true" />
            <span className="frame-index">Response within 48 hours</span>
          </div>
          <h1 className="contact-headline">Start a conversation.</h1>
          <p className="contact-sub">
            No pitch. No onboarding form. Just a conversation to figure out
            whether the work makes sense.
          </p>
        </div>
      </section>

      {/* ——— FORM + SIDEBAR ——— */}
      <section className="contact-body section-pad bg-bone">
        <div className="contact-grid content-wide">

          {status === 'success' ? (
            <div className="contact-success scroll-reveal">
              <p className="frame-index frame-index--amber">Received</p>
              <h2>We'll talk soon.</h2>
              <p className="contact-success-body">
                Expect a response within 48 hours, usually sooner. If something
                urgent comes up in the meantime, you can also email{' '}
                <a href="mailto:isaac@rubinsteinproductions.com">
                  isaac@rubinsteinproductions.com
                </a>{' '}
                directly.
              </p>
              <p className="contact-success-next">
                <span className="frame-index">What happens next</span>
                A short call to hear where you are and whether the work is a fit.
                No pressure. No pitch. Just a conversation.
              </p>
            </div>
          ) : (
            <form className="contact-form-col scroll-reveal" onSubmit={handleSubmit} noValidate>
              <p className="frame-index contact-form-label">Send a note · I — IV</p>

              <div className="form-field">
                <label htmlFor="name"><span className="form-field-num">I</span> Name</label>
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
                <label htmlFor="email"><span className="form-field-num">II</span> Email</label>
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
                <label htmlFor="context"><span className="form-field-num">III</span> What's the context?</label>
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
                <label htmlFor="tier">
                  <span className="form-field-num">IV</span> What are you looking for? <span>(optional)</span>
                </label>
                <select id="tier" name="tier" value={form.tier} onChange={handleChange}>
                  <option value="">Not sure yet</option>
                  <option value="founder-story">Founder Story ($1,500–$2,500)</option>
                  <option value="program-engagement">Program Engagement ($3K–$8K)</option>
                  <option value="conversation">Just want to talk</option>
                </select>
              </div>

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong on send. Try emailing directly:{' '}
                  <a href="mailto:isaac@rubinsteinproductions.com">
                    isaac@rubinsteinproductions.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send'}
              </button>
            </form>
          )}

          <aside className="contact-sidebar scroll-reveal">
            <div className="contact-room">
              <MediaFrame entry={media.contactRoom} aspect="3-2" showMeta={false} />
              <p className="margin-note contact-room-note">
                The room these conversations usually start in.
                A chair by a window, low light, a notebook waiting.
              </p>
            </div>

            <div className="sidebar-block">
              <p className="frame-index">Email</p>
              <a href="mailto:isaac@rubinsteinproductions.com" className="sidebar-link">
                isaac@rubinsteinproductions.com
              </a>
            </div>

            <div className="sidebar-block">
              <p className="frame-index">LinkedIn</p>
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
              <p className="frame-index">Response time</p>
              <p>Within 48 hours. Usually sooner.</p>
            </div>

            <div className="sidebar-block">
              <p className="frame-index">What happens next</p>
              <p>
                A short call to hear where you are and whether the work is a fit.
                If it is, we figure out scope and timing. If it isn't, I'll say
                so — sometimes I'll point you to someone better matched.
              </p>
            </div>
          </aside>

        </div>
      </section>

    </div>
  )
}
