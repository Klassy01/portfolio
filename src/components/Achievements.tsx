import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../utils/constants';
import AchievementCard from './AchievementCard';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
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
            <span className="text-term-green">{'>'} </span>ACHIEVEMENTS.log
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Proven track record of innovation and excellence
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
