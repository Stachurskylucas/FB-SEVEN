import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Check, 
  MessageCircle,
  Activity,
  Flame
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { BookingModal } from './BookingModal';

interface FeaturedService {
  id: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  priceNote: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'apto-medico',
    category: 'Salud & Medicina Deportiva',
    tag: 'OBLIGATORIO & CLÍNICO',
    title: 'Apto Médico Oficial con ECG',
    subtitle: 'Electrocardiograma informado en el día',
    badge: 'Requerido para Entrenar',
    duration: '20 - 30 min',
    priceNote: 'Arancel accesible • En el acto',
    description: 'Evaluación cardiológica integral con electrocardiograma de 12 derivaciones firmado por médico especialista. Certificado oficial válido por 1 año para gimnasios y carreras.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    icon: HeartPulse,
    highlights: [
      'ECG de reposo con informe cardiológico firmado',
      'Certificado oficial válido 1 año en todo el país',
      'Detección preventiva y control de presión arterial',
      'Turnos en el día en Bella Vista y Muñiz'
    ]
  },
  {
    id: 'masaje-descontracturante',
    category: 'Terapia Manual & Descarga',
    tag: 'MASAJES & DESCARGA',
    title: 'Masaje Descontracturante Profundo',
    subtitle: 'Alivio cervical, lumbar y sobrecarga muscular',
    badge: 'Más Solicitado',
    duration: '50 - 60 min',
    priceNote: 'Sesión individual o Pack x4 con descuento',
    description: 'Terapia manual profunda para disolver nudos musculares y contracturas por estrés o fatiga de entrenamiento. Restaura la movilidad articular y relaja el sistema nervioso.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    icon: Sparkles,
    highlights: [
      'Alivio inmediato en zona cervical, trapecios y lumbar',
      'Desactivación de puntos gatillo miofasciales',
      'Aceites esenciales y cremas térmicas desinflamantes',
      'Gabinete privado y climatizado'
    ]
  },
  {
    id: 'nutricion-deportiva',
    category: 'Nutrición & Rendimiento',
    tag: 'NUTRICIÓN & COMPOSICIÓN',
    title: 'Nutrición Deportiva & ISAK',
    subtitle: 'Plan a medida para masa muscular o definición',
    badge: 'Antropometría Oficial',
    duration: '45 - 60 min',
    priceNote: 'Plan personalizado + seguimiento mensual',
    description: 'Planes nutricionales 100% personalizados basados en tus objetivos, horarios y preferencias. Medición antropométrica ISAK de grasa, músculo y estructura ósea.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop',
    icon: Flame,
    highlights: [
      'Antropometría ISAK de masa grasa y masa muscular',
      'Pautas nutricionales realistas y sostenibles',
      'Acompañamiento continuo por WhatsApp',
      'Consulta presencial o 100% online'
    ]
  },
  {
    id: 'kinesiologia-rehab',
    category: 'Fisioterapia & Readaptación',
    tag: 'KINESIOLOGÍA & REHAB',
    title: 'Kinesiología & Readaptación Deportiva',
    subtitle: 'Recuperación de lesiones y vuelta al entrenamiento',
    badge: 'Kinesiólogos Matriculados',
    duration: '45 - 50 min',
    priceNote: 'Atención personalizada • Consulta de reintegros',
    description: 'Diagnóstico funcional, rehabilitación osteoarticular y readaptación biomecánica para tratar lesiones, tendinopatías y dolores de columna sin frenar tu progreso.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
    icon: Activity,
    highlights: [
      'Tratamiento de contracturas, tendinopatías y esguinces',
      'Terapia manual, fisioterapia y ejercicios correctivos',
      'Plan de readaptación física para volver a entrenar',
      'Gabinete equipado en Pacífico y Muñiz'
    ]
  }
];

