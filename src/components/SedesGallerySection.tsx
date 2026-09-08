import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Component, { type CarouselItem } from '@/components/ui/thumbnail-carousel';
import { ScrollReveal } from './ui/ScrollReveal';

interface SedeInfo {
  id: 'pacifico' | 'ricchieri' | 'muniz';
  name: string;
  badge: string;
  address: string;
  whatsappMessage: string;
  photos: CarouselItem[];
}

const SEDES_DATA: SedeInfo[] = [
  {
    id: 'pacifico',
    name: 'Sede Pacífico',
    badge: 'Cine Pacífico • Bella Vista',
    address: 'Senador Morón 1450, Bella Vista (Cine Pacífico)',
    whatsappMessage: '¡Hola FB SEVEN! Me gustaría consultar para entrenar en la Sede Pacífico (Cine Pacífico).',
    photos: [
      {
        id: 'p1',
        url: '/images/sede-pacifico-recepcion.png',
      },
      {
        id: 'p2',
        url: '/images/sede-pacifico-maquinas.png',
      },
      {
        id: 'p3',
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'p4',
        url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'p5',
        url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ricchieri',
    name: 'Sede Ricchieri',
    badge: 'Fuerza Pura & Boxeo • Bella Vista',
    address: 'Ricchieri 691, Bella Vista',
    whatsappMessage: '¡Hola FB SEVEN! Me gustaría consultar para entrenar en la Sede Ricchieri.',
    photos: [
      {
        id: 'r1',
        url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'r2',
        url: '/images/sede-pacifico-maquinas.png',
      },
      {
        id: 'r3',
        url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'r4',
        url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'r5',
        url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'muniz',
    name: 'Sede Muñiz',
    badge: 'Pilates Reformer & Wellness • Muñiz',
    address: 'León Gallardo 70, Muñiz',
    whatsappMessage: '¡Hola FB SEVEN! Me gustaría consultar para entrenar en la Sede Muñiz.',
    photos: [
      {
        id: 'm1',
        url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'm2',
        url: '/images/sede-pacifico-recepcion.png',
      },
      {
        id: 'm3',
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'm4',
        url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'm5',
        url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
];

export const SedesGallerySection: React.FC = () => {
  const [selectedSedeId, setSelectedSedeId] = useState<'pacifico' | 'ricchieri' | 'muniz'>('pacifico');

  const currentSede = SEDES_DATA.find((s) => s.id === selectedSedeId) || SEDES_DATA[0];

  return (
    <section id="galeria-sedes" className="py-10 sm:py-16 bg-black text-white relative overflow-hidden">
      
      {/* Diffused dark ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[240px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* TÍTULO ARRIBA Y BOTONES DE SEDES COMPACTOS */}
        <div className="mb-6 sm:mb-8 text-left max-w-5xl mx-auto">
          <ScrollReveal direction="down" duration={0.5}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-[11px] font-semibold uppercase tracking-widest text-brand-neon mb-2.5 shadow-[0_6px_20px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
              <span>Instalaciones FB SEVEN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
              Galería de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(0,242,254,0.6)]">
                Nuestras 3 Sedes
              </span>
            </h2>

            <p className="mt-2 text-slate-300 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed">
              Explorá las salas de entrenamiento, maquinaria biomecánica pesada y áreas de acondicionamiento de cada una de nuestras sedes.
            </p>
          </ScrollReveal>

          {/* BOTONES DE LAS 3 SEDES */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4 sm:mt-5">
            {SEDES_DATA.map((sede) => {
              const isSelected = sede.id === selectedSedeId;
              return (
                <button
                  key={sede.id}
                  type="button"
                  onClick={() => setSelectedSedeId(sede.id)}
                  className={`btn-tactile relative group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'bg-brand-neon/20 border border-brand-neon text-brand-neon shadow-[0_0_25px_rgba(0,242,254,0.4),inset_0_1px_2px_rgba(255,255,255,0.45)] scale-[1.02]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/35 text-slate-200 hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                  }`}
                  style={{ WebkitBackdropFilter: 'blur(20px)' }}
                >
                  {/* Top specular crystal shine reflection */}
                  <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  <span
                    className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-neon animate-pulse shadow-[0_0_8px_rgba(0,242,254,1)]'
                        : 'bg-white/30 group-hover:bg-white/60'
                    }`}
                  />
                  <span>{sede.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* GALERÍA DE FOTOS CENTRADA CON MINIATURAS AL COSTADO */}
        <div className="max-w-5xl mx-auto w-full relative">
          <Component 
            items={currentSede.photos}
            aspectHeightClass="h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px]"
          />
        </div>

      </div>
    </section>
  );
};

export default SedesGallerySection;
