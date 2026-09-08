import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  magnetStrength?: number;
  className?: string;
  activeTransition?: Transition;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  magnetStrength = 0.3,
  className = '',
  activeTransition = { type: 'spring', stiffness: 200, damping: 15 },
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * magnetStrength;
    const deltaY = (e.clientY - centerY) * magnetStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={activeTransition}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
