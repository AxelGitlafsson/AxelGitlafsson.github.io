import React from 'react';

const Header = () => (
  <header id="top" role="banner">
    <div className="container">
      <div className="header-main">
        <img src="/images/profile.JPG" 
             alt="Axel Olafsson - Data Scientist" 
             className="profile-image"
             width="200" 
             height="250"
             loading="eager" />
        <div className="header-content">
          <h1>Axel Olafsson</h1>
          <p className="subtitle">Data Science & Machine Learning</p>
          <p className="about-me">Hi! Thank you for taking the time to view my website. I'm a computer science master's graduate with a specialization in data science and machine learning. 
            Specializing in python, I am well-versed in machine learning applications, statistical analysis and data visualization techniques. My bachelor's in Psychology equipped me with a strong statistical foundation that I've leveraged in my data science work.
            I'm an avid learner who approaches problems with creative, outside-the-box thinking. Though it might be cliche, deriving real-life actionable insights from data has always been fascinating to me. In my free time you can find me playing basketball or using statistics to vehemently argue with my friends about basketball.</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 