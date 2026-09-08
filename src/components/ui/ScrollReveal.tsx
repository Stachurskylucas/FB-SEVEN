import React from 'react';
import { motion } from 'framer-motion';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.7,
  distance = 70,
  className = '',
  amount = 0.15,
  once = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance, y: 0 };
      case 'right':
        return { opacity: 0, x: distance, y: 0 };
      case 'up':
        return { opacity: 0, x: 0, y: distance };
      case 'down':
        return { opacity: 0, x: 0, y: -distance };
      case 'none':
        return { opacity: 0, x: 0, y: 0 };
      default:
        return { opacity: 0, x: -distance, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
