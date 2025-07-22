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
      <Link to="/projects/hothand" className="project-card">
        <div className="project-image">
          <img src="/images/onfire.png" alt="Basketball player shooting - Hot Hand Dissertation" />
        </div>
        <div className="project-content">
          <h3 className="project-title">Hot Hand Dissertation</h3>
          <p>Investigates the Hot Hand phenomenon in NBA basketball using logistic regression, Random Forest, and XGBoost models on both live games and 3-point contest data. Finds significant evidence of a hot hand effect after a single made shot, with nuanced results for longer streaks.</p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">Statistics</span>
            <span className="tech-tag">Data Visualization</span>
            <span className="tech-tag">Sports Analytics</span>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

export default Projects; 