import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const links = ['About', 'Skills', 'Projects']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="/" className="nav-logo">
        <span className="nav-logo-bracket">&lt;</span>
        DM
        <span className="nav-logo-bracket">/&gt;</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}>
              <span className="nav-num">0{links.indexOf(link) + 1}.</span> {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/danemajstorcev"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            GitHub
          </a>
        </li>
      </ul>

      <button
        className={`nav-burger ${menuOpen ? 'nav-burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
