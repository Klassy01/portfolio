import React, { useState, forwardRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const allIcons = { ...FaIcons, ...SiIcons };

const iconMap = {
  HTML: 'FaHtml5',
  CSS: 'FaCss3Alt',
  JavaScript: 'FaJsSquare',
  'React JS': 'FaReact',
  TypeScript: 'SiTypescript',
  Python: 'FaPython',
  PHP: 'FaPhp',
  Java: 'FaJava',
  C: 'FaCode',
  Django: 'FaPython',
  Flask: 'SiFlask',
  FastAPI: 'SiFastapi',
  Bootstrap: 'FaBootstrap',
  Tailwind: 'SiTailwindcss',
  MySQL: 'SiMysql',
  MongoDB: 'SiMongodb',
  SQLite: 'SiSqlite',
  PostgreSQL: 'SiPostgresql',
  Flutter: 'SiFlutter',
  Dart: 'SiDart',
  Postman: 'SiPostman',
  'VS Code': 'SiVisualstudiocode',
  Database: 'FaDatabase',
  Git: 'FaGitAlt',
  GitHub: 'FaGithub',
  Docker: 'FaDocker',
  NestJS: 'SiNestjs',
  NodeJS: 'FaNodeJs',
  Express: 'SiExpress',
  npm: 'FaNpm',
};

const skillCategories = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React JS', 'TypeScript', 'Bootstrap', 'Tailwind'],
  Backend: ['NestJS', 'NodeJS', 'Express', 'npm', 'Django', 'Flask', 'FastAPI', 'Java', 'C', 'Python', 'PHP'],
  Languages: ['Python', 'PHP', 'Java', 'C'],
  'App Development': ['Flutter', 'Dart'],
  Databases: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Database'],
  Tools: ['Postman', 'VS Code'],
  DevOps: ['Git', 'GitHub', 'Docker'],
};

const Skills = forwardRef((props, ref) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const categories = Object.keys(skillCategories);
  const selectedSkills = skillCategories[selectedCategory] || [];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Tech Skills</h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'bg-cyan-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-cyan-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-10">
          <div key={selectedCategory} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6">{selectedCategory}</h3>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {selectedSkills.map((skill) => {
                const IconComponent =
                  allIcons[iconMap[skill] || iconMap[skill.replace(/\s+/g, '')]] || FaIcons.FaDatabase;

                return (
                  <div
                    key={skill}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 transition-all duration-300 transform hover:scale-105 ${
                      hoveredSkill === skill ? 'ring-2 ring-cyan-400' : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <IconComponent className="text-4xl sm:text-5xl mb-2 text-white" />
                    <p className="text-xs sm:text-sm font-medium text-center">{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
