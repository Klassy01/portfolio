import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

export const flyInFromDepth: Variants = {
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
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  }
};

export const staggerFlyIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

export const flickerIn: Variants = {
  hidden: { opacity: 0, filter: 'brightness(0)' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    }
  }
};

export const terminalSlideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(95, 216, 224, 0.05)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 40px -10px rgba(95, 216, 224, 0.2)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};
