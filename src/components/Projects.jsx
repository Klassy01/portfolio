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
      title: 'Lab Agent',
      description:
        'An AI-integrated digital platform designed to eliminate manual record-keeping in labs. Students and faculty can generate records, automate lab manuals, and access practical videos with ease.',
      highlights: [
        'AI-driven record generation for students and faculty',
        'Automation of lab manuals and documentation',
        'Integrated video viewing for practicals and tutorials',
      ],
      github: 'https://github.com/dharshan-kumarj/LabAgent_Frontend/tree/david-dj',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 100, 0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1), transparent 50%),
          #000000
        `,
        backgroundBlendMode: 'screen',
      }}
    >
      <h2 className="text-4xl font-bold text-center text-white mb-16">Latest Projects</h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-70 rounded-2xl shadow-md border border-gray-700 transform transition duration-300 p-6 flex flex-col justify-between hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_15px_0_rgba(0,255,255,0.5)]"
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

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.6)] transition-all duration-300 font-semibold"
              >
                {/* GitHub SVG Icon */}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
