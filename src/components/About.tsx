import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import TerminalWindowCard from './ui/TerminalWindowCard';
import GlassPanel from './ui/GlassPanel';
import { fadeIn } from '../utils/animations';

const specializations = ['LLMs', 'RAG', 'YOLOv8', 'IoT', 'Full-Stack', 'Computer Vision'];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Terminal Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-2">
            <span className="text-term-green">{'>'} </span>ABOUT_ME
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Get to know more about who I am
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Floating Profile Image Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <TerminalWindowCard
              title="profile_david.png"
              badge="AVATAR"
              initialRotate={-1.5}
              floatDelay={0}
              className="max-w-md mx-auto"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border border-glass-border-hover bg-panel group">
                <img
                  src="/david.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-bright/80" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-bright/80" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-bright/80" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-bright/80" />
              </div>
            </TerminalWindowCard>

            {/* Contact Info Cards — Floating Glass Panels */}
            <div className="space-y-3 max-w-md mx-auto">
              {[
                { icon: MapPin, text: personalInfo.location, href: undefined },
                { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map((item, i) => (
                <GlassPanel
                  key={i}
                  index={i}
                  tilt={true}
                  className="p-3 flex items-center gap-3 animate-float-window-alt"
                >
                  <item.icon className="text-cyan-bright flex-shrink-0" size={18} />
                  {item.href ? (
                    <a href={item.href} className="text-text-secondary hover:text-cyan-bright transition-colors text-sm font-mono">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm font-mono">{item.text}</span>
                  )}
                </GlassPanel>
              ))}
            </div>
          </motion.div>

          {/* Right — Floating Bio Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <TerminalWindowCard
              title="about_me.md"
              badge="BIO"
              initialRotate={1.5}
              floatDelay={1}
            >
              <div className="space-y-4 font-mono">
                <div className="text-text-mono-dim text-xs">
                  <span className="text-term-green"># </span>Developer Profile & Mission
                </div>
                {personalInfo.about.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-text-secondary leading-relaxed text-sm md:text-base font-sans"
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </TerminalWindowCard>

            {/* Specialization Tags */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {specializations.map((spec, idx) => (
                <motion.span
                  key={spec}
                  className="font-mono text-xs px-3 py-1.5 rounded-md border border-cyan-bright/30 text-cyan-bright bg-cyan-bright/5 hover:bg-cyan-bright/15 hover:border-cyan-bright/60 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.08, y: -3 }}
                  animate={{
                    y: [0, idx % 2 === 0 ? -4 : 4, 0],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  [{spec}]
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
