import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Personal Tutor',
      description:
        'A scalable, adaptive learning system that personalizes learning based on student performance. Integrated with AI models and analytics tools to recommend content, assist in real-time, and track progress.',
      highlights: [
        'Intel® Distribution of OpenVINO™ Toolkit for optimized inference',
        'Used Intel® DevCloud and AI Analytics Toolkit for testing',
        'Secure authentication and real-time tracking',
      ],
      github: 'https://github.com/Klassy01/Karunya_Project-X/tree/frontend',
    },
    {
      title: 'Scaling Trust: AI-Powered Detection of Online Harms',
      description:
        'An AI-driven solution that identifies and mitigates online harms like misinformation and cyberbullying. Leveraging machine learning algorithms to assess content and detect harmful patterns across various platforms.',
      highlights: [
        'Natural Language Processing (NLP) for content analysis',
        'Real-time monitoring and harm detection',
        'AI-powered decision-making to reduce online toxicity',
      ],
      github: 'https://github.com/Klassy01/Solution',
    },
    {
      title: 'IoTrix',
      description:
        'A comprehensive IoT device monitoring and management platform that provides real-time data visualization, remote control capabilities, and intelligent analytics for connected devices.',
      highlights: [
        'Real-time IoT device monitoring and control',
        'Interactive data visualization dashboards',
        'Secure device authentication and communication',
        'Intelligent analytics and alerting system',
      ],
      github: 'https://github.com/Klassy01/IoTrix',
      liveDemo: 'https://iotrix.onrender.com/',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
        backgroundBlendMode: 'screen',
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-16">Latest Projects</h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <article
            key={index}
            className="
              rounded-2xl 
              border border-white/30 
              bg-white/10 
              backdrop-blur-md 
              shadow-md 
              transition-transform duration-300 
              p-6 flex flex-col justify-between
              hover:scale-105
              hover:border-cyan-400 
              hover:bg-white/20
              hover:shadow-[0_0_20px_0_rgba(0,255,255,0.6)]
            "
          >
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.6)] transition-all duration-300 font-semibold"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.423 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.027 2.748-1.027.547 1.377.202 2.394.1 2.647.64.7 1.029 1.596 1.029 2.688 0 3.848-2.337 4.695-4.566 4.943.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              )}
              
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.6)] transition-all duration-300 font-semibold"
                  aria-label={`View ${project.title} live demo`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
