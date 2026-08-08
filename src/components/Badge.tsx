import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'info' | 'warning';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variantClasses = {
    primary: 'border-cyan-bright/30 text-cyan-bright bg-cyan-bright/5',
    success: 'border-term-green/30 text-term-green bg-term-green/5',
    info: 'border-mint/30 text-mint bg-mint/5',
    warning: 'border-term-amber/30 text-term-amber bg-term-amber/5',
  };

  return (
    <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${variantClasses[variant]} ${className}`}>
      [{children}]
    </span>
  );
};

export default Badge;
