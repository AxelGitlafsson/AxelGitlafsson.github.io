import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <section id="projects" className="container" aria-labelledby="projects-heading">
    <h2 id="projects-heading">My Projects</h2>
    <div className="projects">
      {/* Project 1 */}
      <Link to="/projects/sudoku" className="project-card">
        <div className="project-image">
          <img src="/images/sudoku.jpg" alt="Sudoku puzzle book with pencil" />
        </div>
        <div className="project-content">
          <h3 className="project-title">Sudoku Solving Algorithm</h3>
          <p>An efficient Sudoku solver using depth-first search with backtracking and constraint propagation. Solves even difficult puzzles in milliseconds by leveraging sudoku-specific heuristics to prune the search space.</p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Algorithms</span>
            <span className="tech-tag">Constraint Satisfaction</span>
            <span className="tech-tag">DFS</span>
          </div>
        </div>
      </Link>
      {/* Project 2 */}
      <a href="projects/project2.html" className="project-card">
        <div className="project-image">
          <img src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=1200&h=600&fit=crop" alt="AI Task Manager interface showing task prioritization and AI suggestions" />
        </div>
        <div className="project-content">
          <h3 className="project-title">AI Task Manager</h3>
          <p>An intelligent task management system that uses machine learning to optimize workflow, prioritize tasks, and provide personalized productivity insights.</p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">TensorFlow</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">PostgreSQL</span>
          </div>
        </div>
      </a>
      {/* Project 3 */}
      <a href="projects/project3.html" className="project-card">
        <div className="project-image">
          <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop" alt="Cloud Storage Solution dashboard showing file management and storage analytics" />
        </div>
        <div className="project-content">
          <h3 className="project-title">Cloud Storage Solution</h3>
          <p>A secure and scalable cloud storage platform with end-to-end encryption, automated backups, and seamless file sharing for personal and business use.</p>
          <div className="project-tech">
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Docker</span>
          </div>
        </div>
      </a>
    </div>
  </section>
);

export default Projects; 