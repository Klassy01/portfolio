import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { personalInfo, stats } from '../utils/constants';
import TerminalButton from './ui/TerminalButton';
import StatsCounter from './StatsCounter';
import SocialLinks from './SocialLinks';
import NeuralCore from './three/NeuralCore';
import { fadeIn, slideInLeft, slideInRight } from '../utils/animations';

const roles = ['Software Engineer', 'AI & ML Engineer','Full Stack Developer','Cloud & DevOps Engineer'];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(95,216,224,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(95,216,224,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            {/* Terminal greeting */}
            <motion.div variants={fadeIn} className="space-y-2">
              <p className="font-mono text-sm text-text-mono-dim">
                <span className="text-term-green">{'>'}</span> console.log("Hello, World!")
              </p>
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                {personalInfo.name}
              </h1>
              <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-cyan-bright">
                <span className="text-term-green">{'>'} </span>
                <span>{displayedText}</span>
                <span className="animate-cursor-blink text-term-green">█</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
              variants={fadeIn}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeIn}
            >
              <TerminalButton variant="primary" onClick={scrollToProjects} icon={<ArrowRight size={16} />}>
                VIEW_PROJECTS
              </TerminalButton>
              <TerminalButton variant="secondary" href="/david_resume.pdf" icon={<Download size={16} />}>
                DOWNLOAD_RESUME
              </TerminalButton>
              <TerminalButton variant="ghost" onClick={scrollToContact} icon={<Mail size={16} />}>
                CONTACT_ME
              </TerminalButton>
            </motion.div>

            <motion.div variants={fadeIn}>
              <SocialLinks className="mt-6" iconSize={22} />
            </motion.div>
          </motion.div>

          {/* Right Content — 3D Neural Core */}
          <motion.div
            className="relative hidden md:block"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <NeuralCore />
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-glass-border"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              count={stat.count}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
