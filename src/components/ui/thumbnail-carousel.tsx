import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface CarouselItem {
  id: number | string;
  url: string;
  title?: string;
}

const defaultItems: CarouselItem[] = [
  {
    id: 1,
    url: 'https://cdn.21st.dev/assets/mirror/2d/2deffad52dca4c5c60941eae33c675a62f8c68ccc59977c53841203b173abe0b.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.21st.dev/assets/mirror/cd/cd19a496024e1ae95966db819275e556550318375c03775081270da8e8c67959.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.21st.dev/assets/mirror/fd/fd0a79541180cd40e0ce44de54b408d0e340d8640f929a4b240255478919141f.jpg',
  },
  {
    id: 4,
    url: 'https://cdn.21st.dev/assets/mirror/8c/8c67f1501f4d1d639798bc474a764aac9cecf144810c4f6ecc1ea154622b8bff.jpg',
  },
  {
    id: 5,
    url: 'https://cdn.21st.dev/assets/mirror/a8/a86021ac758a4511effa226afc0df66c2c515c1dd3b6d0f5a307c2098b3821d8.jpg',
  },
];

export interface ThumbnailCarouselProps {
  items?: CarouselItem[];
  className?: string;
  aspectHeightClass?: string;
}

export default function Component({
  items = defaultItems,
  className = '',
  aspectHeightClass = 'h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px]',
}: ThumbnailCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Reset index if items change (e.g. switching sedes)
  useEffect(() => {
    setIndex(0);
  }, [items]);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Solo activar si el gesto fue predominantemente horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch ${aspectHeightClass} w-full`}>
        {/* Main Carousel: imagen grande con mayor altura y sin espacios negros */}
        <div
          className='relative flex-1 min-w-0 h-full overflow-hidden rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl group/carousel select-none focus:outline-none'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
          }}
          tabIndex={0}
          aria-label="Carrusel de fotos de la sede"
        >
          <motion.div
            className='flex h-full w-full'
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            {items.map((item, idx) => (
              <div key={item.id} className='shrink-0 w-full h-full relative'>
                <img
                  src={item.url}
                  alt={item.title || "Foto de las instalaciones de FB SEVEN"}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className='w-full h-full object-cover select-none pointer-events-none filter brightness-95'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button: navegación fluida hacia atrás */}
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-xl bg-black/75 hover:bg-brand-neon hover:text-black text-white border border-white/30 shadow-2xl transition-all duration-150 active:scale-90 z-30 cursor-pointer group/btn focus:outline-none"
            aria-label="Foto anterior"
          >
            <svg
              className='w-5 h-5 transition-transform duration-200 group-hover/btn:-translate-x-0.5 pointer-events-none'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          {/* Next Button: navegación fluida hacia adelante */}
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-xl bg-black/75 hover:bg-brand-neon hover:text-black text-white border border-white/30 shadow-2xl transition-all duration-150 active:scale-90 z-30 cursor-pointer group/btn focus:outline-none"
            aria-label="Siguiente foto"
          >
            <svg
              className='w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-0.5 pointer-events-none'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>

        {/* Miniaturas al costado: ajuste exacto sin desborde ni cortes en el último elemento */}
        <div className='flex flex-row md:flex-col gap-2.5 shrink-0 md:w-20 lg:w-24 h-16 md:h-full select-none overflow-x-auto md:overflow-visible p-1'>
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.id}
                type='button'
                onClick={() => setIndex(i)}
                className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shrink-0 w-16 h-full md:w-full md:h-0 md:flex-1 ${
                  isActive
                    ? 'ring-2 ring-brand-neon shadow-[0_0_15px_rgba(0,242,254,0.6)] opacity-100 z-10'
                    : 'opacity-45 hover:opacity-85 ring-1 ring-white/15 hover:ring-white/40'
                }`}
                aria-label={`Ver foto ${i + 1}`}
              >
                <img
                  src={item.url}
                  alt={item.title || "Miniatura"}
                  loading="lazy"
                  decoding="async"
                  className='w-full h-full object-cover pointer-events-none select-none'
                  draggable={false}
                />
                {isActive && (
                  <div className="absolute inset-0 border border-brand-neon/80 rounded-xl md:rounded-2xl pointer-events-none bg-brand-neon/15" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
