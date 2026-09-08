import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import {
  getOrCreateCsrfToken,
  validateCsrfToken,
  checkSubmissionRateLimit,
  sanitizeInput,
  executeRecaptcha
} from '../utils/security';

export const ContactoPage: React.FC = () => {
  // Form: Inscripción
  const [fullName, setFullName] = useState('');
  const [selectedSede, setSelectedSede] = useState('Sede Pacífico (Av. Senador Morón 1450)');
  const [selectedDiscipline, setSelectedDiscipline] = useState('Musculación & Biomecánica');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCsrfToken(getOrCreateCsrfToken());
  }, []);

  const contactEmail = 'rrhh@fbseven.com';

  const sedesList = [
    'Sede Pacífico (Av. Senador Morón 1450)',
    'Sede Ricchieri (Av. Teniente Ricchieri 691)',
    'Sede Muñiz (Av. León Gallardo 70)'
  ];

  const disciplinesList = [
    'Musculación & Biomecánica',
    'Pase Black Multisede (3 Sedes)',
    'Pilates Reformer',
    'Boxeo & Funcional Box',
    'Running Team',
    'Funcional & HIIT',
    'Training Personalizado 1 a 1',
    'Kinesiología & Rehabilitación',
    'Nutrición Deportiva ISAK',
    'Clase de Prueba'
  ];

  const handleInscripcionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (honeypot.trim().length > 0) {
      console.warn('[Security] Bot trapped by honeypot.');
      return;
    }

    // 2. Anti-CSRF Token check
    if (!validateCsrfToken(csrfToken)) {
      setErrorMessage('Error de seguridad (CSRF inválido). Recargá la página.');
      return;
    }

    // 3. Rate-limiting check
    const rateCheck = checkSubmissionRateLimit(5);
    if (!rateCheck.allowed) {
      setErrorMessage(`Aguardá ${rateCheck.waitSeconds} segundos antes de volver a enviar.`);
      return;
    }

    // 4. Input sanitization
    const cleanName = sanitizeInput(fullName);
    const cleanMessage = sanitizeInput(message).slice(0, 400);

    if (!cleanName) {
      setErrorMessage('Por favor completá tu nombre y apellido.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // 5. reCAPTCHA v3
      await executeRecaptcha('contacto_page_submit');

      let text = `¡Hola FB SEVEN! Mi nombre es ${cleanName}.\n`;
      text += `Me interesa consultar por: ${selectedDiscipline} en ${selectedSede}.\n`;
      if (cleanMessage) {
        text += `Consulta: ${cleanMessage}`;
      }

      const waUrl = `https://wa.me/5491144724002?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      setErrorMessage('Ocurrió un error al procesar la solicitud.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <>
      <SEO
        title="Contacto & Inscripciones | FB SEVEN Training (Sedes Pacífico, Ricchieri y Muñiz)"
        description="Anotate para entrenar en FB SEVEN Training o sumate a nuestro equipo docente y de recepción. Atención directa por WhatsApp."
        canonicalUrl="https://fbsevengym.com/contacto"
      />

      <div className="pt-28 pb-32 bg-gradient-to-b from-[#020813] via-[#051324] to-black text-white min-h-screen relative overflow-hidden flex flex-col justify-center">
        
        {/* Luces y color de fondo dinámicos */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-neon/15 rounded-full blur-[220px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[250px] pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-[650px] h-[500px] bg-blue-600/15 rounded-full blur-[220px] pointer-events-none" />
        
        {/* Textura sutil */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 242, 254, 0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-[1250px] mx-auto px-5 sm:px-8 relative z-10 w-full">
          
          {/* TÍTULO DESTACADO CON ONDA */}
          <ScrollReveal direction="down" duration={0.6} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.28em] text-brand-neon uppercase block mb-3">
              Atención Directa
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] text-white">
              Contacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(0,242,254,0.6)]">FB SEVEN</span>
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Inscribite para comenzar a entrenar o sumate a nuestro equipo de trabajo en Bella Vista y San Miguel.
            </p>
          </ScrollReveal>

          {/* 2 COLUMNAS: IZQUIERDA (INSCRIPCIÓN) / DERECHA (TRABAJAR CON NOSOTROS - MAIL) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
            
            {/* ── COLUMNA IZQUIERDA: FORMULARIO DE INSCRIPCIÓN ── */}
            <ScrollReveal direction="left" duration={0.7} className="relative rounded-3xl bg-[#080e18]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Top specular crystal line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <h2 className="text-lg sm:text-xl font-display font-black uppercase text-white tracking-tight">
                    Inscripción & Planes
                  </h2>
                  <span className="text-[10px] font-mono text-brand-neon font-bold uppercase tracking-wider">
                    Alumnos
                  </span>
                </div>

                <form onSubmit={handleInscripcionSubmit} className="space-y-4">
                  {/* Anti-CSRF Token y Honeypot */}
                  <input type="hidden" name="_csrf" value={csrfToken} />
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <input
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>
                  
                  {/* Sede desplegable */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Elegir Sede
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSede}
                        onChange={(e) => setSelectedSede(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white text-xs sm:text-sm focus:border-brand-neon focus:outline-none appearance-none pr-9 cursor-pointer transition-colors"
                      >
                        {sedesList.map((s) => (
                          <option key={s} value={s} className="bg-neutral-950 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Actividad o Plan desplegable */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Actividad o Plan
                    </label>
                    <div className="relative">
                      <select
                        value={selectedDiscipline}
                        onChange={(e) => setSelectedDiscipline(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white text-xs sm:text-sm focus:border-brand-neon focus:outline-none appearance-none pr-9 cursor-pointer transition-colors"
                      >
                        {disciplinesList.map((d) => (
                          <option key={d} value={d} className="bg-neutral-950 text-white">
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Nombre y Apellido */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nombre y Apellido <span className="text-brand-neon">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Tu nombre completo"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-brand-neon focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Mensaje opcional con límite y contador */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Consulta (Opcional)
                      </label>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {message.length}/400
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      maxLength={400}
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, 400))}
                      placeholder="Aranceles, promociones bancarias, clases de prueba..."
                      className="w-full px-3.5 py-2 rounded-xl bg-black/80 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-brand-neon focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Error display */}
                  {errorMessage && (
                    <p className="text-xs text-red-400 font-medium">
                      {errorMessage}
                    </p>
                  )}

                  {/* Botón Consultar */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] disabled:opacity-50"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                      <span>{isSubmitting ? 'Procesando...' : 'Enviar Consulta por WhatsApp'}</span>
                    </button>

                    <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                      Al enviar el formulario, serás redirigido a WhatsApp para continuar la conversación de forma directa. No almacenamos tus datos en servidores de esta web.
                    </p>
                  </div>

                </form>
              </div>
            </ScrollReveal>

          {/* ── COLUMNA DERECHA: TRABAJAR CON NOSOTROS (INFORMACIÓN & MAIL) ── */}
          <ScrollReveal direction="right" duration={0.6} className="h-full">
            <div className="relative h-full rounded-3xl bg-[#060c14]/85 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_12px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(0,242,254,0.12)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
              
              {/* Top specular crystal line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <h2 className="text-lg sm:text-xl font-display font-black uppercase text-white tracking-tight">
                    Trabajar con nosotros
                  </h2>
                  <span className="text-[10px] font-mono text-brand-neon font-bold uppercase tracking-wider">
                    Staff & Carreras
                  </span>
                </div>

                <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Buscamos profesionales apasionados por el entrenamiento físico, la kinesiología y la salud para sumar a nuestras sedes de <strong className="text-white">Bella Vista y San Miguel</strong>.
                  </p>

                  {/* Card destacada con el correo */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-3">
                    <div className="flex items-center gap-2.5 text-brand-neon font-bold text-xs uppercase tracking-wider font-mono">
                      <Mail className="w-4 h-4 text-brand-neon shrink-0" />
                      <span>Envío de CV por correo</span>
                    </div>

                    <p className="text-xs text-slate-300">
                      Envianos tu currículum vitae indicando en el asunto tu puesto de interés y disponibilidad:
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                      <a
                        href={`mailto:${contactEmail}?subject=Postulaci%C3%B3n%20Laboral%20-%20FB%20SEVEN`}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-mono text-xs sm:text-sm font-bold flex items-center justify-between transition-colors group"
                      >
                        <span className="text-brand-neon">{contactEmail}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-neon transition-colors" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs text-slate-300 hover:text-white font-semibold transition-colors cursor-pointer shrink-0 text-center"
                      >
                        {copiedEmail ? '¡Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                  {/* Mini cards informativas sobre qué perfiles buscamos */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Áreas y perfiles habituales:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="font-bold text-white block mb-0.5">Entrenadores & Coaches</span>
                        <span className="text-slate-400 text-[11px]">Musculación, Pilates, Boxeo y Running</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="font-bold text-white block mb-0.5">Salud & Bienestar</span>
                        <span className="text-slate-400 text-[11px]">Kinesiología, Nutrición y Masoterapia</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 sm:col-span-2">
                        <span className="font-bold text-white block mb-0.5">Recepción & Atención</span>
                        <span className="text-slate-400 text-[11px]">Atención a socios, admisiones y soporte en sede</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Botón directo de envío de mail */}
              <div className="pt-5">
                <a
                  href={`mailto:${contactEmail}?subject=Postulaci%C3%B3n%20Laboral%20-%20FB%20SEVEN`}
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-brand-neon border border-white/20 hover:border-brand-neon text-white hover:text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Enviar CV por Mail</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactoPage;
