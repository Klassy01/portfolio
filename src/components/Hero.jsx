import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/react.svg'; // Replace with your image
import resumePDF from '../assets/David_Resume.pdf';

const roles = ['Frontend Developer', 'AI Student', 'Data Analyst', 'Backend Developer'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'David_Jayaraj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        {/* Left Section: Text Content */}
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight-name">David Jayaraj</span></h1>
          <h2>
            And I'm a <span className="animated-role">{roles[currentRoleIndex]}</span>
          </h2>
          <p>
            Aspiring Frontend Developer, Backend Developer, and AI Engineer with hands-on experience in data visualization, analytics, and machine learning. Proficient in technologies such as SQL and Python. Passionate about transforming raw data into actionable insights and developing intelligent, user-friendly systems across the full stack.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:davidbeniel2006@gmail.com" className="contact-link">
                davidbeniel2006@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/davidjayaraja01"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/davidjayaraja01
              </a>
            </p>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/davidjayaraja01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Klassy01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/david_jayaraj_01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <button onClick={handleDownload} className="btn">
            <FaDownload /> Download CV
          </button>
        </div>

        {/* Right Section: Circular Profile Image */}
        <div className="hero-image">
          <div className="profile-circle">
            <img
              src={profileImage}
              alt="David Jayaraj"
              className="profile-img"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
