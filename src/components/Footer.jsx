import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <p className="footer-logo-name">Rubinstein</p>
          <div className="footer-logo-rule" />
          <p className="footer-logo-sub">Productions</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <span className="dot-sep" aria-hidden="true" />
          <Link to="/services">Services</Link>
          <span className="dot-sep" aria-hidden="true" />
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/isaacrubinstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="dot-sep" aria-hidden="true" />
          <a href="https://substack.com/@isaacrubinstein" target="_blank" rel="noopener noreferrer">Substack</a>
          <span className="dot-sep" aria-hidden="true" />
          <a href="https://www.youtube.com/@risaac09" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Rubinstein Productions. All rights reserved.</p>
      </div>
    </footer>
  )
}
