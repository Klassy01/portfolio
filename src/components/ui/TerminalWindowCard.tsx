import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Code, FileCode } from 'lucide-react';

interface TerminalWindowCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  tilt?: boolean;
  floatDelay?: 0 | 1 | 2;
  index?: number;
  initialRotate?: number;
  badge?: string;
}

const floatClasses = [
  'animate-float-window',
  'animate-float-window-delayed',
  'animate-float-window-alt',
];

const TerminalWindowCard: React.FC<TerminalWindowCardProps> = ({
  children,
  title = 'console.sh',
  className = '',
  tilt = true,
  floatDelay = 0,
  index = 0,
  initialRotate = 0,
  badge,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [tiltState, setTiltState] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  // Dynamic Pointer/Touch Tracking for 3D Tilt & Glare
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Normalized coordinates from -1 to +1
    const normX = (x / width - 0.5) * 2;
    const normY = (y / height - 0.5) * 2;

    // Dynamic 3D tilt: up to 14 degrees
    const rotateX = -normY * 14;
    const rotateY = normX * 14;

    setTiltState({
      rotateX,
      rotateY,
      translateZ: 25,
      scale: 1.05,
      glareX: (x / width) * 100,
      glareY: (y / height) * 100,
      isHovered: true,
    });
  };

  const handlePointerLeave = () => {
    if (!tilt) return;
    setTiltState({
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  const flyInVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.95,
      rotateZ: initialRotate,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: initialRotate,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.175, 0.885, 0.32, 1.275] as const,
      },
    },
  };

  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.ts') || filename.endsWith('.tsx') || filename.endsWith('.js')) {
      return <FileCode size={13} className="text-cyan-bright" />;
    }
    if (filename.endsWith('.py') || filename.endsWith('.json') || filename.endsWith('.config')) {
      return <Code size={13} className="text-term-amber" />;
    }
    return <Terminal size={13} className="text-term-green" />;
  };

  // Combine ref for intersection observer and DOM node
  const setRefs = (node: HTMLDivElement | null) => {
    (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    inViewRef(node);
  };

  return (
    <motion.div
      ref={setRefs}
      className={`terminal-window ${floatClasses[floatDelay % 3]} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: tiltState.isHovered
          ? `perspective(1000px) rotateX(${tiltState.rotateX}deg) rotateY(${tiltState.rotateY}deg) translateZ(${tiltState.translateZ}px) scale(${tiltState.scale})`
          : `perspective(1000px) rotateZ(${initialRotate}deg)`,
        transition: tiltState.isHovered
          ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)'
          : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      variants={flyInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Dynamic Cursor/Touch Light Glare Follow Overlay */}
      {tiltState.isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle 280px at ${tiltState.glareX}% ${tiltState.glareY}%, rgba(95, 216, 224, 0.22), transparent 75%)`,
          }}
        />
      )}

      {/* Terminal Window Title Bar */}
      <div className="terminal-window-header relative z-10">
        <div className="terminal-dots">
          <span className="dot-close" />
          <span className="dot-minimize" />
          <span className="dot-expand" />
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-mono-dim">
          {getFileIcon(title)}
          <span>{title}</span>
        </div>

        <div className="font-mono text-[10px] text-text-mono-dim opacity-70">
          {badge ? <span className="text-cyan-bright">[{badge}]</span> : 'UTF-8'}
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 md:p-5 relative z-10">{children}</div>
    </motion.div>
  );
};

export default TerminalWindowCard;
