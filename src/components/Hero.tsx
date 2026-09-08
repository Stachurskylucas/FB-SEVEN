import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Magnet } from './reactbits/Magnet';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[100dvh] w-full flex items-center pt-20 sm:pt-24 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 bg-[#020408] overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO LAYER (100% Pantalla Completa) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <video
          ref={videoRef}
          src="/videos/hero-bg.mp4"
          poster="/images/sede-pacifico-maquinas.png"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-cover scale-105 opacity-85 transition-opacity duration-1000 pointer-events-none"
        />

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/85 via-[#020408]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-black/30 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-[#060b13]/80 to-[#060b13] pointer-events-none z-10" />

        {/* Atmospheric glows */}
        <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-brand-neon/10 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-neon/6 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative max-w-[1400px] mx-auto w-full z-20 text-left">
        <div className="max-w-2xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-[11px] font-semibold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse shadow-[0_0_8px_rgba(0,242,254,0.9)]" />
            <span className="text-white font-bold">
              NUEVA SEDE PACÍFICO <span className="text-brand-neon">•</span> EX CINE GRAN PACÍFICO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-black tracking-tight leading-[0.96] uppercase text-white select-none">
            <span className="block">ENTRENÁ AL MÁS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-cyan-200 to-white drop-shadow-[0_0_30px_rgba(0,242,254,0.8)]">
              ALTO NIVEL.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-lg font-normal leading-relaxed">
            Biomecánica pesada, equipamiento convergente y salas de entrenamiento en Bella Vista y San Miguel.
          </p>

          {/* Call to Actions */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            
            <Magnet magnetStrength={0.2}>
              <a
                href="#planes"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)] cursor-pointer group"
              >
                <span>Ver planes</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Magnet>

            <Magnet magnetStrength={0.15}>
              <Link
                to="/clases"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/25 hover:border-brand-neon/60 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 cursor-pointer"
              >
                <span>Actividades</span>
              </Link>
            </Magnet>

          </div>

          {/* Social Proof & Metrics Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-white flex items-baseline gap-0.5">
                <span className="text-brand-neon">+</span>1.500
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Atletas activos</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-white">
                3
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Sedes exclusivas</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-white flex items-baseline gap-0.5">
                <span className="text-brand-neon">+</span>80
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Máquinas biomecánicas</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-white flex items-baseline gap-0.5">
                100<span className="text-brand-neon">%</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Coaching en sala</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
