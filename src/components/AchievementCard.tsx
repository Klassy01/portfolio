import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Star, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Medal,
  Target,
  Star,
  Shield,
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="group"
    >
      <div className="glass-panel p-4 md:p-5 group-hover:border-glass-border-hover transition-all duration-300 relative">
        {/* Terminal rank badge */}
        <div className="absolute -top-2.5 left-4">
          <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-term-green/40 text-term-green bg-void">
            [#{index + 1}]
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-5 mt-1">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg border border-cyan-bright/20 bg-cyan-bright/5 flex items-center justify-center group-hover:border-cyan-bright/40 group-hover:bg-cyan-bright/10 transition-all duration-300">
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-bright" />
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-cyan-bright transition-colors duration-300">
                {achievement.title}
              </h3>
              {achievement.organization && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-glass-border text-text-mono-dim">
                  {achievement.organization}
                </span>
              )}
            </div>
            <p className="text-text-secondary text-sm line-clamp-2">
              {achievement.description}
            </p>
          </div>

          {/* Prize — amber monospace */}
          {achievement.prize && (
            <div className="flex-shrink-0 text-right">
              <div className="font-mono text-xl md:text-2xl font-bold text-term-amber">
                {achievement.prize}
              </div>
              <p className="font-mono text-[10px] text-text-mono-dim">PRIZE</p>
            </div>
          )}

          {/* Year */}
          <div className="hidden md:block flex-shrink-0 text-right">
            <span className="font-mono text-xs text-text-mono-dim">{achievement.year}</span>
          </div>
        </div>

        {/* Photos */}
        {achievement.photos && achievement.photos.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {achievement.photos.slice(0, 2).map((photo, photoIndex) => (
              <div
                key={`${achievement.id}-${photoIndex}`}
                className="rounded-lg overflow-hidden border border-glass-border bg-void/50 p-1.5"
              >
                <img
                  src={photo}
                  alt={`${achievement.title} photo ${photoIndex + 1}`}
                  className="w-full h-auto max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Featured glow */}
        {achievement.featured && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-term-green/3 to-cyan-bright/3 pointer-events-none" />
        )}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
