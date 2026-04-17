import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const links = ["About", "Skills", "Projects"];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="/" className="nav-logo">
        <span className="nav-logo-bracket">&lt;</span>
        DM
        <span className="nav-logo-bracket">/&gt;</span>
      </a>

      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNav(e, link)}
            >
              <span className="nav-num">0{links.indexOf(link) + 1}.</span>{" "}
              {link}
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
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      <button
        className={`nav-burger ${menuOpen ? "nav-burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
