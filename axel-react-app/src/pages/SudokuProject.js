import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackToPortfolio from '../components/BackToPortfolio';
import '../App.css';

const SudokuProject = () => (
  <>
    <a href="#project-content" className="skip-link">Skip to project content</a>
    <NavBar />
    <header className="project-header" role="banner">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h1>Sudoku Solving Algorithm</h1>
            <p className="subtitle">This project implements an efficient Sudoku solver using depth-first search with backtracking alongside various constraint propagation techniques. The algorithm successfully solves hard puzzles in milliseconds by using many sudoku-specific heuristics to prune the search space.</p>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </header>
    <main id="project-content" role="main">
      <div className="container">
        <div className="project-content">
          <img src="/images/sudoku.jpg" 
               alt="Sudoku puzzle book with pencil" 
               style={{ width: '100%', maxWidth: 600, height: 'auto', objectFit: 'cover', borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.2)', marginBottom: '2rem' }}
               loading="lazy"
          />
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Algorithms</span>
            <span className="tech-tag">Constraint Satisfaction</span>
            <span className="tech-tag">DFS</span>
          </div>
          <h2>Introduction</h2>
          <h3>The Problem</h3>
          <p>Sudoku is a logic-based number placement puzzle consisting of a 9×9 grid divided into nine 3×3 subgrids. The puzzle begins with some cells pre-filled with numbers. To solve the puzzle, each row, column, and 3×3 subgrid must contain all digits from 1 to 9 without repetition.</p>
          <h3>Objective</h3>
          <p>The goal was to develop a Python-based Sudoku solver capable of handling puzzles ranging from very easy to hard, with a focus on efficiency and optimization.</p>
          <h2>Algorithm Description</h2>
          <p>I implemented constraint propagation through a backtracking Depth-First Search (DFS) algorithm. To reduce the branching factor, the algorithm uses the minimum-remaining values (MRV) heuristic by prioritizing sudoku cells with the fewest possible options.</p>
          <figure style={{ margin: '2rem 0' }}>
            <img src="/images/sudoku examples.png" 
                 alt="Examples of Sudoku solving techniques: Naked Single, Hidden Single, and Naked Triple" 
                 style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                 loading="lazy"
            />
            <figcaption style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
              Examples of constraint propagation techniques used in the solver
            </figcaption>
          </figure>
          <h3>Core Algorithm</h3>
          <ul>
            <li>Depth-first search with backtracking</li>
            <li>Forward checking to detect invalid states early</li>
          </ul>
          <h3>Constraint Propagation Techniques</h3>
          <ul>
            <li>Arc-consistency algorithm to reduce variable domains before search</li>
            <li>Naked singles (when a cell has only one possible value)</li>
            <li>Hidden singles (when only one cell in a unit can contain a specific value)</li>
            <li>Naked sets (pairs, triples, quads)</li>
          </ul>
          <h3>Selection Heuristics</h3>
          <ul>
            <li>Minimum Remaining Values (MRV) to choose which cell to fill next</li>
            <li>Randomized selection among equal candidates to avoid getting stuck</li>
          </ul>
          <h2>Implementation Details</h2>
          <p>The algorithm's strength lies in its extensive use of constraint propagation before and during the search process. By significantly reducing the domain of variables before initiating DFS, the search space becomes much more manageable.</p>
          <p>I was inspired by Deep Blue's chess-specific knowledge and attempted to incorporate as many sudoku-specific constraints as possible. Unfortunately, time constraints prevented implementing more advanced techniques like the Phistomefel Ring, which remains a goal for future work.</p>
          <h2>Results and Performance</h2>
          <p>The algorithm currently solves:</p>
          <ul>
            <li>Hard puzzles in approximately 200-300ms on average</li>
            <li>What previously took minutes now completes in tenths of a second</li>
          </ul>
          <p>The biggest performance improvement came from the arc-consistency implementation of iteratively checking for naked singles, which made solving hard puzzles feasible. The MRV heuristic also decreased solution time by reducing the branching factor of the search tree.</p>
          <h2>Optimizations and Complexity</h2>
          <p>The time complexity of the DFS algorithm is O(b^m), where b is the branching factor and m is the maximum depth. Through various optimizations and heuristics, I was able to:</p>
          <ul>
            <li>Significantly reduce the branching factor using MRV</li>
            <li>Decrease the number of nodes in the search tree with sudoku-specific constraints</li>
            <li>Detect invalid states early with forward checking</li>
          </ul>
          <p>In terms of programming, the code was not fully optimized due to my inexperience. Future improvements could include using NumPy to vectorize array operations, which could potentially reduce execution time further.</p>
          <h2>Reflections and Future Work</h2>
          <p>While my solver doesn't match the ~20ms performance of some professional solvers, the improvement from minutes to hundreds of milliseconds represents significant progress. The experience demonstrated the power of combining general search algorithms with domain-specific knowledge.</p>
          <p>For future enhancements, I plan to:</p>
          <ul>
            <li>Experiment with the "Dancing Links" algorithm for more efficient constraint satisfaction</li>
            <li>Implement additional interesting sudoku-specific techniques like "x-wing" and the Phistomefel Ring</li>
            <li>Optimize code execution with NumPy vectorization</li>
            <li>Explore more advanced search algorithms and heuristics</li>
          </ul>
          <h2>References</h2>
          <ul>
            <li>Hoduku (2008). HoDoKu: Solving Techniques - Singles (Hidden Single, Naked Single, Full House). hodoku.sourceforge.net</li>
            <li>Mastering Sudoku (2024). Phistomefel Ring Explained & How To Solve Sudokus With It. masteringsudoku.com</li>
            <li>SudokuWiki.org (2005). Naked Candidates. sudokuwiki.org</li>
          </ul>
          {/* Project navigation links can be added here if more project pages exist */}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default SudokuProject; 