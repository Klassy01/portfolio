import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import type { Experience } from '../types';
import TerminalWindowCard from './ui/TerminalWindowCard';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const fileName = `exp_0${index + 1}_${experience.id.replace(/[^a-z0-9]/g, '_')}.log`;

  return (
    <div className="group relative">
      {/* Timeline dot */}
      <motion.div
        className="absolute -left-[3.25rem] md:-left-[4.25rem] top-6 w-4 h-4 rounded-full border-2 border-term-green bg-void flex items-center justify-center z-10"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(61, 220, 132, 0.4)',
            '0 0 0 8px rgba(61, 220, 132, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-term-green" />
      </motion.div>

      {/* Floating Terminal Window */}
      <TerminalWindowCard
        title={fileName}
        index={index}
        floatDelay={(index % 3) as 0 | 1 | 2}
        initialRotate={index % 2 === 0 ? -1.5 : 1.5}
        badge="INTERNSHIP"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl border border-cyan-bright/20 bg-cyan-bright/10 flex items-center justify-center group-hover:border-cyan-bright/50 transition-colors">
              <Briefcase className="w-6 h-6 text-cyan-bright" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-mono text-base md:text-lg font-semibold text-text-primary group-hover:text-cyan-bright transition-colors">
                  {experience.position}
                </h3>
                <p className="font-mono text-sm text-cyan-mid font-medium">{experience.company}</p>
              </div>

              {/* Terminal date stamp */}
              <span className="font-mono text-xs text-term-green px-2.5 py-1 rounded-md border border-term-green/30 bg-term-green/5">
                [{experience.duration.replace(/\s/g, '').replace('–', ' — ')}]
              </span>
            </div>

            {/* Code comment description */}
            <p className="font-mono text-xs md:text-sm text-text-secondary leading-relaxed mb-3">
              <span className="text-text-mono-dim">// </span>
              {experience.description}
            </p>

            {/* Highlights */}
            {experience.highlights && experience.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {experience.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded border border-glass-border text-text-secondary hover:border-cyan-bright/40 hover:text-cyan-bright transition-all"
                  >
                    [{highlight}]
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </TerminalWindowCard>
    </div>
  );
};

export default ExperienceCard;
