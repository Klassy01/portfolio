import React from 'react';
import '../styles/about.css';
import { FaFileDownload } from 'react-icons/fa';

const About = () => {
  const handleDownload = () => {
    // Add your download CV functionality here
    const pdfUrl = "/path/to/your/resume.pdf"; // Update this path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'YourName_Resume.pdf'; // Update with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container"> {/* Changed from container to about-container */}
        <div className="about-content">
          <h2 className="section-title">
            <span className="title-highlight">About</span> Me
          </h2>
          
          <div className="about-text">
            <p className="intro-text">
              I'm a <span className="highlight">Full Stack Developer</span> with expertise in both frontend and backend technologies, 
              dedicated to crafting high-performance web applications with exceptional user experiences.
            </p>
            
            <div className="skills-container">
              <div className="skills-column">
                <h3 className="skills-heading">Frontend Expertise</h3>
                <ul className="skills-list">
                  <li>React.js & Next.js</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                  <li>Responsive Design</li>
                  <li>Typescript</li>
                </ul>
              </div>
              
              <div className="skills-column">
                <h3 className="skills-heading">Backend Expertise</h3>
                <ul className="skills-list">
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>RESTful APIs</li>
                  <li>Database Design (SQL/NoSQL)</li>
                  <li>Authentication (JWT, OAuth)</li>
                </ul>
              </div>
            </div>
            
            <p className="closing-text">
              With a strong foundation in both client and server-side development, I bridge the gap between 
              beautiful interfaces and robust backend systems. My approach combines technical excellence with 
              thoughtful user experience design.
            </p>
          </div>
          
          <button onClick={handleDownload} className="cta-button">
            <FaFileDownload className="button-icon" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;