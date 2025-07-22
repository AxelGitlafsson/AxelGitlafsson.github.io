import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackToPortfolio from '../components/BackToPortfolio';
import '../App.css';

const HotHandDissertation = () => (
  <>
    <a href="#project-content" className="skip-link">Skip to project content</a>
    <NavBar />
    <header className="project-header" role="banner">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h1>Investigating the Hot Hand Phenomenon in NBA Basketball</h1>
            <p className="subtitle">A data-driven analysis of streak shooting in professional basketball using modern machine learning techniques.</p>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="project-content">
        <img src="/images/onfire.png" 
             alt="Basketball player shooting - Hot Hand Dissertation" 
             style={{ width: '100%', maxWidth: 600, height: 'auto', objectFit: 'cover', borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.2)', marginBottom: '2rem' }}
             loading="lazy"
        />
        <div className="tech-stack">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Statistics</span>
          <span className="tech-tag">Data Visualization</span>
          <span className="tech-tag">Sports Analytics</span>
          <span className="tech-tag">Machine Learning</span>
        </div>
        <h2>Abstract</h2>
        <p>The Hot Hand phenomenon is ingrained in the sport of basketball, yet for decades has been labeled a fallacy by statisticians. However, research within the last decade has suggested this label was based on flawed analyses. This study addresses the limitations of previous studies by analyzing the hot hand as a feature in a shot prediction classification task using logistic regression models. We further expand on the literature by employing Random Forest and XGBoost models, achieving moderately higher accuracies compared to other shot prediction models in live games (64%). Few studies have investigated the hot hand effect within the annual NBA 3-point contest, a unique environment ideal for analyzing streaky shooting. Our 3-point contest shooting prediction models had lower accuracy scores (53-59%), likely due to a smaller sample size and less descriptive data. Analyses were conducted using datasets from the NBA 3-point contest (semi-controlled environment) and live games (naturalistic environment) for a more nuanced understanding of the effect. We find significant evidence of a hot hand effect after a single made shot across both datasets (+19.4% in the 3-point contest and +4.2% in live games), with mixed results for longer streaks showing diminishing benefits.</p>
        <h2>Methods</h2>
        <ul>
          <li>Shot prediction classification using logistic regression, Random Forest, and XGBoost</li>
          <li>Analysis of both NBA live game data and NBA 3-point contest data</li>
          <li>Comparison of model accuracy and hot hand effect size across environments</li>
        </ul>
        <h2>Key Findings</h2>
        <ul>
          <li>Significant evidence of a hot hand effect after a single made shot: +19.4% in the 3-point contest, +4.2% in live games</li>
          <li>Longer streaks show diminishing benefits and mixed results</li>
          <li>Machine learning models achieved up to 64% accuracy in live games and 53-59% in the 3-point contest</li>
        </ul>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>If you are interested in reading the full dissertation, please <a href="mailto:axelolafsson.work@gmail.com">contact me</a> :).</p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default HotHandDissertation; 