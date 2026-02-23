import '../styles/Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⬡',
    skills: ['React.js', 'Next.js', 'jQuery & AJAX', 'Bootstrap', 'SASS'],
  },
  {
    title: 'Tools & Methods',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'UX/UI Design', 'Scrum', 'Responsive Design'],
  },
]

const levelMap = {
  HTML5: 90, CSS3: 88, JavaScript: 78, TypeScript: 55, SQL: 50,
  'React.js': 72, 'Next.js': 60, 'jQuery & AJAX': 65, Bootstrap: 80, SASS: 75,
  Git: 75, GitHub: 72, 'UX/UI Design': 65, Scrum: 60, 'Responsive Design': 85,
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <p className="section-label">02. skills</p>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />

      <div className="skills-grid">
        {skillCategories.map(cat => (
          <div className="skill-category" key={cat.title}>
            <div className="skill-cat-header">
              <span className="skill-cat-icon">{cat.icon}</span>
              <h3 className="skill-cat-title">{cat.title}</h3>
            </div>

            <div className="skill-list">
              {cat.skills.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-top">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-pct">{levelMap[skill]}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ '--fill': `${levelMap[skill]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tag cloud for extra flair */}
      <div className="skills-tags">
        {Object.keys(levelMap).map(s => (
          <span className="skill-tag" key={s}>{s}</span>
        ))}
      </div>
    </section>
  )
}
