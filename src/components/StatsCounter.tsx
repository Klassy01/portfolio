import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsCounterProps {
  count: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  count,
  label,
  prefix = '',
  suffix = '',
  duration = 2000
}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [hasFlickered, setHasFlickered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Trigger flicker effect
    setTimeout(() => setHasFlickered(true), 100);

    let startTime: number | null = null;
    const startCount = 0;
    const endCount = count;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);

      setDisplayCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, count, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-mono text-3xl md:text-4xl font-bold text-cyan-bright mb-1.5 ${hasFlickered ? 'flicker-in' : 'opacity-0'}`}>
        {prefix}{displayCount}{suffix}
      </div>
      <div className="font-mono text-xs text-text-mono-dim uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

export default StatsCounter;
