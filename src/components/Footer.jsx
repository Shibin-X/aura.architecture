import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer wrap">
      <hr className="rule" />
      <div className="footer-grid">
        <div>
          <div className="footer-mark">AURA</div>
          <p className="footer-tag">Architecture · Interior · Landscape</p>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Studio</span>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Connect</span>
          <a href="https://www.instagram.com/aura.architecture.studio/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@aurastudio.in">hello@aurastudio.in</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} AURA Architecture Studio</p>
    </footer>
  )
}
