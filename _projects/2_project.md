---
layout: page
title: Sudoku Solving Algorithm
description: DFS with backtracking and various constraint propagation techniques.
img: assets/img/sudoku.jpg
importance: 1
category: fun
giscus_comments: true
---

<h2>Introduction</h2>

<h4>The Problem</h4>
<p>Sudoku is a logic-based number placement puzzle consisting of a 9×9 grid divided into nine 3×3 subgrids. The puzzle begins with some cells pre-filled with numbers. To solve the puzzle, each row, column, and 3×3 subgrid must contain all digits from 1 to 9 without repetition.</p>

<h4>Objective</h4>
<p>The goal was to develop a Python-based Sudoku solver capable of handling puzzles ranging from very easy to hard, with a focus on efficiency and optimization.</p>

<h2>Algorithm Description</h2>
<p>I implemented constraint propagation through a backtracking Depth-First Search (DFS) algorithm. To reduce the branching factor, the algorithm uses the minimum-remaining values (MRV) heuristic by prioritizing sudoku cells with the fewest possible options.</p>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sudoku examples.png" title="Constraint propagation techniques visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Examples of constraint propagation techniques used in the solver
</div>

<h4>Core Algorithm</h4>
<ul>
    <li>Depth-first search with backtracking</li>
    <li>Forward checking to detect invalid states early</li>
</ul>

<h4>Constraint Propagation Techniques</h4>
<ul>
    <li>Arc-consistency algorithm to reduce variable domains before search</li>
    <li>Naked singles (when a cell has only one possible value)</li>
    <li>Hidden singles (when only one cell in a unit can contain a specific value)</li>
    <li>Naked sets (pairs, triples, quads)</li>
</ul>

<h4>Selection Heuristics</h4>
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
    <li><strong>Hard puzzles</strong> in approximately 200-300ms on average</li>
    <li>What previously took <strong>minutes</strong> now completes in <strong>tenths of a second</strong></li>
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

<hr>

<p><strong>References</strong></p>
<ul>
    <li>Hoduku (2008). HoDoKu: Solving Techniques - Singles (Hidden Single, Naked Single, Full House). hodoku.sourceforge.net</li>
    <li>Mastering Sudoku (2024). Phistomefel Ring Explained & How To Solve Sudokus With It. masteringsudoku.com</li>
    <li>SudokuWiki.org (2005). Naked Candidates. sudokuwiki.org</li>
</ul>