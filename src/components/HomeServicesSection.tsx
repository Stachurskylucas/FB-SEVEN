import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  HeartPulse, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Check, 
  MessageCircle,
  Activity,
  Flame,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { BookingModal } from './BookingModal';

export const HomeServicesSection: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('apto-medico');

  // Parallax Scroll Container
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Vertical movement and subtle scale for parallax background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-16%', '16%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  const handleOpenBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <section 
      ref={sectionRef} 
      id="servicios-preview" 
      className="relative py-20 sm:py-28 text-white overflow-hidden"
    >
      
      {/* 1. PARALLAX BACKGROUND PHOTO WITH CINEMATIC LIGHTING */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: backgroundY, scale: backgroundScale }}
          className="absolute -top-[20%] -bottom-[20%] inset-x-0 w-full h-[140%] pointer-events-none will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2400&auto=format&fit=crop"
            alt="FB SEVEN Gabinete de Salud"
            className="w-full h-full object-cover object-center brightness-[0.22] contrast-125"
          />
        </motion.div>

        {/* Gradient masks blending seamlessly with top and bottom pure black sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-[#020509]/80 backdrop-blur-[1.5px]" />

        {/* Atmospheric neon glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-neon/8 rounded-full blur-[180px]" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <ScrollReveal direction="left" duration={0.6} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-neon/10 backdrop-blur-2xl border border-brand-neon/30 text-[11px] font-bold uppercase tracking-widest text-brand-neon mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <HeartPulse className="w-3.5 h-3.5 text-brand-neon animate-pulse" />
              <span>Gabinete de Salud & Alto Rendimiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
              CUIDAMOS TU SALUD.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(0,242,254,0.6)] block sm:inline">
                MAXIMIZAMOS TU NIVEL.
              </span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              Apto médico oficial con ECG en el día, masajes de descarga descontracturante, nutrición deportiva con antropometría ISAK y kinesiología. Atención exclusiva para socios y público general en Bella Vista y Muñiz.
            </p>

            {/* Quick Trust Chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
                <span>Cardiólogos & Médicos Matriculados</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                <Check className="w-3.5 h-3.5 text-brand-neon" />
                <span>Certificado en el Acto</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
                <span>Gabinetes Climatizados</span>
              </span>
            </div>
          </ScrollReveal>

          {/* Header Action Link */}
          <ScrollReveal direction="right" duration={0.6} className="shrink-0">
            <Link
              to="/servicios"
              className="btn-tactile inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-brand-neon hover:text-black backdrop-blur-2xl border border-white/20 hover:border-brand-neon text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 3. BENTO SHOWCASE GRID */}
        <div className="space-y-6 sm:space-y-8 mb-14">
          
          {/* FEATURED HERO CARD: APTO MÉDICO OFICIAL CON ECG (WIDE HORIZONTAL CARD) */}
          <ScrollReveal direction="up" duration={0.6}>
            <div className="group relative rounded-3xl bg-[#090e17]/85 hover:bg-[#0d1421]/90 backdrop-blur-xl border border-brand-neon/30 hover:border-brand-neon/60 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(0,242,254,0.12)] transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Visual Left Column */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                    alt="Apto Médico Oficial con Electrocardiograma"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-brand-neon text-black text-[11px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.6)] flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span>Obligatorio para entrenar</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase">
                      20 - 30 min
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-brand-neon bg-black/70 px-3 py-1 rounded-full border border-brand-neon/30 backdrop-blur-md">
                      Arancel accesible • Entrega inmediata
                    </span>
                  </div>
                </div>

                {/* Content Right Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-neon uppercase tracking-wider mb-2">
                      <span>Evaluación Cardíaca & Salud Deportiva</span>
                      <span>•</span>
                      <span>Sedes Pacífico, Muñiz y Ricchieri</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white group-hover:text-brand-neon transition-colors">
                      Apto Médico Oficial con Electrocardiograma (ECG)
                    </h3>

                    <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      Examen cardiológico y clínico obligatorio realizado por médicos matriculados. Incluye electrocardiograma de 12 derivaciones de reposo con informe profesional y emisión de certificado oficial homologado para gimnasios, maratones y federaciones deportivas.
                    </p>

                    {/* Highlights Checklist */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                      <div className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span>ECG informado por cardiólogo matriculado</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span>Certificado oficial con validez de 1 año</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span>Control de presión arterial y pulso basal</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span>Turnos en el día sin demoras</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking('apto-medico')}
                      className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-black" />
                      <span>Reservar Turno para Apto Médico</span>
                    </button>

                    <a
                      href="https://wa.me/5491144724002?text=¡Hola%20FB%20SEVEN!%20Quisiera%20reservar%20un%20turno%20para%20el%20Apto%20Médico%20con%20Electrocardiograma."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.08] hover:bg-emerald-500 hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Consultar por WhatsApp</span>
                    </a>

                    <Link
                      to="/servicios?servicio=apto-medico"
                      className="btn-tactile sm:ml-auto inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs text-slate-400 hover:text-brand-neon font-semibold transition-colors"
                    >
                      <span>Ver detalles completos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* 3 COLUMNS: MASAJES, NUTRICIÓN & KINESIOLOGÍA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. MASAJE DESCONTRACTURANTE */}
            <ScrollReveal direction="up" delay={0.1} duration={0.5} className="h-full flex">
              <div className="group relative flex flex-col justify-between w-full rounded-3xl bg-[#090e17]/80 hover:bg-[#0c131f]/90 backdrop-blur-xl border border-white/10 hover:border-brand-neon/50 shadow-xl hover:shadow-[0_12px_35px_rgba(0,242,254,0.15)] transition-all duration-300 overflow-hidden">
                
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
                    alt="Masajes Descontracturantes y Descarga Muscular"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/50 to-transparent" />
                  
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-brand-neon flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-brand-neon" />
                      <span>TERAPIA MANUAL</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-extrabold text-emerald-300">
                      Más Solicitado
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 text-[11px] text-slate-300 flex items-center gap-2">
                    <Clock className="w-3 h-3 text-brand-neon" />
                    <span>50 - 60 min</span>
                    <span className="text-white/30">•</span>
                    <span className="text-cyan-300">Packs con descuento</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-xl font-display font-black text-white group-hover:text-brand-neon transition-colors">
                      Masaje Descontracturante & Descarga
                    </h4>
                    <p className="text-xs text-brand-neon/90 font-semibold uppercase mt-1 mb-3">
                      Alivio cervical, dorsal y piernas
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Terapia manual profunda para eliminar sobrecargas, disolver puntos de dolor y restablecer la movilidad muscular en gabinete privado.
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Alivio inmediato en cuello y espalda</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Aceites esenciales y cremas térmicas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Masoterapeutas profesionales</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking('masaje-descontracturante')}
                      className="btn-tactile flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reservar</span>
                    </button>
                    <Link
                      to="/servicios?servicio=masaje-descontracturante"
                      className="btn-tactile p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-brand-neon transition-colors"
                      aria-label="Ver más información"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* 2. NUTRICIÓN DEPORTIVA */}
            <ScrollReveal direction="up" delay={0.2} duration={0.5} className="h-full flex">
              <div className="group relative flex flex-col justify-between w-full rounded-3xl bg-[#090e17]/80 hover:bg-[#0c131f]/90 backdrop-blur-xl border border-white/10 hover:border-brand-neon/50 shadow-xl hover:shadow-[0_12px_35px_rgba(0,242,254,0.15)] transition-all duration-300 overflow-hidden">
                
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
                    alt="Nutrición Deportiva y Antropometría ISAK"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/50 to-transparent" />
                  
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-brand-neon flex items-center gap-1">
                      <Flame className="w-3 h-3 text-brand-neon" />
                      <span>COMPOSICIÓN CORPORAL</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-extrabold text-cyan-300">
                      Medición ISAK
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 text-[11px] text-slate-300 flex items-center gap-2">
                    <Clock className="w-3 h-3 text-brand-neon" />
                    <span>45 - 60 min</span>
                    <span className="text-white/30">•</span>
                    <span className="text-cyan-300">Presencial u Online</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-xl font-display font-black text-white group-hover:text-brand-neon transition-colors">
                      Nutrición Deportiva & ISAK
                    </h4>
                    <p className="text-xs text-brand-neon/90 font-semibold uppercase mt-1 mb-3">
                      Masa muscular, descenso de grasa y energía
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Planes nutricionales a medida según tus horarios, objetivos y entrenamiento con evaluación antropométrica de grasa y masa muscular.
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Antropometría ISAK completa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Plan 100% individualizado y flexible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Seguimiento y contacto por WhatsApp</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking('nutricion-deportiva')}
                      className="btn-tactile flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reservar</span>
                    </button>
                    <Link
                      to="/servicios?servicio=nutricion-deportiva"
                      className="btn-tactile p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-brand-neon transition-colors"
                      aria-label="Ver más información"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* 3. KINESIOLOGÍA & REHAB */}
            <ScrollReveal direction="up" delay={0.3} duration={0.5} className="h-full flex">
              <div className="group relative flex flex-col justify-between w-full rounded-3xl bg-[#090e17]/80 hover:bg-[#0c131f]/90 backdrop-blur-xl border border-white/10 hover:border-brand-neon/50 shadow-xl hover:shadow-[0_12px_35px_rgba(0,242,254,0.15)] transition-all duration-300 overflow-hidden">
                
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                    alt="Kinesiología y Readaptación Deportiva"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/50 to-transparent" />
                  
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-brand-neon flex items-center gap-1">
                      <Activity className="w-3 h-3 text-brand-neon" />
                      <span>FISIOTERAPIA & REHAB</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-[10px] font-extrabold text-purple-300">
                      Profesionales
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 text-[11px] text-slate-300 flex items-center gap-2">
                    <Clock className="w-3 h-3 text-brand-neon" />
                    <span>45 - 50 min</span>
                    <span className="text-white/30">•</span>
                    <span className="text-cyan-300">Reintegro obras sociales</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-xl font-display font-black text-white group-hover:text-brand-neon transition-colors">
                      Kinesiología & Readaptación
                    </h4>
                    <p className="text-xs text-brand-neon/90 font-semibold uppercase mt-1 mb-3">
                      Recuperación de lesiones y vuelta al entreno
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Rehabilitación funcional de tendinitis, dolencias posturales y lesiones deportivas con kinesiólogos matriculados y aparatología moderna.
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Fisioterapia y ejercicios correctivos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Vuelta progresiva al peso y carga</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                        <span>Sedes Pacífico y Muñiz</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking('kinesiologia-rehab')}
                      className="btn-tactile flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reservar</span>
                    </button>
                    <Link
                      to="/servicios?servicio=kinesiologia-rehab"
                      className="btn-tactile p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-brand-neon transition-colors"
                      aria-label="Ver más información"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* 4. FOOTER BANNER: 3 PASOS DE AGENDAMIENTO & CTA */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="rounded-3xl bg-gradient-to-r from-[#070d16]/95 via-[#0b1626]/95 to-[#070d16]/95 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <span className="text-[11px] font-black uppercase tracking-widest text-brand-neon block mb-2">
                  GESTIÓN ÁGIL Y EN EL DÍA
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  Agendá tu consulta en 3 simples pasos
                </h4>
                
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                      1
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Elegí tu Servicio</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Apto médico con ECG, masajes, nutrición o kine.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                      2
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Coordiná Fecha & Sede</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Elegí día en Bella Vista (Pacífico/Ricchieri) o Muñiz.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-neon text-black font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                      3
                    </span>
                    <div>
                      <h5 className="text-white text-xs font-bold uppercase">Asistí & Entrená</h5>
                      <p className="text-[11px] text-slate-300 mt-0.5">Atención profesional en gabinetes equipados.</p>
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
                  <span>Página de servicios completa</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/5491144724002?text=¡Hola%20FB%20SEVEN!%20Quisiera%20consultar%20por%20un%20turno%20para%20los%20servicios%20de%20salud,%20apto%20médico%20o%20masajes."
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

export default HomeServicesSection;
