import React from 'react';

const Experience = () => (
  <section id="experience" className="experience" aria-labelledby="experience-heading">
    <div className="container">
      <div className="experience-grid">
        {/* Work Experience */}
        <div className="experience-section">
          <h3>Work Experience</h3>
          <div className="work-item">
            <div className="date">November 2024 - March 2025</div>
            <div className="position">Junior Data Scientist</div>
            <div className="company">BlazeSQL</div>
            <p className="description">
              • Conducted comprehensive error analyses of natural language to SQL query pipeline, processing 2,000+ error instances across multiple database types<br />
              • Developed dashboards to track user error trends, reducing manual reporting time by 75%<br />
              • Identified key improvement areas including timestamp handling, reserved keyword management, and database-specific syntax variations<br />
              • Leveraged local LLMs to automate categorization of SQL syntax failures, reducing troubleshooting time by 50%<br />
              • Contributed to reduced query error rates through data-driven insights and regular reporting to engineering stakeholders
            </p>
            <div className="tech-list">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">Seaborn</span>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="experience-section">
          <h3>Education</h3>
          <div className="education-item">
            <div className="date">September 2023 - September 2024</div>
            <div className="degree">MSc Computer Science</div>
            <div className="institution">University of Bath</div>
            <p className="description">
              • Grade: Distinction<br />
              • Relevant Classes: Artificial Intelligence, Reinforcement Learning, Software Engineering, Databases, Entrepreneurship<br />
              • Dissertation: "Investigating the Hot-Hand in NBA Basketball"
            </p>
          </div>
          <div className="education-item">
            <div className="date">September 2020 - September 2023</div>
            <div className="degree">BSc Psychology</div>
            <div className="institution">University of Exeter</div>
            <p className="description">
              • Grade: 2:1<br />
              • Achieved First-Class Honors in Statistics and Research Methods<br />
              • Relevant Classes: Methods and Statistics in Psychology I, II & III, Introduction to Business Statistics<br />
              • Dissertation: "The effect of subliminal priming on judgements of facial attractiveness"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 