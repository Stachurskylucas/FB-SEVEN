import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-neutral-900/80 backdrop-blur-md pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#00f2fe] via-cyan-300 to-white origin-left shadow-[0_0_15px_rgba(0,242,254,0.95),0_0_30px_rgba(0,242,254,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgressBar;
