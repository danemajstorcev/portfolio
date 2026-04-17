import decisionImg from "../img/decisionSimulator.png";
import lifeTrackerImg from "../img/liveFreightTracker.png"
import portfolioImg from "../img/portfolioAnalyzer.png"
import freelancerFlowImg from "../img/freelanceFlow.png"
import dispatchJobsImg from "../img/dispatchJobs.png"
import CinemalixImg from "../img/cinemalix.png"
import corevantaLogisticsImg from "../img/corevantaLogo.png"
import smartPhoneStoreImg from "../img/smartphoneStore.png"
import "../styles/Projects.css";

interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  image: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Decision Simulator",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/decision-simulator",
    live: "https://decision-simulator-nine.vercel.app/",
    featured: true,
    image: decisionImg,
  },
  {
    num: "02",
    title: "Freight Pulse Tracker",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/live-freight-live-checker",
    live: "https://live-freight-live-checker.vercel.app/",
    featured: true,
    image: lifeTrackerImg,
  },
  {
    num: "03",
    title: "Portfolio Analyzer",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/portfolio-analyzer",
    live: "https://portfolio-analyzer-pink.vercel.app/",
    featured: true,
    image: portfolioImg,
  },
  {
    num: "04",
    title: "Freelance Flow Manager",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/freelancer-workflow",
    live: "https://freelancer-workflow.vercel.app/",
    featured: true,
    image: freelancerFlowImg,
  },  {
    num: "05",
    title: "Dispatch Jobs",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/dispatch-jobs",
    live: "https://dispatch-jobs.vercel.app/",
    featured: true,
    image: dispatchJobsImg,
  },  {
    num: "06",
    title: "Cinemalix",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/cinemalix",
    live: "https://cinemalix.vercel.app/auth/login",
    featured: true,
    image: CinemalixImg,
  },  {
    num: "07",
    title: "Corevanta Logistics",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/corevantalogistics",
    live: "https://www.corevantalogistics.com/",
    featured: true,
    image: corevantaLogisticsImg,
  },  {
    num: "08",
    title: "Smartphone Store",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/smartphone-shop",
    live: "https://smartphone-shop-phi.vercel.app/",
    featured: true,
    image: smartPhoneStoreImg,
  },  {
    num: "09",
    title: "Decision Simulator",
    desc: "Pure HTML/CSS/JS - zero dependencies, zero libraries. Web Audio API for the sound effects (a crisp click on choices, a 3-note chord progression on endings that changes based on outcome type) and DOM manipulation with a custom typewriter engine and full scene transition system.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/danemajstorcev/decision-simulator",
    live: "https://decision-simulator-nine.vercel.app/",
    featured: true,
    image: decisionImg,
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="section-label">03. projects</p>
      <h2 className="section-title">Things I've Built</h2>
      <div className="section-divider" />

      {/* <p className="projects-note">
        ⟡ Replace placeholder data with your real repos — check GitHub username{" "}
        <a
          href="https://github.com/danemajstorcev"
          target="_blank"
          rel="noreferrer"
        >
          @danemajstorcev
        </a>
      </p> */}

      <div className="projects-grid">
        {projects.map((p) => (
          <article
            className={`project-card ${p.featured ? "project-card--featured" : ""}`}
            key={p.num}
          >
            <div className="project-image-container">
              <img src={p.image} alt={p.title} className="project-image" />
              <div className="project-image-overlay" />
            </div>

            <div className="project-content">
              <div className="project-top">
                <span className="project-num">{p.num}</span>
                <div className="project-icons">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className="project-icon-link"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Demo"
                      className="project-icon-link"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-folder">📁</div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta">
        <a
          href="https://github.com/danemajstorcev"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          View All on GitHub →
        </a>
      </div>
    </section>
  );
}
