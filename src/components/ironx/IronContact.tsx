import React, { useState } from 'react';
import { MessageCircle, MapPin, Send, Check } from 'lucide-react';
import { GYM_SEDES } from '../../data/gymData';

export const IronContact: React.FC = () => {
  const [selectedSede, setSelectedSede] = useState('pacifico');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sedeObj = GYM_SEDES.find(s => s.id === selectedSede) || GYM_SEDES[0];
    const text = `¡Hola FB SEVEN! Mi nombre es ${name || 'un interesado'}.
Quiero consultar por la sede: ${sedeObj.name}.
Teléfono: ${phone || 'No indicado'}
Consulta: ${message || 'Quisiera conocer días, horarios y valores para comenzar.'}`;

    window.open(`https://wa.me/${sedeObj.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-28 sm:py-36 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                ( CONTACTO & RECEPCIÓN )
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
                Empezá a Entrenar <span className="text-brand-neon">Hoy</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Escribinos tu consulta o acercate a cualquiera de nuestras 3 sedes en Bella Vista y Muñiz para conocer las instalaciones y coordinar tu clase de prueba.
              </p>
            </div>

            {/* Sede direct addresses */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              {GYM_SEDES.map(s => (
                <div key={s.id} className="p-4 bg-[#121212] border border-neutral-800/80">
                  <span className="text-xs font-bold text-white uppercase block">{s.name}</span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                    {s.address} ({s.zone})
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5491144724002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-brand-neon hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CANAL DIRECTO WHATSAPP: +54 9 11 4472-4002</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-neutral-800 p-8 sm:p-12 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white mb-2">
              Escribinos Directo
            </h3>
            <p className="text-xs text-neutral-400 mb-8 font-mono">
              Completá tus datos y te derivamos al WhatsApp del equipo de sala.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  ¿Qué sede querés consultar?
                </label>
                <select
                  value={selectedSede}
                  onChange={(e) => setSelectedSede(e.target.value)}
                  className="w-full p-4 bg-[#0a0a0a] border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none transition-colors"
                >
                  {GYM_SEDES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.address})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    Tu Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Lucas Rossi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-[#0a0a0a] border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 11 1234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-4 bg-[#0a0a0a] border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Mensaje o Consulta
                </label>
                <textarea
                  rows={3}
                  placeholder="¿Cuáles son los horarios y costos para comenzar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 bg-[#0a0a0a] border border-neutral-800 text-white text-sm focus:border-brand-neon focus:outline-none placeholder:text-neutral-600 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-brand-neon text-black font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>ABRIR CHAT EN WHATSAPP</span>
              </button>

              {sent && (
                <div className="flex items-center justify-center gap-2 text-brand-neon text-xs font-mono pt-2">
                  <Check className="w-4 h-4" />
                  <span>¡Redirigiendo a WhatsApp oficial!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IronContact;
