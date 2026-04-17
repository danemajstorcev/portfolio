import "../styles/About.css";

interface Fact {
  label: string;
  value: string;
}

const facts: Fact[] = [
  { label: "Location", value: "Macedonia 🇲🇰" },
  { label: "Focus", value: "Front-End Dev" },
  { label: "Stack", value: "React · Next.js" },
  { label: "Status", value: "🟢 Open to work" },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid">
        <div className="about-text">
          <p className="section-label">01. about</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />

          <div className="about-bio">
            <p>
              Hey! I'm <strong>Dane Majstorchev</strong>, a Front-End
              Developer with a passion for crafting smooth, performant web
              experiences that users actually enjoy.
            </p>
            <p>
              I'm skilled in <span className="highlight">HTML</span>,{" "}
              <span className="highlight">CSS</span>, and{" "}
              <span className="highlight">JavaScript</span>, and I dive into{" "}
              <span className="highlight">React.js</span> and{" "}
              <span className="highlight">Next.js</span> to bring ideas to life.
              I'm always eager to learn, grow, and collaborate with teams who
              care about quality.
            </p>
            <p>
              Whether it's a sleek landing page or a complex web app, I enjoy
              turning challenges into opportunities. Let's connect and build
              something awesome together!
            </p>
          </div>

          <div className="about-links">
            <a
              href="https://github.com/danemajstorcev"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              <span className="about-link-icon">⟡</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dane-majstorchev/"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              <span className="about-link-icon">⟡</span> LinkedIn
            </a>
          </div>
        </div>

        <div className="about-card-col">
          <div className="about-avatar">
            <div className="avatar-placeholder">
              <span>DM</span>
              <div className="avatar-ring" />
              <div className="avatar-ring avatar-ring--2" />
            </div>
          </div>

          <div className="about-facts">
            {facts.map((f) => (
              <div className="about-fact" key={f.label}>
                <span className="fact-label">{f.label}</span>
                <span className="fact-sep">//</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
