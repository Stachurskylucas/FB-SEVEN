import React from 'react';
import { Star, CheckCircle2, Quote, ArrowUpRight, MessageCircle, Trophy, Users, ShieldCheck, MapPin } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  sede: string;
  rating: number;
  avatar: string;
  text: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Martín Rodríguez',
    role: 'Pase Black Multisede',
    sede: 'Sede Pacífico (Ex Cine)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    text: 'El acondicionamiento del ex Cine Gran Pacífico es de otro planeta. La altura de los techos, las máquinas biomecánicas convergentes que no encontrás en ninguna otra cadena y la acústica motivan como en ningún lado.',
    date: 'Hace 2 semanas'
  },
  {
    id: '2',
    name: 'Sofía Benítez',
    role: 'Pilates Reformer & Musculación',
    sede: 'Sede Ricchieri',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    text: 'Entreno en Ricchieri hace casi dos años. Las profes de Pilates corrigen cada detalle postural y en la sala de pesas los entrenadores están siempre atentos. Se nota el compromiso real con tu progreso.',
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    name: 'Gonzalo Maidana',
    role: 'Fuerza & Powerlifting',
    sede: 'Sede Muñiz',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'Buscaba un gym en Muñiz con barras olímpicas reales, discos calibrados y racks macizos donde puedas cargar pesado sin que te miren raro. FB SEVEN es por lejos el mejor templo de entrenamiento de Zona Oeste.',
    date: 'Hace 3 semanas'
  },
  {
    id: '4',
    name: 'Camila Navarro',
    role: 'Funcional Box & HIIT',
    sede: 'Sede Pacífico',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'La comunidad y la energía de las clases es alucinante. Empecé de cero con muchas dudas y hoy no cambio la hora del entrenamiento por nada. Instalaciones impecables y vestuarios de primer nivel.',
    date: 'Hace 1 mes'
  },
  {
    id: '5',
    name: 'Lucas Etcheverry',
    role: 'Hipertrofia & Biomecánica',
    sede: 'Multisede (Pacífico y Ricchieri)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'Tener las sedes interconectadas me salvó: entreno cerca del trabajo o de casa según el día con la misma membresía. La variedad de poleas y prensas con vectores biomecánicos bien estudiados marca la diferencia.',
    date: 'Hace 2 meses'
  },
  {
    id: '6',
    name: 'Dra. Valeria Gómez',
    role: 'Salud & Readaptación',
    sede: 'Sede Ricchieri',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    text: 'Como médica valoro muchísimo el cuidado de la técnica y la biomecánica de los ejercicios que transmiten los entrenadores. Cero lesiones articulares y resultados visibles desde el primer mes de constancia.',
    date: 'Hace 2 semanas'
  }
];

const METRICS = [
  {
    id: 'rating',
    icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
    value: '4.9 / 5.0',
    label: 'Calificación Google Maps',
    sublabel: '+380 opiniones verificadas'
  },
  {
    id: 'members',
    icon: <Users className="w-5 h-5 text-brand-neon" />,
    value: '+1.500',
    label: 'Socios Activos',
    sublabel: 'Comunidad en crecimiento'
  },
  {
    id: 'sedes',
    icon: <Trophy className="w-5 h-5 text-cyan-300" />,
    value: '3 Sedes',
    label: 'Pase Multisede Integrado',
    sublabel: 'Pacífico, Ricchieri y Muñiz'
  },
  {
    id: 'equipment',
    icon: <ShieldCheck className="w-5 h-5 text-brand-neon" />,
    value: '+120',
    label: 'Máquinas Biomecánicas',
    sublabel: 'Vectores de fuerza óptimos'
  }
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#040810] to-black text-white relative overflow-hidden">
      
      {/* Background radial ambiance */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(0, 242, 254, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(0, 242, 254, 0.04) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down" duration={0.6}>
            
            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/15 text-xs font-semibold text-slate-200 mb-5 shadow-lg">
              {/* Google G Multi-color Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 text-[11px] border-l border-white/20 pl-2">Opiniones en Google Maps</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              LA VOZ DE NUESTRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300">COMUNIDAD</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Más de 1.500 miembros activos en Bella Vista y Muñiz eligen la biomecánica, el equipamiento de hierro pesado y el compromiso de nuestros coaches cada día.
            </p>
          </ScrollReveal>
        </div>

        {/* METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#090e17]/80 border border-white/10 hover:border-brand-neon/40 transition-colors backdrop-blur-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  {metric.icon}
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-black text-white block tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200 block mt-0.5">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  {metric.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS CARDS (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={t.id} direction="up" delay={idx * 0.1} duration={0.6}>
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#080d15]/90 border border-white/10 hover:border-brand-neon/50 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] relative">
                
                {/* Subtle Quote icon in corner */}
                <Quote className="w-8 h-8 text-white/[0.06] group-hover:text-brand-neon/20 transition-colors absolute top-5 right-5" />

                <div>
                  {/* Rating Stars & Verified tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Opinión verificada
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Author Info Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-brand-neon/40 shadow-sm shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-bold text-white block truncate group-hover:text-brand-neon transition-colors">
                      {t.name}
                    </span>
                    <span className="text-xs text-cyan-300 font-medium block truncate">
                      {t.role}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-3 h-3 text-brand-neon shrink-0" />
                      {t.sede}
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* BOTTOM LEAD CAPTURE CTA BANNER */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0a121d] via-[#05111e] to-[#0a121d] border border-brand-neon/30 text-center relative overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.12)]">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
              ¿Listo para empezar tu <span className="text-brand-neon">Transformación</span>?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Vení a conocer nuestras instalaciones, probá la maquinaria y sentí la diferencia de un gimnasio enfocado 100% en tu rendimiento.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/5491144724002?text=${encodeURIComponent(
                  '¡Hola FB SEVEN! Leí las opiniones y quiero coordinar una visita para conocer las sedes y los planes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                <span>Hablar con un Asesor por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/clases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Explorar Horarios & Clases</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
