import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../utils/constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-2">
            <span className="text-text-mono-dim">[</span>
            <span className="text-term-green"> 04 </span>
            <span className="text-text-mono-dim">/</span>
            <span> PROJECTS </span>
            <span className="text-text-mono-dim">]</span>
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Showcasing featured AI platforms and software projects
          </p>
        </motion.div>

        {/* Floating Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
