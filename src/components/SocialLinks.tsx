import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { socialLinks } from '../utils/constants';

// Explicit icon map — replaces import * as Icons for performance
const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 22,
  showLabels = false,
}) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];

        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-glass-border bg-panel/50 text-text-secondary hover:text-cyan-bright hover:border-cyan-bright/40 hover:bg-cyan-bright/5 hover:shadow-[0_0_15px_rgba(95,216,224,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            title={link.name}
          >
            {Icon && <Icon size={iconSize} />}
            {showLabels && <span className="ml-2 font-mono text-xs">{link.name}</span>}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
