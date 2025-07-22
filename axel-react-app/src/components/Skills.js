import React from 'react';

const Skills = () => (
  <section id="skills" className="skills" aria-labelledby="skills-heading">
    <div className="container">
      <h2 id="skills-heading">Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Data Science</h3>
          <div className="skill-tags">
            <span className="tech-tag">Statistical Analysis</span>
            <span className="tech-tag">Data Cleaning</span>
            <span className="tech-tag">Hypothesis Testing</span>
            <span className="tech-tag">Experiment Design</span>
            <span className="tech-tag">Machine Learning</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">R</span>
            <span className="tech-tag">SQL</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Data Visualization</h3>
          <div className="skill-tags">
            <span className="tech-tag">Matplotlib</span>
            <span className="tech-tag">Seaborn</span>
            <span className="tech-tag">Plotly</span>
            <span className="tech-tag">Tableau</span>
            <span className="tech-tag">Power BI</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools & Libraries</h3>
          <div className="skill-tags">
            <span className="tech-tag">Pandas</span>
            <span className="tech-tag">NumPy</span>
            <span className="tech-tag">scikit-learn</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">Jupyter</span>
            <span className="tech-tag">Git</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 