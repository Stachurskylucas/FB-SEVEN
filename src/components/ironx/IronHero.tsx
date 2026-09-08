import React, { useRef, useState } from 'react';
import { Play, Pause, ChevronRight } from 'lucide-react';

interface IronHeroProps {
  onExploreClick: () => void;
}

export const IronHero: React.FC<IronHeroProps> = ({ onExploreClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between pt-28 pb-14 px-6 sm:px-10 lg:px-12 bg-black overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/presentacion-sede.mp4"
          poster="/images/sede-pacifico-maquinas.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-45 transition-opacity duration-1000"
        />

        {/* Cinematic dark gradients matching IronX reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

        {/* Ambient subtle cyan glow in the background */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[180px] pointer-events-none" />
      </div>

      {/* 2. TOP ROW (Inside Hero: Left Play badge, Right narrative text) */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto flex flex-col md:flex-row md:items-start justify-between gap-6 pt-4 sm:pt-8">
        
        {/* Top Left: Interactive Play Button & Title */}
        <button
          onClick={toggleVideo}
          className="flex items-center gap-3.5 group text-left cursor-pointer w-fit"
          aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
        >
          <div className="w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:border-brand-neon group-hover:text-brand-neon transition-all duration-300 group-hover:scale-105">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-brand-neon" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5 group-hover:fill-brand-neon transition-colors" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-brand-neon transition-colors">
              Train with the Best.
            </span>
            <span className="text-xs text-neutral-400">
              {isPlaying ? 'Video de fondo en vivo' : 'Reproducir presentación'}
            </span>
          </div>
        </button>

        {/* Top Right: Editorial narrative paragraph */}
        <div className="max-w-md md:text-right">
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Nuestro espacio combina maquinaria biomecánica de alta gama, coaches expertos y una atmósfera motivadora para ayudarte a entrenar más inteligente, moverte mejor y crecer más fuerte cada día.
          </p>
        </div>

      </div>

      {/* 3. BOTTOM ROW (Inside Hero: Massive Headline on Left, Action & Call on Right) */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-16 sm:pt-24">
        
        {/* Bottom Left: Huge multi-line typography with cyan glowing letters */}
        <div className="text-left">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-display font-black tracking-tight leading-[0.92] uppercase text-white select-none">
            <span className="block">Fuerza.</span>
            <span className="block bg-gradient-to-r from-brand-neon via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,242,254,0.65)]">
              Potencia.
            </span>
            <span className="block">Rendimiento.</span>
          </h1>
        </div>

        {/* Bottom Right: Button & WhatsApp Phone Link */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-5">
          <button
            onClick={onExploreClick}
            className="px-8 py-4 bg-white hover:bg-brand-neon text-black font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group shadow-xl hover:shadow-neon"
          >
            <span>EXPLORAR ENTRENAMIENTO</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/5491144724002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            WHATSAPP: <span className="text-brand-neon underline underline-offset-4">+54 9 11 4472-4002</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default IronHero;
