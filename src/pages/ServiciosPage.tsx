import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  Search, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { GYM_SERVICES, SERVICES_CATEGORIES } from '../data/servicesData';
import { BookingModal } from '../components/BookingModal';

export const ServiciosPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [activeServiceForBooking, setActiveServiceForBooking] = useState<string | undefined>(undefined);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Read URL query params (e.g. /servicios?servicio=apto-medico or /servicios?categoria=masajes)
  useEffect(() => {
    window.scrollTo(0, 0);
    const cat = searchParams.get('categoria');
    const srv = searchParams.get('servicio');
    if (cat && SERVICES_CATEGORIES.some(c => c.id === cat)) {
      setSelectedCategory(cat);
    }
    if (srv) {
      const match = GYM_SERVICES.find(s => s.id === srv);
      if (match) {
        setActiveServiceForBooking(match.id);
        setBookingModalOpen(true);
      }
    }
  }, [searchParams]);

  // Filtered Services
  const filteredServices = useMemo(() => {
    return GYM_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        service.title.toLowerCase().includes(q) ||
        service.subtitle.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.benefits.some(b => b.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenBooking = (serviceId?: string) => {
    setActiveServiceForBooking(serviceId);
    setBookingModalOpen(true);
  };

  const servicesFaqs = [
    {
      q: '¿Es necesario ser socio de FB SEVEN para utilizar estos servicios?',
      a: '¡No! Todos nuestros servicios profesionales (Apto Médico, Nutrición, Masajes, Kinesiología y Training 1 a 1) están abiertos al público general de Bella Vista, Muñiz y alrededores. Si ya sos socio activo del gimnasio, contás con aranceles preferenciales y descuentos exclusivos.'
    },
    {
      q: '¿El Certificado de Apto Médico es válido para otros lugares o eventos?',
      a: 'Sí, totalmente. El apto médico emitido en FB SEVEN cuenta con la firma y sello de médicos deportólogos y cardiólogos con matrícula nacional y provincial. Tiene una validez legal de 1 (un) año y es aceptado en cualquier gimnasio, federación deportiva, torneos o maratones.'
    },
    {
      q: '¿Cómo se abonan las consultas o sesiones?',
      a: 'Podés abonar en recepción con efectivo, transferencia bancaria o tarjetas de débito y crédito a través de Mercado Pago. También ofrecemos packs de 4 y 8 sesiones para masajes y training con valores promocionales.'
    },
    {
      q: '¿Con cuánta anticipación conviene solicitar el turno?',
      a: 'Para Apto Médico y Nutrición disponemos de turnos semanales programados y guardias médicas periódicas. Para Masajes Terapéuticos y Kinesiología recomendamos reservar con 24 a 48 hs de antelación para asegurar tu franja horaria preferida.'
    }
  ];

  return (
    <>
      <SEO
        title="Servicios Profesionales & Turnos | FB SEVEN TRAINING"
        description="Apto médico oficial con electrocardiograma, masajes deportivos de descarga, nutrición deportiva con antropometría ISAK y kinesiología en Bella Vista y Muñiz. Reservá tu turno online."
        canonicalUrl="https://fbsevengym.com/servicios"
      />

      <main className="min-h-screen bg-black text-white pt-24 sm:pt-28 pb-20 relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-neon/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* 1. Header Hero */}
          <ScrollReveal direction="down" duration={0.7} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-neon mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <HeartPulse className="w-4 h-4 text-brand-neon animate-pulse" />
              <span>Gabinete Médico, Salud & Alto Rendimiento</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase text-white leading-tight">
              Servicios Profesionales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)]">
                & Reserva de Turnos
              </span>
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
              Cuidá tu salud y llevá tu rendimiento al máximo nivel. Apto médico oficial, masajes de descarga muscular, nutrición con antropometría ISAK y kinesiología en nuestras sedes de Bella Vista y Muñiz.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenBooking()}
                className="px-6 py-3.5 rounded-2xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Turno Ahora</span>
              </button>
              <a
                href="https://wa.me/5491144724002?text=¡Hola%20FB%20SEVEN!%20Quisiera%20consultar%20por%20los%20servicios%20de%20salud,%20apto%20médico%20y%20masajes."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-brand-neon" />
                <span>Consulta Rápida por WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>

          {/* 2. Search & Category Filter Bar */}
          <div className="mb-12 space-y-4">
            {/* Search Input */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar servicio (ej: apto médico, descontracturante, antropometría)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#090d14]/90 border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-500 transition-colors shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
              {SERVICES_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-neon text-black shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                        : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 border border-white/10 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {filteredServices.map((service, index) => (
                <ScrollReveal
                  key={service.id}
                  direction="up"
                  duration={0.6}
                  delay={(index % 3) * 0.1}
                  className="h-full"
                >
                  <div className="h-full flex flex-col bg-[#090d14]/90 border border-neutral-800/90 rounded-3xl overflow-hidden hover:border-brand-neon/60 transition-all duration-300 shadow-xl group hover:shadow-[0_10px_35px_rgba(0,242,254,0.15)]">
                    
                    {/* Image Header with Badge */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-black/30 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/20 text-brand-neon">
                          {service.categoryLabel}
                        </span>
                        {service.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-neon/20 border border-brand-neon/50 text-brand-neon backdrop-blur-md">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Duration & Sedes Pill */}
                      <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-[11px] font-semibold text-slate-200">
                        <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                          <Clock className="w-3 h-3 text-brand-neon" />
                          <span>{service.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        <h3 className="text-xl font-display font-black uppercase text-white tracking-tight group-hover:text-brand-neon transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs font-semibold text-cyan-300 mt-1">
                          {service.subtitle}
                        </p>
                        
                        <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-normal">
                          {service.description}
                        </p>

                        {/* Specialist Callout */}
                        {service.specialist && (
                          <div className="mt-3.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                            <span><strong>Profesional:</strong> {service.specialist}</span>
                          </div>
                        )}

                        {/* Sedes Available */}
                        <div className="mt-3.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            Disponible en:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.sedes.map((s, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 text-[10.5px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-slate-300">
                                <MapPin className="w-2.5 h-2.5 text-brand-neon" />
                                <span>{s}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Benefits Checklist */}
                        <div className="mt-4 pt-4 border-t border-neutral-800/80">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            Qué incluye el servicio:
                          </span>
                          <ul className="space-y-1.5">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-brand-neon shrink-0 mt-0.5" />
                                <span className="leading-snug">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Member Benefit Callout */}
                        {service.memberBenefit && (
                          <div className="mt-4 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                            <span><strong>Beneficio Socios:</strong> {service.memberBenefit}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => handleOpenBooking(service.id)}
                          className="w-full py-3 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Reservar Turno</span>
                        </button>
                        <a
                          href={`https://wa.me/5491144724002?text=${encodeURIComponent(`¡Hola FB SEVEN! Quisiera consultar detalles y aranceles para el servicio de: ${service.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto p-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-300 hover:text-white transition-all flex items-center justify-center"
                          aria-label={`Consultar por WhatsApp ${service.title}`}
                        >
                          <MessageCircle className="w-4 h-4 text-brand-neon" />
                        </a>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#090d14] rounded-3xl border border-neutral-800 p-8 max-w-lg mx-auto mb-20">
              <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white uppercase">No encontramos servicios con ese criterio</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Probá con otra palabra o seleccioná otra categoría.</p>
              <button
                onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-brand-neon text-black font-bold text-xs uppercase tracking-wider"
              >
                Ver todos los servicios
              </button>
            </div>
          )}

          {/* 4. Cómo Funciona el Sistema de Turnos (3 Pasos) */}
          <ScrollReveal direction="up" duration={0.7} className="mb-20">
            <div className="bg-gradient-to-r from-[#060b13] via-[#09121d] to-[#060b13] border border-neutral-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-brand-neon text-[11px] font-bold uppercase tracking-widest block mb-1">
                  Atención Rápida & Sin Fila
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
                  ¿Cómo Agendar tu Turno en 3 Pasos?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-brand-neon/20 border border-brand-neon text-brand-neon font-black flex items-center justify-center mx-auto text-sm">
                    1
                  </div>
                  <h4 className="text-sm font-bold uppercase text-white">Elegí tu Servicio & Sede</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Seleccioná qué prestación necesitás y la sede que te quede más cómoda: Pacífico, Ricchieri o Muñiz.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-brand-neon/20 border border-brand-neon text-brand-neon font-black flex items-center justify-center mx-auto text-sm">
                    2
                  </div>
                  <h4 className="text-sm font-bold uppercase text-white">Definí Día & Horario</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Indicá qué fecha y franja horaria preferís (mañana, tarde o noche) junto a tus datos de contacto.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-brand-neon/20 border border-brand-neon text-brand-neon font-black flex items-center justify-center mx-auto text-sm">
                    3
                  </div>
                  <h4 className="text-sm font-bold uppercase text-white">Confirmación por WhatsApp</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Te derivamos directo a WhatsApp con el turno armado y el equipo de recepción te confirma la cita en minutos.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 5. Preguntas Frecuentes de Servicios */}
          <ScrollReveal direction="up" duration={0.7} className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-brand-neon" />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
                Dudas Comunes sobre los Servicios
              </h2>
            </div>

            <div className="space-y-3">
              {servicesFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-neutral-800 rounded-2xl bg-[#090d14]/80 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-neon transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* 6. Bottom Banner CTA */}
          <ScrollReveal direction="up" duration={0.8} className="text-center">
            <div className="bg-[#0b1019] border border-brand-neon/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-neon/15 rounded-full blur-[100px] pointer-events-none" />
              
              <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mb-3">
                ¿Listo para Empezar a Entrenar con Salud?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
                Obtené tu apto médico oficial, organizá tu plan nutricional o relajá tus músculos tras una semana intensa.
              </p>

              <button
                type="button"
                onClick={() => handleOpenBooking()}
                className="btn-tactile inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-neon hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Turno Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

        </div>
      </main>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={activeServiceForBooking}
      />
    </>
  );
};

export default ServiciosPage;
