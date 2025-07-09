import React from 'react';

const NavBar = () => (
  <nav className="nav" role="navigation" aria-label="Main navigation">
    <div className="nav-container">
      <a href="#top" className="nav-link">Axel Olafsson</a>
      <div className="nav-links">
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </div>
  </nav>
);

export default NavBar; 