import React from 'react';

const Contact = () => (
  <section id="contact" className="contact" aria-labelledby="contact-heading">
    <div className="container">
      <h2 id="contact-heading">Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-item">
              {/* Email Icon */}
              <svg className="contact-icon" viewBox="0 0 24 24" fill="#0077cc">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:axelolafsson.work@gmail.com">axelolafsson.work@gmail.com</a>
            </div>
            <div className="contact-item">
              {/* LinkedIn Icon */}
              <svg className="contact-icon" viewBox="0 0 24 24" fill="#0077cc">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <a href="https://linkedin.com/in/axel-u-olafsson/" target="_blank" rel="noopener noreferrer">Axel Olafsson</a>
            </div>
            <div className="contact-item">
              {/* GitHub Icon */}
              <svg className="contact-icon" viewBox="0 0 24 24" fill="#0077cc">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a href="https://github.com/axelgitlafsson" target="_blank" rel="noopener noreferrer">@axelgitlafsson</a>
            </div>
          </div>
        </div>
        <div className="resume-download">
          <a href="/assets/CV.pdf" className="download-button" download>
            {/* Download Icon */}
            <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 