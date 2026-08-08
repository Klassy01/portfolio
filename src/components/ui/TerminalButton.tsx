import React from 'react';
import { motion } from 'framer-motion';

interface TerminalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const TerminalButton: React.FC<TerminalButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  icon,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = `
    font-mono font-medium text-sm tracking-wide
    px-5 py-2.5 rounded-lg
    flex items-center gap-2.5 justify-center
    transition-all duration-300
    border relative overflow-hidden
    disabled:opacity-40 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      border-cyan-bright/40 text-cyan-bright
      bg-cyan-bright/5
      hover:border-cyan-bright/80 hover:bg-cyan-bright/10
      hover:shadow-[0_0_20px_rgba(95,216,224,0.2)]
    `,
    secondary: `
      border-glass-border text-text-secondary
      bg-transparent
      hover:border-glass-border-hover hover:text-text-primary
      hover:shadow-[0_0_15px_rgba(95,216,224,0.1)]
    `,
    ghost: `
      border-transparent text-text-secondary
      bg-transparent
      hover:text-cyan-bright hover:bg-cyan-bright/5
    `,
  };

  const content = (
    <>
      <span className="text-text-mono-dim transition-all duration-300 group-hover:text-cyan-bright/60">[</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      <span className="text-text-mono-dim transition-all duration-300 group-hover:text-cyan-bright/60">]</span>
    </>
  );

  const classes = `group ${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={href.endsWith('.pdf')}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      disabled={disabled}
      type={type}
    >
      {content}
    </motion.button>
  );
};

export default TerminalButton;
