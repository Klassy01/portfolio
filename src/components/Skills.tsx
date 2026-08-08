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
import TerminalWindowCard from './ui/TerminalWindowCard';

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

const rotations = [-2, 1.5, -1, 2, -1.5, 2.5, -2, 1];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories: SkillCategory[] = ['frontend', 'backend', 'languages', 'app', 'databases', 'tools', 'devops', 'ai'];
  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-2">
            <span className="text-term-green">{'>'} </span>SKILLS.map()
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Floating terminal matrix of active technologies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeTab === category
                  ? 'border-term-green/70 text-term-green bg-term-green/10 shadow-[0_0_15px_rgba(61,220,132,0.2)]'
                  : 'border-glass-border text-text-secondary hover:border-glass-border-hover hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </div>

        {/* Floating Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon ? iconMap[skill.icon] : null;
            const proficiency = skill.level || 80;
            const fileExt = activeTab === 'ai' ? '.py' : activeTab === 'databases' ? '.sql' : '.ts';
            const fileName = `${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}${fileExt}`;

            return (
              <TerminalWindowCard
                key={`${activeTab}-${index}`}
                title={fileName}
                index={index}
                floatDelay={(index % 3) as 0 | 1 | 2}
                initialRotate={rotations[index % rotations.length]}
                badge={activeTab.toUpperCase()}
                className="cursor-pointer group"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  {Icon && (
                    <motion.div
                      className="p-3 rounded-xl bg-cyan-bright/10 border border-cyan-bright/20 group-hover:border-cyan-bright/50 group-hover:bg-cyan-bright/20 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={26} className="text-cyan-bright group-hover:text-mint transition-colors" />
                    </motion.div>
                  )}

                  <div>
                    <div className="font-mono font-medium text-sm text-text-primary group-hover:text-cyan-bright transition-colors">
                      {skill.name}
                    </div>
                    <div className="font-mono text-[10px] text-text-mono-dim mt-0.5">
                      level: <span className="text-term-green">{proficiency}%</span>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="proficiency-bar w-full">
                    <motion.div
                      className="proficiency-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${proficiency}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                    />
                  </div>
                </div>
              </TerminalWindowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
