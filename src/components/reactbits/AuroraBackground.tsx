import React from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium';
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className = '',
  intensity = 'subtle',
}) => {
  const opacityClass = intensity === 'subtle' ? 'opacity-35' : 'opacity-55';

  return (
    <div className={`relative bg-[#030508] ${className}`}>
      {/* Animated Subtle Aurora / Gradient Mesh Layer */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${opacityClass} transition-opacity duration-1000`}
        aria-hidden="true"
      >
        {/* Blob 1: Electric Cyan Glow drifting top-left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 via-brand-neon/10 to-transparent blur-[140px] animate-aurora-slow pointer-events-none" />

        {/* Blob 2: Deep Blue Glow drifting bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-blue-600/15 via-cyan-400/10 to-transparent blur-[160px] animate-aurora-reverse pointer-events-none" />

        {/* Blob 3: Center Pulse Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-cyan-400/5 blur-[180px] pointer-events-none" />

        {/* Subtle high-tech grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2fe05_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe05_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuroraBackground;
