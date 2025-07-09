import React from 'react';
import { Link } from 'react-router-dom';

const BackToPortfolio = () => (
  <Link to="/" className="back-to-portfolio-btn">
    <span style={{ fontSize: '1.2em', marginRight: '0.5em' }}>←</span>
    Back to Portfolio
  </Link>
);

export default BackToPortfolio; 