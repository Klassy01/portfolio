import React, { forwardRef } from 'react';
import '../styles/skills.css';

const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 65 },
      { name: 'JavaScript', level: 75 },
      { name: 'React JS', level: 75 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django', level: 70 },
      { name: 'Flask', level: 75 },
      { name: 'FastAPI', level: 75 },
      { name: 'Bootstrap', level: 70 },
      { name: 'Tailwind', level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 80 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    title: 'App Development',
    skills: [
      { name: 'Flutter', level: 60 },
      { name: 'Dart', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Postman', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="tech-skill">
    <span>{name}</span>
    <div className="tech-bar">
      <div className="tech-progress" style={{ width: `${level}%` }}>
        <span className="tech-label">{level}%</span>
      </div>
    </div>
  </div>
);

const Skills = forwardRef((props, ref) => {
  return (
    <section className="technical-section" id="skills">
      <h2 className="section-title">Technical Proficiency</h2>
      <div className="tech-grid">
        {skillsData.map((group, idx) => (
          <div className="tech-card" key={idx}>
            <h3>{group.title}</h3>
            {group.skills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
