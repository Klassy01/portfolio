import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Latest Projects</h2>
      <div className="project-container">

        <div className="project-card">
          <h3>AI-Powered Personal Tutor</h3>
          <div className="project-description">
            <p>
              A scalable, adaptive learning system that personalizes learning based on student performance.
              Integrated with AI models and analytics tools to recommend content, assist in real-time, and track progress.
            </p>
            <ul>
              <li>Intel® Distribution of OpenVINO™ Toolkit for optimized inference</li>
              <li>Used Intel® DevCloud and AI Analytics Toolkit for testing</li>
              <li>Secure authentication and real-time tracking</li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <h3>Scaling Trust: AI-Powered Detection of Online Harms</h3>
          <div className="project-description">
            <p>
              An AI-driven solution that identifies and mitigates online harms like misinformation and cyberbullying.
              Leveraging machine learning algorithms to assess content and detect harmful patterns across various platforms.
            </p>
            <ul>
              <li>Natural Language Processing (NLP) for content analysis</li>
              <li>Real-time monitoring and harm detection</li>
              <li>AI-powered decision-making to reduce online toxicity</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
