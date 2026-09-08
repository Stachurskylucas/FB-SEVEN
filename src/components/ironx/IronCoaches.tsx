import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const IronCoaches: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(1);

  const coaches = [
    {
      name: 'Head Coach FB SEVEN',
      role: 'ALTO RENDIMIENTO & FUERZA',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
      bio: 'Especialista en preparación física deportiva, biomecánica y prescripción de cargas de alta intensidad.',
      whatsappMsg: 'Hola FB SEVEN! Me interesa coordinar una entrevista con el Head Coach para planificar mis metas de fuerza.'
    },
    {
      name: 'Coach Personal 1 a 1',
      role: 'BIOMECÁNICA & HIPERTROFIA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      bio: 'Atención exclusiva sesión a sesión. Ajuste milimétrico de técnica, rangos de movimiento y sobrecarga progresiva.',
      whatsappMsg: 'Hola FB SEVEN! Quiero consultar disponibilidad y aranceles para entrenamiento personalizado 1 a 1.'
    },
    {
      name: 'Instructor Pilates Reformer',
      role: 'POSTURA & CONTROL DEL CORE',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      bio: 'Desarrollo de fuerza profunda del transverso abdominal, descompresión espinal y flexibilidad miofascial.',
      whatsappMsg: 'Hola FB SEVEN! Quisiera consultar días y horarios disponibles para clases de Pilates Reformer.'
    },
    {
      name: 'Kinesiólogo & Fisioterapeuta',
      role: 'MASAJES & RECUPERACIÓN ASISTIDA',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      bio: 'Terapia manual, descarga muscular para runners y futbolistas, ventosaterapia y pistolas de percusión profunda.',
      whatsappMsg: 'Hola FB SEVEN! Me gustaría agendar una sesión de Masajes Deportivos / Descarga muscular.'
    },
    {
      name: 'Licenciada en Nutrición',
      role: 'ANTROPOMETRÍA ISAK & PLANES',
      image: 'https://images.unsplash.com/photo-1594824813581-c75249f807e3?q=80&w=800&auto=format&fit=crop',
      bio: 'Medición ISAK de pliegues corporales, planes alimentarios basados en gasto metabólico y suplementación.',
      whatsappMsg: 'Hola FB SEVEN! Quiero solicitar un turno para consulta nutricional y medición antropométrica ISAK.'
    }
  ];

  return (
    <section id="coaches" className="py-28 sm:py-36 bg-[#0d0d0d] text-white border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header (Image 5 style) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
            ( PROFESIONALES DEDICADOS A TU ÉXITO )
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase text-white">
            Coaches & Especialistas en Sala
          </h2>
        </div>

        {/* Interactive Row Table (Exact Image 5 format) */}
        <div className="border-t border-neutral-800">
          {coaches.map((coach, index) => {
            const isHovered = activeIdx === index;

            return (
              <div
                key={coach.name}
                onMouseEnter={() => setActiveIdx(index)}
                className={`border-b border-neutral-800/90 py-7 sm:py-9 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group ${
                  isHovered ? 'bg-[#141414]/90' : 'hover:bg-[#121212]'
                }`}
              >
                {/* Left: Name and Role */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 lg:w-5/12 pl-2">
                  <h3 className={`text-2xl sm:text-4xl font-display font-bold tracking-tight transition-colors ${
                    isHovered ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    {coach.name}
                  </h3>
                  <span className="text-xs font-mono tracking-widest text-brand-neon uppercase">
                    / {coach.role}
                  </span>
                </div>

                {/* Middle: Floating Photo Preview (Visible when active / on desktop) */}
                <div className="hidden lg:flex items-center justify-center w-3/12 h-28 overflow-hidden relative">
                  {isHovered ? (
                    <div className="flex items-center gap-4 animate-in fade-in duration-300">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-20 h-24 object-cover border border-neutral-700 shadow-xl"
                      />
                      <p className="text-xs text-neutral-400 max-w-[200px] line-clamp-3 leading-relaxed">
                        {coach.bio}
                      </p>
                    </div>
                  ) : (
                    <span className="text-xs font-mono text-neutral-700">Pasa el cursor para ver bio</span>
                  )}
                </div>

                {/* Right: Button */}
                <div className="pr-2 flex items-center justify-start md:justify-end">
                  <a
                    href={`https://wa.me/5491144724002?text=${encodeURIComponent(coach.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-7 py-3 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                      isHovered
                        ? 'bg-white text-black shadow-neon'
                        : 'border border-neutral-700 text-neutral-300 hover:border-white hover:text-white'
                    }`}
                  >
                    <span>CONSULTAR</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IronCoaches;
