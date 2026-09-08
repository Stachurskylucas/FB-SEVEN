import React from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  highlightWords?: string[];
  highlightClassName?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0.08,
  className = '',
  animateBy = 'words',
  highlightWords = [],
  highlightClassName = 'bg-gradient-to-r from-brand-neon via-white to-cyan-300 bg-clip-text text-transparent',
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-block ${className}`}>
      {elements.map((el, i) => {
        const isHighlighted = highlightWords.some(hw => hw.toLowerCase() === el.toLowerCase().replace(/[^a-záéíóúüñ]/gi, ''));
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 15 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClassName : ''}`}
          >
            {el === ' ' ? '\u00A0' : el}
          </motion.span>
        );
      })}
    </span>
  );
};
