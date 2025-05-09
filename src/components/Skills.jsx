import React, { forwardRef } from 'react';
import { FaLaptopCode, FaCogs, FaTools, FaDatabase, FaMobileAlt, FaWrench } from 'react-icons/fa';

const skillsData = [
  {
    title: 'Frontend',
    icon: <FaLaptopCode className="text-3xl" />,
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
    icon: <FaCogs className="text-3xl" />,
    skills: [
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 60 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FaTools className="text-3xl" />,
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
    icon: <FaDatabase className="text-3xl" />,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 80 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt className="text-3xl" />,
    skills: [
      { name: 'Flutter', level: 60 },
      { name: 'Dart', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: <FaWrench className="text-3xl" />,
    skills: [
      { name: 'Postman', level: 70 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="skill-bar mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-xs font-semibold text-cyan-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
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

      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Technical <span className="text-cyan-400">Proficiency</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with and my proficiency level in each
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-700 skill-box"
            >
              <div className="flex items-center mb-6">
                <span className="mr-4">{group.icon}</span>
                <h3 className="text-2xl font-semibold text-white flex items-center">
                  {group.title}
                  <span className="ml-2 text-cyan-400">{group.skills.length} Skills</span>
                </h3>
              </div>
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
