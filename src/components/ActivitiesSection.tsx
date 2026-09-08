import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Flame, 
  Sparkles, 
  Crosshair, 
  ArrowRight,
  Zap,
  Activity
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface ProgramCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const PROGRAMS: ProgramCard[] = [
  {
    id: 'musculacion',
    tag: 'STRENGTH TRAINING',
    title: 'Musculación & Biomecánica',
    description: 'Desarrollá masa muscular y potencia con maquinaria biomecánica convergente y racks olímpicos.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    icon: Dumbbell,
    link: '/clases?cat=entrenamiento'
  },
  {
    id: 'funcional',
    tag: 'FAT LOSS & HIIT',
    title: 'Funcional & Metabólico',
    description: 'Circuitos atléticos continuos con cuerdas de batalla, trineos lastrados y pliometría.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    icon: Flame,
    link: '/clases?cat=clases'
  },
  {
    id: 'boxeo',
    tag: 'BOXING & COMBAT',
    title: 'Boxeo & Funcional Box',
    description: 'Golpeo técnico en bolsas pesadas, guanteo coordinado y asaltos para descargar tensiones.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    icon: Crosshair,
    link: '/clases?cat=clases'
  },
  {
    id: 'pilates',
    tag: 'PILATES & POSTURA',
    title: 'Pilates Reformer',
    description: 'Camas reformer de alta precisión para descomprimir la columna vertebral y ganar flexibilidad.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    icon: Sparkles,
    link: '/clases?cat=salud'
  },
  {
    id: 'running',
    tag: 'RUNNING TEAM',
    title: 'Running & Resistencia',
    description: 'Preparación física específica para corredores, desde 5k y 10k hasta media maratón y fondo.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop',
    icon: Zap,
    link: '/clases?cat=clases'
  },
  {
    id: 'kinesiologia',
    tag: 'KINESIOLOGÍA & SALUD',
    title: 'Kinesiología Deportiva',
    description: 'Gabinete de kinesiología y recuperación funcional: rehabilitación postural y tratamientos deportivos.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    icon: Activity,
    link: '/clases?cat=salud'
  },
];

export const ActivitiesSection: React.FC = () => {

  return (
    <section id="actividades" className="py-14 sm:py-20 bg-gradient-to-b from-[#060b13] via-[#091522] to-black text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-brand-neon/8 rounded-full blur-[220px] pointer-events-none" />

      {/* Smooth bottom fade into pure black for seamless transition */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          
          <ScrollReveal direction="left" duration={0.6} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-[11px] font-semibold uppercase tracking-widest text-brand-neon mb-3 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
              <span>Nuestros Programas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
              Entrená a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)]">Manera</span>
            </h2>

            <p className="mt-3 text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              Musculación, Boxeo, Pilates, Running, Kinesiología, Kids y más. Todo bajo un mismo techo en 3 sedes.
            </p>
          </ScrollReveal>

          {/* Botón hacia la página completa de clases */}
          <ScrollReveal direction="right" duration={0.6} className="shrink-0">
            <Link
              to="/clases"
              className="btn-tactile inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/20 hover:border-brand-neon/60 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-brand-neon shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group"
            >
              <span>Ver todos los programas</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

        </div>

        {/* CARDS GRID: 3 columnas en desktop, 2 en tablet, 1 en mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {PROGRAMS.map((prog, idx) => {
            const IconComponent = prog.icon;
            return (
              <ScrollReveal
                key={prog.id}
                direction="up"
                delay={idx * 0.07}
                duration={0.5}
                className="h-full flex"
              >
                <Link
                  to={prog.link}
                  className="group relative flex flex-col justify-between w-full rounded-3xl bg-[#080c12]/80 hover:bg-[#0c121a]/90 border border-white/10 hover:border-brand-neon/50 shadow-xl hover:shadow-[0_12px_35px_rgba(0,242,254,0.18)] transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{ WebkitBackdropFilter: 'blur(20px)' }}
                >
                  {/* Top specular crystal line reflection */}
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  {/* Imagen superior */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden shrink-0">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c12] via-black/30 to-transparent" />

                    {/* Badge circular flotante con ícono neón */}
                    <div className="absolute bottom-3 left-4 w-11 h-11 rounded-full bg-black/80 backdrop-blur-xl border border-brand-neon/80 text-brand-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.45)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.8)] transition-all">
                      <IconComponent className="w-5 h-5 text-brand-neon" />
                    </div>
                  </div>

                  {/* Contenido textual */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-neon/90 block mb-1">
                        {prog.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-tight group-hover:text-brand-neon transition-colors">
                        {prog.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                        {prog.description}
                      </p>
                    </div>

                    {/* Botón link con flecha */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-neon group-hover:text-white transition-colors">
                      <span>Conocer más</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-brand-neon" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;
