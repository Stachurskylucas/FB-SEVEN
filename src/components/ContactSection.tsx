import React, { useState, useEffect } from 'react';
import { GYM_SEDES } from '../data/gymData';
import { MessageCircle, Check, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { Magnet } from './reactbits/Magnet';
import { ScrollReveal } from './ui/ScrollReveal';
import { DotField } from './reactbits/DotField';
import { 
  getOrCreateCsrfToken, 
  validateCsrfToken, 
  checkSubmissionRateLimit, 
  sanitizeInput, 
  executeRecaptcha 
} from '../utils/security';

export const ContactSection: React.FC = () => {
  const [selectedSedeId, setSelectedSedeId] = useState<'pacifico' | 'ricchieri' | 'muniz'>('pacifico');
  const [fullName, setFullName] = useState('');
  const [activity, setActivity] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar token anti-CSRF al montar el componente
  useEffect(() => {
    setCsrfToken(getOrCreateCsrfToken());
  }, []);

  const sedesOptions = [
    { id: 'pacifico', name: 'Sede Pacífico', desc: 'Ex Cine Gran Pacífico' },
    { id: 'ricchieri', name: 'Sede Ricchieri', desc: 'Bella Vista' },
    { id: 'muniz', name: 'Sede Muñiz', desc: 'León Gallardo' },
  ];

  const activitiesList = [
    'Musculación & Biomecánica',
    'Pase Libre Multisede',
    'Training Personalizado 1 a 1',
    'Training Asistido (Packs x8 y x12)',
    'Pilates Reformer',
    'Masajes Deportivos & Fisioterapia',
    'FB SEVEN Running Team',
    'Boxeo & Funcional Box',
    'Nutrición Deportiva & Antropometría ISAK',
    'Clase de Prueba / Consulta General'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Detección Bot Honeypot: si el campo oculto fue llenado, es un bot
    if (honeypot.trim().length > 0) {
      console.warn('[Security] Bot submission blocked by honeypot.');
      return;
    }

    // 2. Validación de Token Anti-CSRF
    if (!validateCsrfToken(csrfToken)) {
      setFormError('Error de seguridad (CSRF inválido). Por favor recargá la página.');
      return;
    }

    // 3. Rate-Limiting en Frontend (anti-flood/spam)
    const rateCheck = checkSubmissionRateLimit(5);
    if (!rateCheck.allowed) {
      setFormError(`Por favor aguardá ${rateCheck.waitSeconds} segundos antes de volver a enviar.`);
      return;
    }

    // 4. Sanitización estricta contra XSS
    const cleanName = sanitizeInput(fullName);
    const cleanActivity = sanitizeInput(activity);
    const cleanMessage = sanitizeInput(userMessage).slice(0, 400);

    if (!cleanName) {
      setFormError('Por favor, ingresá tu nombre y apellido.');
      return;
    }

    if (!cleanActivity) {
      setFormError('Por favor, seleccioná una actividad o plan de interés.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      // 5. Verificación reCAPTCHA v3 invisible
      await executeRecaptcha('contact_form_submit');

      const sedeObj = GYM_SEDES.find(s => s.id === selectedSedeId) || GYM_SEDES[0];

      // Formatear el mensaje de salida de manera ordenada
      let message = `¡Hola FB SEVEN! Mi nombre es ${cleanName}.\n`;
      message += `Me interesa consultar por: ${cleanActivity} en ${sedeObj.name} (${sedeObj.address}).\n`;
      if (cleanMessage) {
        message += `Consulta: ${cleanMessage}`;
      }

      const waUrl = `https://wa.me/${sedeObj.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setFormError('Ocurrió un inconveniente al validar el formulario. Reintentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-gradient-to-b from-black via-[#08121d] to-black text-white relative overflow-hidden">
      
      {/* Top and bottom subtle blend fades for seamless black transitions */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* React Bits Interactive DotField Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-45">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={55}
          glowRadius={150}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(0, 242, 254, 0.45)"
          gradientTo="rgba(0, 150, 255, 0.25)"
          glowColor="#00f2fe"
        />
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-neon/6 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header con animación suave */}
        <ScrollReveal direction="left" duration={0.7} className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-[11px] font-semibold uppercase tracking-widest text-brand-neon mb-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.3)]">
            <Send className="w-3 h-3 text-brand-neon" />
            <span>Inscripciones & Cupos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
            Anotate en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.75)]">FB SEVEN</span>
          </h2>
          <p className="mt-2.5 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-normal">
            Completá tus datos y te derivamos directamente con el equipo de la sede que elijas.
          </p>
        </ScrollReveal>

        {/* The Form Card */}
        <ScrollReveal direction="right" duration={0.7} delay={0.12} className="bg-[#090c11]/90 border border-neutral-800/90 rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Medidas de Seguridad: Anti-CSRF Token y Honeypot Oculto */}
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
            
            {/* 1. Sede Selection Buttons: Efecto Cristalino (GlassSurface) */}
            <div>
              <label className="text-xs font-bold tracking-wider text-slate-300 uppercase block mb-3">
                1. Elegí tu sede para anotarte
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sedesOptions.map((s) => {
                  const isSelected = selectedSedeId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSedeId(s.id as 'pacifico' | 'ricchieri' | 'muniz')}
                      className={`btn-tactile relative p-3.5 rounded-2xl text-left border cursor-pointer overflow-hidden transition-all duration-300 w-full ${
                        isSelected
                          ? 'bg-brand-neon/15 border-brand-neon shadow-[0_0_20px_rgba(0,242,254,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)] scale-[1.02]'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-white/25'
                      }`}
                      style={{ WebkitBackdropFilter: 'blur(20px)' }}
                    >
                      {/* Top specular line */}
                      <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                      <span className={`text-xs sm:text-sm font-display font-black uppercase block ${isSelected ? 'text-brand-neon' : 'text-white'}`}>
                        {s.name}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5 font-normal">
                        {s.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Inputs Grid (Nombre y Apellido & Actividad de Interés) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase block mb-2">
                  2. Nombre y Apellido <span className="text-brand-neon">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellido"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  className="w-full p-4 rounded-xl bg-black/70 border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase block mb-2">
                  3. Actividad o Plan de Interés <span className="text-brand-neon">*</span>
                </label>
                <select
                  required
                  value={activity}
                  onChange={(e) => {
                    setActivity(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  className="w-full p-4 rounded-xl bg-black/70 border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="" className="bg-neutral-900 text-slate-400">Seleccionar actividad o plan...</option>
                  {activitiesList.map((act, i) => (
                    <option key={i} value={act} className="bg-neutral-900 text-white">
                      {act}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. User Message Textarea con contador de caracteres */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase block">
                  4. Mensaje o Consulta (Opcional)
                </label>
                <span className="text-[11px] text-slate-500 font-mono">
                  {userMessage.length}/400
                </span>
              </div>
              <textarea
                rows={3}
                maxLength={400}
                placeholder="¿Tenés alguna consulta puntual sobre días, profesores o sedes?"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value.slice(0, 400))}
                className="w-full p-4 rounded-xl bg-black/70 border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors resize-none"
              />
            </div>

            {/* Error Feedback */}
            {formError && (
              <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* 5. Submit Button con feedback táctil */}
            <div className="pt-2">
              <Magnet magnetStrength={0.15} className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-tactile w-full py-4 rounded-2xl bg-brand-neon hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] cursor-pointer transition-all disabled:opacity-50"
                >
                  <MessageCircle className="w-5 h-5 fill-black text-transparent" />
                  <span>{isSubmitting ? 'Procesando...' : 'Enviar Consulta por WhatsApp'}</span>
                </button>
              </Magnet>

              {/* Leyenda legal e informativa al pie del formulario */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-center text-slate-400 px-2">
                <ShieldCheck className="w-4 h-4 text-brand-neon shrink-0 hidden sm:block" />
                <p className="text-[11.5px] sm:text-xs leading-relaxed text-slate-400">
                  Al enviar el formulario, serás redirigido a WhatsApp para continuar la conversación de forma directa. No almacenamos tus datos en servidores de esta web.
                </p>
              </div>
            </div>

            {/* Success Feedback Alert */}
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>¡Redirigiendo a WhatsApp! Si no se abrió automáticamente, hacé clic nuevamente.</span>
              </div>
            )}

          </form>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;
