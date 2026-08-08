import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glowOnHover?: boolean;
  flyInOnScroll?: boolean;
  index?: number;
  as?: 'div' | 'section' | 'article';
}

const motionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
};

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  tilt = true,
  glowOnHover = true,
  flyInOnScroll = true,
  index = 0,
  as = 'div',
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
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

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!tilt || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const normX = (x / width - 0.5) * 2;
    const normY = (y / height - 0.5) * 2;

    const rotateX = -normY * 10;
    const rotateY = normX * 10;

    setTiltState({
      rotateX,
      rotateY,
      translateZ: 15,
      scale: 1.02,
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

  const MotionComponent = motionComponents[as] || motion.div;

  const flyInVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.175, 0.885, 0.32, 1.275] as const,
      },
    },
  };

  const setRefs = (node: HTMLDivElement | null) => {
    (panelRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    inViewRef(node);
  };

  return (
    <MotionComponent
      ref={setRefs}
      className={`glass-panel relative ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: tiltState.isHovered
          ? `perspective(1000px) rotateX(${tiltState.rotateX}deg) rotateY(${tiltState.rotateY}deg) translateZ(${tiltState.translateZ}px) scale(${tiltState.scale})`
          : undefined,
        transition: tiltState.isHovered
          ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)'
          : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      variants={flyInOnScroll ? flyInVariants : undefined}
      initial={flyInOnScroll ? 'hidden' : undefined}
      animate={flyInOnScroll ? (inView ? 'visible' : 'hidden') : undefined}
    >
      {/* Glare spotlight following cursor */}
      {tiltState.isHovered && glowOnHover && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle 260px at ${tiltState.glareX}% ${tiltState.glareY}%, rgba(95, 216, 224, 0.18), transparent 75%)`,
          }}
        />
      )}

      {children}
    </MotionComponent>
  );
};

export default GlassPanel;
