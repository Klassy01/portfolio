import React, { forwardRef } from 'react';
import {
  FaLaptopCode,
  FaCogs,
  FaTools,
  FaDatabase,
  FaMobileAlt,
  FaWrench,
} from 'react-icons/fa';

const skillsData = [
  {
    title: 'Frontend',
    icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'React JS', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: <FaCogs className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 60 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FaTools className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'Django', level: 70 },
      { name: 'Flask', level: 75 },
      { name: 'FastAPI', level: 65 },
      { name: 'Bootstrap', level: 70 },
      { name: 'Tailwind', level: 70 },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 80 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'Flutter', level: 60 },
      { name: 'Dart', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: <FaWrench className="text-2xl text-cyan-400" />,
    skills: [
      { name: 'Postman', level: 70 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-200 mb-1">
      <span>{name}</span>
      <span className="text-cyan-300 font-semibold">{level}%</span>
    </div>
    <div className="w-full h-3 bg-gray-700 rounded-full relative overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-fill"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-6 lg:px-16 text-white"
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
      <style>
        {`
          @keyframes fill {
            0% { width: 0; }
            100% { width: var(--bar-width); }
          }
          .animate-fill {
            animation: fill 1.8s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          My <span className="text-cyan-400">Skillset</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto drop-shadow-sm">
          A visual overview of the tools and technologies I’ve mastered
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((group, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {group.icon}
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>
            </div>
            <div className="space-y-4">
              {group.skills.map((skill, i) => (
                <SkillBar key={i} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
