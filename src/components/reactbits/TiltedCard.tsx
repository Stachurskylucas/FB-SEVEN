import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  tag?: string;
  className?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  children?: React.ReactNode;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText = 'Tilted image',
  captionText,
  tag,
  className = '',
  scaleOnHover = 1.03,
  rotateAmplitude = 12,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer select-none [perspective:1000px] ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: scaleOnHover }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-brand-border/80 group"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

        {/* Tag in 3D */}
        {tag && (
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="absolute top-4 left-4 z-20"
          >
            <span className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-brand-neon/50 text-xs font-bold uppercase tracking-wider text-brand-neon shadow-lg">
              {tag}
            </span>
          </div>
        )}

        {/* Caption in 3D */}
        {captionText && (
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute bottom-4 left-4 right-4 z-20 bg-brand-dark/85 backdrop-blur-md p-3.5 rounded-2xl border border-brand-border/80"
          >
            <p className="text-xs font-bold text-white leading-snug">
              {captionText}
            </p>
          </div>
        )}

        {children}
      </motion.div>
    </div>
  );
};
