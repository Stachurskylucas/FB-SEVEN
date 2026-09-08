import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export interface AccordionGalleryItem {
  image: string;
  label: string;
  link?: string;
  description?: string;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: 'hover' | 'click';
  className?: string;
  duration?: number;
  ease?: string;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultIndex = 1,
  expandRatio = 0.68,
  trigger = 'hover',
  className = '',
  duration = 0.25,
  ease = 'power2.out',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const animateItems = (targetIndex: number) => {
    if (!itemsRef.current.length) return;

    const remainingRatio = (1 - expandRatio) / (items.length - 1);

    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const targetFlex = i === targetIndex ? expandRatio * 100 : remainingRatio * 100;
      
      gsap.to(el, {
        flexBasis: `${targetFlex}%`,
        duration,
        ease,
        overwrite: 'auto',
      });

      // Internal image zoom/parallax
      const img = el.querySelector('img');
      if (img) {
        gsap.to(img, {
          scale: i === targetIndex ? 1.05 : 1,
          duration: duration * 1.1,
          ease,
          overwrite: 'auto',
        });
      }

      // Label opacity and translateY
      const label = el.querySelector('.gallery-label');
      if (label) {
        gsap.to(label, {
          opacity: i === targetIndex ? 1 : 0.65,
          y: i === targetIndex ? 0 : 2,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });
  };

  useEffect(() => {
    animateItems(activeIndex);
  }, [activeIndex, expandRatio]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setActiveIndex(defaultIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      className={`flex w-full h-[420px] sm:h-[520px] md:h-[580px] gap-2 sm:gap-3 overflow-hidden rounded-3xl p-2 bg-brand-card/80 border border-brand-border/80 shadow-2xl ${className}`}
    >
      {items.map((item, index) => {
        const isExpanded = activeIndex === index;

        return (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            onMouseEnter={() => trigger === 'hover' && handleInteraction(index)}
            onClick={() => handleInteraction(index)}
            className="relative h-full overflow-hidden rounded-2xl cursor-pointer select-none transition-all group border border-brand-border/60 hover:border-brand-neon/60"
            style={{
              flexBasis: `${index === defaultIndex ? expandRatio * 100 : ((1 - expandRatio) / (items.length - 1)) * 100}%`,
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Dark Vignette Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/95 via-black/30 to-black/20 ${
              isExpanded ? 'opacity-85' : 'opacity-70 group-hover:opacity-55'
            }`} />

            {/* Glowing active indicator line at top */}
            {isExpanded && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-neon via-white to-brand-gold z-20" />
            )}

            {/* Caption & Label Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 flex flex-col justify-end">
              <div className="gallery-label transition-all">
                <span className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 backdrop-blur-md border ${
                  isExpanded
                    ? 'bg-brand-neon/20 text-brand-neon border-brand-neon/40 shadow-neon'
                    : 'bg-black/60 text-slate-300 border-slate-700'
                }`}>
                  0{index + 1}
                </span>

                <h3 className={`font-display font-black text-white uppercase tracking-tight transition-all duration-200 leading-tight ${
                  isExpanded ? 'text-xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm truncate'
                }`}>
                  {item.label}
                </h3>

                {isExpanded && item.description && (
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl line-clamp-2 font-normal animate-in fade-in duration-200">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* Vertical rotated text when collapsed on desktop */}
            {!isExpanded && (
              <div className="hidden sm:flex absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-extrabold uppercase tracking-widest text-slate-400 opacity-70 group-hover:text-white group-hover:opacity-100 transition-all">
                  {item.label}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
