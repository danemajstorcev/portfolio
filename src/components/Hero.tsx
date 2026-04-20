import { useEffect, useState } from "react";
import "../styles/Hero.css";

const roles = [
  "Front-End Developer",
  "React Enthusiast",
  "UI/UX Minded",
  "Next.js Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--br" />

      <div className="hero-content">
        <p className="hero-greeting fade-up" style={{ animationDelay: "0.1s" }}>
          &gt; Hello, world! I'm
        </p>

        <h1 className="hero-name fade-up" style={{ animationDelay: "0.25s" }}>
          Dane
          <br />
          <span className="hero-name-accent">Majstorchev</span>
        </h1>

        <div className="hero-role fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="hero-role-prefix">{"// "}</span>
          <span className="hero-role-text">{displayed}</span>
          <span className="hero-cursor">|</span>
        </div>

        <p className="hero-bio fade-up" style={{ animationDelay: "0.55s" }}>
          Passionate about smooth web experiences. Turning cool ideas into
          reality with React.js &amp; Next.js. Eager to learn, collaborate, and
          build something awesome.
        </p>

        <div
          className="hero-actions fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </a>
          <a
            href="https://github.com/danemajstorcev"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up" style={{ animationDelay: "0.5s" }}>
        <div className="hero-code-block">
          <div className="code-header">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="code-filename">dane.config.js</span>
          </div>
          <pre className="code-body">
            <code>
              <span className="kw">const</span>{" "}
              <span className="fn">developer</span> = {"{"}
              {"\n"}
              {"  "}
              <span className="prop">name</span>:{" "}
              <span className="str">"Dane Majstorchev"</span>,{"\n"}
              {"  "}
              <span className="prop">role</span>:{" "}
              <span className="str">"Front-End Dev"</span>,{"\n"}
              {"  "}
            
              {"  "}
              <span className="prop">stack</span>: [{"\n"}
              {"    "}
              <span className="str">"React"</span>,{" "}
              <span className="str">"Next.js"</span>,{"\n"}
              {"    "}
              <span className="str">"TypeScript"</span>,{" "}
              <span className="str">"SASS"</span>
              {"\n"}
              {"  "}],{"\n"}
              {"  "}
              <span className="prop">available</span>:{" "}
              <span className="bool">true</span>,{"\n"}
              {"}"};
            </code>
          </pre>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-num">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">9+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
