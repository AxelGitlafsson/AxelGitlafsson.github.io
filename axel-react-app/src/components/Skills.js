import React from 'react';

const Skills = () => (
  <section id="skills" className="skills" aria-labelledby="skills-heading">
    <div className="container">
      <h2 id="skills-heading">Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">HTML5</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">Next.js</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-tags">
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Django</span>
            <span className="tech-tag">RESTful APIs</span>
            <span className="tech-tag">GraphQL</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Cloud & DevOps</h3>
          <div className="skill-tags">
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Kubernetes</span>
            <span className="tech-tag">CI/CD</span>
            <span className="tech-tag">Git</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-tags">
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">Redis</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 