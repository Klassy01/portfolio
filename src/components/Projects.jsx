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
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white"
      style={{
        background: 'linear-gradient(60deg, #0f0c29)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 18s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <h2 className="text-4xl font-bold text-center text-white mb-16">Latest Projects</h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-70 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
