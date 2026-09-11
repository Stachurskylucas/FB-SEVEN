import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  MapPin, 
  Sparkles, 
  User, 
  Phone, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { GYM_SERVICES, SEDES_LIST } from '../data/servicesData';
import { sanitizeInput } from '../utils/security';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialSedeId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialSedeId
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || GYM_SERVICES[0].id);
  const [selectedSedeId, setSelectedSedeId] = useState<string>(initialSedeId || SEDES_LIST[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('tarde');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isMember, setIsMember] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync initial state when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialServiceId) {
        setSelectedServiceId(initialServiceId);
      }
      if (initialSedeId) {
        setSelectedSedeId(initialSedeId);
      }
      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      if (!selectedDate) {
        setSelectedDate(today);
      }
      setIsSubmitted(false);
      setErrorMsg(null);
    }
  }, [isOpen, initialServiceId, initialSedeId]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const selectedService = GYM_SERVICES.find(s => s.id === selectedServiceId) || GYM_SERVICES[0];
  const selectedSede = SEDES_LIST.find(s => s.id === selectedSedeId) || SEDES_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bot trap
    if (honeypot.trim().length > 0) return;

    // Sanitization & Validation
    const cleanName = sanitizeInput(fullName);
    const cleanPhone = sanitizeInput(phone);
    const cleanNotes = sanitizeInput(notes).slice(0, 300);

    if (!cleanName || cleanName.length < 3) {
      setErrorMsg('Por favor ingresá tu nombre y apellido completo.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 6) {
      setErrorMsg('Por favor ingresá un número de teléfono o WhatsApp válido.');
      return;
    }

    if (!selectedDate) {
      setErrorMsg('Por favor seleccioná una fecha de preferencia para tu turno.');
      return;
    }

    setErrorMsg(null);

    // Format time slot description
    const timeLabels: Record<string, string> = {
      manana: 'Mañana (08:00 a 12:00 hs)',
      tarde: 'Mediodía / Tarde (13:00 a 17:00 hs)',
      noche: 'Vespertino / Noche (17:00 a 21:00 hs)'
    };
    const timeText = timeLabels[timeSlot] || 'A convenir';

    // Format WhatsApp message
    let msg = `¡Hola FB SEVEN! 🗓️ Deseo solicitar un turno:\n\n`;
    msg += `• *Servicio:* ${selectedService.title}\n`;
    msg += `• *Sede:* ${selectedSede.name} (${selectedSede.address})\n`;
    msg += `• *Fecha preferida:* ${selectedDate}\n`;
    msg += `• *Franja horaria:* ${timeText}\n`;
    msg += `• *Nombre:* ${cleanName}\n`;
    msg += `• *Teléfono:* ${cleanPhone}\n`;
    msg += `• *¿Es socio de FB SEVEN?:* ${isMember ? 'Sí, socio activo' : 'No, particular'}\n`;
    if (cleanNotes) {
      msg += `• *Motivo / Detalle:* ${cleanNotes}\n`;
    }
    msg += `\n¿Tienen disponibilidad en esa fecha y horario? Muchas gracias.`;

    const waUrl = `https://wa.me/${selectedSede.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#090d14] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-white max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[11px] font-bold uppercase tracking-widest mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserva de Turnos Online</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                    Agendá tu Turno en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300">FB SEVEN</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Completá el formulario para coordinar tu cita en la sede y horario que prefieras. Te confirmamos por WhatsApp en minutos.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot Bot Trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* 1. Seleccionar Servicio */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      1. Servicio que necesitás <span className="text-brand-neon">*</span>
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors cursor-pointer"
                    >
                      {GYM_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id} className="bg-neutral-900 text-white">
                          {srv.title} ({srv.categoryLabel})
                        </option>
                      ))}
                    </select>
                    {selectedService.specialist && (
                      <p className="text-[11px] text-brand-neon/90 mt-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>A cargo de: {selectedService.specialist}</span>
                      </p>
                    )}
                  </div>

                  {/* 2. Seleccionar Sede */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      2. Sede para tu atención <span className="text-brand-neon">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {SEDES_LIST.map((sede) => {
                        const isSelected = selectedSedeId === sede.id;
                        return (
                          <button
                            type="button"
                            key={sede.id}
                            onClick={() => setSelectedSedeId(sede.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-neon/15 border-brand-neon text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:border-white/30 hover:bg-white/[0.08]'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-neon' : 'text-slate-400'}`} />
                              <span>{sede.name.split('(')[0]}</span>
                            </div>
                            <span className="text-[10px] text-slate-400 block line-clamp-1">
                              {sede.address}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Fecha y Franja Horaria */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        3. Fecha de preferencia <span className="text-brand-neon">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        Franja horaria preferida <span className="text-brand-neon">*</span>
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full p-3 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="manana" className="bg-neutral-900 text-white">Mañana (08:00 a 12:00 hs)</option>
                        <option value="tarde" className="bg-neutral-900 text-white">Mediodía / Tarde (13:00 a 17:00 hs)</option>
                        <option value="noche" className="bg-neutral-900 text-white">Vespertino / Noche (17:00 a 21:00 hs)</option>
                      </select>
                    </div>
                  </div>

                  {/* 4. Datos del Atleta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        4. Nombre y Apellido <span className="text-brand-neon">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre completo"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        Teléfono / WhatsApp <span className="text-brand-neon">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="Ej: 11 4472-4002"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Condición de Socio */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      ¿Sos socio activo de FB SEVEN?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setIsMember(true)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          isMember
                            ? 'bg-brand-neon/15 border-brand-neon text-brand-neon shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                            : 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Sí, soy socio activo</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMember(false)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          !isMember
                            ? 'bg-brand-neon/15 border-brand-neon text-brand-neon shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                            : 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>No, particular / externo</span>
                      </button>
                    </div>
                    {isMember && (
                      <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Accedés al beneficio o arancel preferencial para socios de FB SEVEN.</span>
                      </p>
                    )}
                  </div>

                  {/* 6. Observaciones */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Consulta, dolor o motivo particular (opcional)
                    </label>
                    <textarea
                      rows={2}
                      maxLength={300}
                      placeholder="Ej: Tengo dolor cervical y contracturas en trapecios / Necesito el apto médico para empezar musculación esta semana..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Feedback */}
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-brand-neon hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] cursor-pointer transition-all"
                    >
                      <MessageCircle className="w-5 h-5 fill-black text-transparent" />
                      <span>Confirmar y Enviar Turno por WhatsApp</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2.5">
                      Te derivamos directo a la sede seleccionada para confirmar horario y profesional disponible.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              /* Success Confirmation Screen */
              <div className="text-center py-8 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                </div>

                <h3 className="text-2xl font-display font-black uppercase text-white tracking-tight mb-2">
                  ¡Solicitud de Turno Generada!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Se abrió tu conversación de WhatsApp con <span className="text-brand-neon font-bold">{selectedSede.name}</span>. Si la aplicación no se abrió automáticamente, tocá el botón de abajo.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left max-w-md mx-auto mb-6 text-xs space-y-1.5 text-slate-300">
                  <p><strong className="text-white">Servicio:</strong> {selectedService.title}</p>
                  <p><strong className="text-white">Sede:</strong> {selectedSede.name}</p>
                  <p><strong className="text-white">Fecha solicitada:</strong> {selectedDate}</p>
                  <p><strong className="text-white">Franja horaria:</strong> {timeSlot.toUpperCase()}</p>
                  <p><strong className="text-white">Atleta:</strong> {fullName} ({phone})</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-neon text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                  >
                    Reabrir WhatsApp
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
