import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">
        <svg width="28" height="28" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="120" height="120" rx="12" fill="var(--marrow)" />
          <rect x="48" y="24" width="2.5" height="76" fill="var(--ash)" opacity="0.5" />
          <text x="14" y="82" fontFamily="'EB Garamond', Georgia, serif" fontSize="72" fill="var(--bone)">R</text>
          <text x="50" y="82" fontFamily="'EB Garamond', Georgia, serif" fontSize="72" fill="var(--blood)">P</text>
        </svg>
        <span className="nav-logo-text">
          <span className="nav-logo-name">Rubinstein</span>
          <span className="nav-logo-sub">Productions</span>
        </span>
      </NavLink>

      <button
        className={`nav-toggle${open ? ' nav-toggle--open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
