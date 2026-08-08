import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DataParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  char: string;
}

/* ─── Vector SVG Pikachu Component ─────────────────────── */
const PikachuSvg: React.FC<{ size?: number; className?: string }> = ({ size = 38, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left Ear */}
    <path d="M 28 40 L 8 6 C 5 2 12 1 17 5 L 36 34 Z" fill="#FFE600" />
    <path d="M 28 40 L 8 6 C 5 2 10 2 14 6 L 22 24 Z" fill="#1A1A1A" />

    {/* Right Ear */}
    <path d="M 72 40 L 92 6 C 95 2 88 1 83 5 L 64 34 Z" fill="#FFE600" />
    <path d="M 72 40 L 92 6 C 95 2 90 2 86 6 L 78 24 Z" fill="#1A1A1A" />

    {/* Head Base */}
    <ellipse cx="50" cy="56" rx="34" ry="28" fill="#FFE600" />

    {/* Eyes */}
    <circle cx="35" cy="50" r="5.5" fill="#1A1A1A" />
    <circle cx="33.5" cy="48" r="2.2" fill="#FFFFFF" />

    <circle cx="65" cy="50" r="5.5" fill="#1A1A1A" />
    <circle cx="63.5" cy="48" r="2.2" fill="#FFFFFF" />

    {/* Nose */}
    <polygon points="50,56 48,58.5 52,58.5" fill="#1A1A1A" />

    {/* Red Cheek Pouches */}
    <circle cx="25" cy="62" r="7.5" fill="#FF3B30" opacity="0.95" />
    <circle cx="75" cy="62" r="7.5" fill="#FF3B30" opacity="0.95" />

    {/* Smile */}
    <path d="M 43 63 Q 50 69 57 63" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const AiCursor: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [particles, setParticles] = useState<DataParticle[]>([]);

  // Smooth spring physics for SVG Pikachu cursor
  const springConfig = { damping: 24, stiffness: 280, mass: 0.4 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (reducedMotion) return;

    let particleId = 0;

    const handlePointerMove = (e: PointerEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Electric spark particle trail on move
      if (Math.random() > 0.4) {
        const colors = ['#ffe600', '#ffb700', '#5fd8e0', '#ffffff'];
        const chars = ['⚡', '✨', '•', '⚡'];
        const newParticle: DataParticle = {
          id: ++particleId,
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          size: Math.random() * 5 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          char: chars[Math.floor(Math.random() * chars.length)],
        };

        setParticles((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, reducedMotion]);

  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 450);
    return () => clearTimeout(timer);
  }, [particles]);

  if (reducedMotion || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* Electric Spark Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono font-bold text-xs pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            textShadow: `0 0 8px ${p.color}`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3, y: p.y - 18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {p.char}
        </motion.div>
      ))}

      {/* SVG Pikachu Cursor Follower */}
      <motion.div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -top-4 -left-4 filter drop-shadow-[0_0_12px_rgba(255,230,0,0.85)]"
          animate={{
            scale: isPointerDown ? 0.8 : 1,
            rotate: isPointerDown ? -15 : [0, 8, -8, 0],
          }}
          transition={{
            rotate: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.15 },
          }}
        >
          <PikachuSvg size={38} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AiCursor;
