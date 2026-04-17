import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="footer-bracket">&lt;</span>DM
              <span className="footer-bracket">/&gt;</span>
            </span>
            <p>Building the web, one component at a time.</p>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              {["About", "Skills", "Projects"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, l.toLowerCase())}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/danemajstorcev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dane-majstorchev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Dane Majstorchev. Designed &amp; built with React.
          </p>
          <p className="footer-heart">
            Made with <span>♥</span> in Macedonia
          </p>
        </div>
      </div>
    </footer>
  );
}
