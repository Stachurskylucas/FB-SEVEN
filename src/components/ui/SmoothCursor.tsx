import React, { useEffect, useRef, useState } from 'react';

export const SmoothCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // References for position and animation loop
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad), not touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Move the central dot immediately with no lag
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .btn-tactile'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for the trailing fluid ring
    const renderLoop = () => {
      // Linear interpolation (lerp) for smooth trailing motion
      const ease = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ display: 'none' }}
      ref={(el) => {
        // Only display if device has mouse
        if (el && typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
          el.style.display = 'block';
        }
      }}
    >
      {/* 1. Fluid Smooth Trailing Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-14 h-14 border-2 border-brand-neon bg-brand-neon/15 backdrop-blur-[1px] shadow-[0_0_25px_rgba(0,242,254,0.6)] scale-110'
              : isClicked
              ? 'w-9 h-9 border border-brand-neon/90 bg-brand-neon/30 scale-90'
              : 'w-10 h-10 border border-brand-neon/50 bg-brand-neon/5 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
          }`}
        />
      </div>

      {/* 2. Precision Glowing Cyan Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-1.5 h-1.5 bg-white shadow-[0_0_12px_#ffffff]'
              : isClicked
              ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_15px_#00f2fe]'
              : 'w-2.5 h-2.5 bg-brand-neon shadow-[0_0_12px_#00f2fe]'
          }`}
        />
      </div>
    </div>
  );
};

export default SmoothCursor;
