import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../utils/constants';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-2">
            <span className="text-term-green">{'>'} </span>WORK_EXPERIENCE
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // My journey through internships and professional development
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-glass-border">
            <motion.div
              className="timeline-glow absolute top-0 left-0 right-0"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6 pl-14 md:pl-20">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
