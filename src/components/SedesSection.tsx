import React from 'react';
import { MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { GYM_SEDES } from '../data/gymData';
import { Magnet } from './reactbits/Magnet';
import { ScrollReveal } from './ui/ScrollReveal';

export const SedesSection: React.FC = () => {
  return (
    <section id="sedes" className="py-28 sm:py-36 bg-[#04060a] text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-neon/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header con animación desde el costado */}
        <ScrollReveal direction="left" duration={0.8} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-brand-neon/30 text-xs font-semibold uppercase tracking-widest text-brand-neon mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
            <span>3 Puntos Estratégicos en Zona Oeste</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight uppercase text-white leading-tight">
            Elegí Dónde Comenzar. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.7)]">
              Entrená en las 3.
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Todas nuestras sedes cuentan con maquinaria biomecánica de alta gama, vestuarios de primer nivel y seguimiento continuo de coaches en sala.
          </p>
        </ScrollReveal>

        {/* 3 Monumental Showcase Cards animadas desde los costados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {GYM_SEDES.map((sede, idx) => {
            const cardDirection: 'left' | 'right' | 'up' = idx === 0 ? 'left' : idx === 1 ? 'up' : 'right';
            return (
              <ScrollReveal
                key={sede.id}
                direction={cardDirection}
                delay={idx * 0.15}
                duration={0.75}
                className="h-full"
              >
                <div
                  className="rounded-3xl bg-neutral-950/80 border border-neutral-800 hover:border-brand-neon/70 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(0,242,254,0.25)] overflow-hidden flex flex-col justify-between transition-all duration-500 group backdrop-blur-xl h-full"
                >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={sede.mainImage}
                      alt={sede.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border bg-black/70 text-brand-neon border-brand-neon/60 shadow-lg">
                        0{idx + 1} • {sede.badge}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-black/60 border border-neutral-700 text-[10px] font-semibold text-slate-300 backdrop-blur-md">
                        {sede.zone}
                      </span>
                    </div>

                    {/* Bottom Title over image */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight group-hover:text-brand-neon transition-colors">
                        {sede.name}
                      </h3>
                      <p className="text-xs text-slate-300 font-semibold mt-1">
                        {sede.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Address & Hours */}
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <MapPin className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span className="font-semibold">{sede.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-4 h-4 text-brand-neon shrink-0" />
                        <span>Lun a Vie: {sede.hours.weekdays} | Sáb: {sede.hours.saturdays}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {sede.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-2 border-t border-neutral-800/80 space-y-2">
                      {sede.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-neon shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="p-6 sm:p-8 pt-0 border-t border-neutral-900 flex items-center justify-between gap-3 mt-4">
                  <a
                    href={sede.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>Ver Mapa</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:text-brand-neon transition-colors" />
                  </a>

                  <Magnet magnetStrength={0.2}>
                    <a
                      href={`https://wa.me/${sede.whatsappNumber}?text=${encodeURIComponent(sede.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md bg-brand-neon hover:bg-white text-black shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-black" />
                      <span>WhatsApp Sede</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </Magnet>
                </div>

              </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SedesSection;