export const HomeServicesSection: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('apto-medico');

  const handleOpenBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <section id="servicios-preview" className="py-16 sm:py-24 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-neon/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-neon/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <ScrollReveal direction="left" duration={0.6} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-brand-neon/30 text-[11px] font-semibold uppercase tracking-widest text-brand-neon mb-3.5 shadow-[0_0_16px_rgba(0,242,254,0.15)]">
              <HeartPulse className="w-3.5 h-3.5 text-brand-neon animate-pulse" />
              <span>Gabinete de Salud & Rendimiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
              Servicios & Reserva de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)]">
                Turnos
              </span>
            </h2>

            <p className="mt-3.5 text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl">
              Cuidá tu cuerpo al nivel que tus entrenamientos exigen. Apto médico, masajes de descarga, nutrición y kinesiología para socios y público general.
            </p>
          </ScrollReveal>

          {/* Quick link button to full services page */}
          <ScrollReveal direction="right" duration={0.6} className="shrink-0">
            <Link
              to="/servicios"
              className="btn-tactile inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-brand-neon hover:text-black backdrop-blur-2xl border border-white/20 hover:border-brand-neon text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4 FEATURED SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {FEATURED_SERVICES.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <ScrollReveal
                key={srv.id}
                direction="up"
                delay={idx * 0.08}
                duration={0.5}
                className="h-full flex"
              >
                <div className="group relative flex flex-col justify-between w-full rounded-3xl bg-[#070b10] hover:bg-[#0a111a] border border-white/10 hover:border-brand-neon/50 shadow-xl hover:shadow-[0_12px_40px_rgba(0,242,254,0.18)] transition-all duration-300 overflow-hidden">
                  
                  {/* Top image banner with gradient */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <img 
                      src={srv.image} 
                      alt={srv.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-[#070b10]/60 to-transparent" />
                    
                    {/* Top tags on image */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-brand-neon flex items-center gap-1.5">
                        <IconComponent className="w-3 h-3 text-brand-neon" />
                        <span>{srv.tag}</span>
                      </span>

                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[10px] font-extrabold uppercase tracking-wide text-white">
                        {srv.badge}
                      </span>
                    </div>

                    {/* Service quick duration pill */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-3 text-xs text-slate-300">
                      <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-brand-neon" />
                        <span>{srv.duration}</span>
                      </span>
                      <span className="text-[11px] text-cyan-300 font-medium">
                        {srv.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-black tracking-wide text-white group-hover:text-brand-neon transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-brand-neon/90 font-semibold uppercase tracking-wider mt-1 mb-3">
                        {srv.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-5">
                        {srv.description}
                      </p>

                      {/* Benefits / Highlights */}
                      <div className="space-y-2 mb-6 pt-2 border-t border-white/10">
                        {srv.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-brand-neon shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenBooking(srv.id)}
                        className="btn-tactile flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all cursor-pointer group/btn"
                      >
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span>Reservar Turno</span>
                      </button>

                      <Link
                        to={`/servicios?servicio=${srv.id}`}
                        className="btn-tactile inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <span>Más info</span>
                        <ArrowRight className="w-3 h-3 text-brand-neon" />
                      </Link>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* 3-STEP BOOKING FLOW BANNER */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="rounded-3xl bg-gradient-to-r from-[#09111c] via-[#0b1626] to-[#09111c] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-neon/10 rounded-full blur-[140px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-neon block mb-2">
                  SIMPLE, RÁPIDO Y OFICIAL
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  ¿Cómo sacar tu turno en 3 simples pasos?
                </h4>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Elegí tu Servicio</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Apto médico con ECG, masajes, nutrición o kine.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Coordiná Fecha & Sede</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Elegí día en Bella Vista (Pacífico/Ricchieri) o Muñiz.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Asistí & Entrená</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Atención puntual con profesionales matriculados.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
                <Link
                  to="/servicios"
                  className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all cursor-pointer group"
                >
                  <span>Ver página completa de servicios</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/5491144724002?text=%C2%A1Hola%20FB%20SEVEN!%20Quisiera%20consultar%20por%20un%20turno%20para%20los%20servicios%20de%20salud,%20apto%20m%C3%A9dico%20o%20masajes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-emerald-500 hover:text-black backdrop-blur-md border border-white/20 hover:border-emerald-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Consultar WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Embedded Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

    </section>
  );
};
