import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2, Palette, Code, Component, FileCode, Layout, Wind,
  Server, Globe, Database, Zap, Rocket, FileType, Coffee, Terminal,
  Smartphone, TabletSmartphone, HardDrive, Flame, GitBranch, Send,
  BarChart, Container, GitPullRequest, Cloud, Brain, Network,
  LineChart, Eye, ScanEye, MessageSquare, Link, Search, BookOpen,
  Settings, MessageCircle, Camera,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '../utils/constants';
import { staggerContainer, flyInFromDepth } from '../utils/animations';

// Explicit icon map — replaces import * as Icons for performance
const iconMap: Record<string, LucideIcon> = {
  Code2, Palette, Code, Component, FileCode, Layout, Wind,
  Server, Globe, Database, Zap, Rocket, FileType, Coffee, Terminal,
  Smartphone, TabletSmartphone, HardDrive, Flame, GitBranch, Send,
  BarChart, Container, GitPullRequest, Cloud, Brain, Network,
  LineChart, Eye, ScanEye, MessageSquare, Link, Search, BookOpen,
  Settings, MessageCircle, Camera,
};

type SkillCategory = 'frontend' | 'backend' | 'languages' | 'databases' | 'tools' | 'devops' | 'ai' | 'app';

const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  languages: 'Languages',
  app: 'App Dev',
  databases: 'Databases',
  tools: 'Tools',
  devops: 'DevOps',
  ai: 'AI/ML',
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories: SkillCategory[] = ['frontend', 'backend', 'languages', 'app', 'databases', 'tools', 'devops', 'ai'];
  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding">
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
            <span className="text-term-green">{'>'} </span>SKILLS.map()
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Technologies I work with
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`font-mono text-xs px-4 py-2 rounded-md border transition-all duration-300 ${activeTab === category
                ? 'border-term-green/60 text-term-green bg-term-green/10 shadow-[0_0_15px_rgba(61,220,132,0.15)]'
                : 'border-glass-border text-text-secondary hover:border-glass-border-hover hover:text-text-primary'
                }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon ? iconMap[skill.icon] : null;
            const proficiency = skill.level || 75;

            return (
              <motion.div
                key={`${activeTab}-${index}`}
                className="skill-card glass-panel p-4 text-center group cursor-pointer"
                variants={flyInFromDepth}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 3,
                  rotateX: -3,
                }}
                whileTap={{ scale: 0.97 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex flex-col items-center gap-2.5">
                  {Icon && (
                    <motion.div
                      className="skill-icon p-3 rounded-lg bg-gradient-to-br from-cyan-bright/15 to-cyan-mid/10 transition-all duration-500"
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={28} className="text-cyan-bright group-hover:text-mint transition-colors duration-300" />
                    </motion.div>
                  )}
                  <span className="text-text-primary font-medium text-sm group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>

                  {/* Proficiency bar */}
                  <div className="proficiency-bar w-full">
                    <motion.div
                      className="proficiency-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${proficiency}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
