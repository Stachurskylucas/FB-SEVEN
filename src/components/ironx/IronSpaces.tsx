import React from 'react';
import { ChevronRight } from 'lucide-react';

export const IronSpaces: React.FC = () => {
  const spaces = [
    {
      number: '01',
      title: 'Sede Pacífico (Ex Cine Gran Pacífico)',
      category: 'SEDE CENTRAL FLAGSHIP',
      description: 'Nuestro espacio insignia desarrollado dentro del recordado Cine Gran Pacífico. Una imponente arquitectura de doble altura, barandas doradas originales recuperadas, barra saludable de suplementos y la mayor concentración de maquinaria biomecánica de la región.',
      image: '/images/sede-pacifico-recepcion.png',
      ctaText: 'CONOCER SEDE PACÍFICO',
      whatsappMsg: '¡Hola FB SEVEN! Quisiera coordinar una visita y conocer la Sede Pacífico (Senador Morón 1450).'
    },
    {
      number: '02',
      title: 'Biomecánica Pro & Sector de Fuerza',
      category: 'EQUIPAMIENTO CUSTOM FB SEVEN',
      description: 'Estaciones de poleas múltiples regulables, máquinas convergentes con el monograma neón de FB SEVEN y plataformas de levantamiento olímpico. Cada estación fue concebida para aislar el grupo muscular objetivo con trayectorias naturales y seguras.',
      image: '/images/sede-pacifico-maquinas.png',
      ctaText: 'VER EQUIPAMIENTO',
      whatsappMsg: '¡Hola FB SEVEN! Quiero consultar sobre el área de musculación y pesas en las sedes.'
    },
    {
      number: '03',
      title: 'Training Personalizado & Asistido',
      category: 'COACHING 1 A 1 Y GRUPOS REDUCIDOS',
      description: '“No es solo entrenar, también venís a aprender”. Planes a medida en modalidades 1 a 1, parejas y 4 personas, o Training Asistido en packs mensuales de x8 y x12 clases con supervisión continua de cargas y técnica.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      ctaText: 'CONSULTAR CUPOS Y PACKS',
      whatsappMsg: '¡Hola FB SEVEN! Me gustaría consultar disponibilidad de horarios para Training Personalizado / Asistido.'
    },
    {
      number: '04',
      title: 'Masajes Deportivos, Antropometría & Running',
      category: 'RECUPERACIÓN ASISTIDA & NUTRICIÓN',
      description: 'Fisioterapia manual con masajes deportivos, descontracturantes y recuperación asistida (ventosas y pistola de percusión) adaptada a fútbol, pádel y running. Consulta nutricional integral con informe ISAK de composición corporal.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      ctaText: 'AGENDAR TURNO POR WHATSAPP',
      whatsappMsg: '¡Hola FB SEVEN! Quisiera solicitar un turno para Masajes Deportivos o Consulta Nutricional ISAK.'
    }
  ];

  return (
    <section id="espacios" className="py-28 sm:py-36 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header (Exact IronX style from Image 3) */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
            ( NUESTRO ESPACIO & PROGRAMAS )
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase text-white">
            Espacios Diseñados para tu <span className="text-brand-neon">Progreso</span>
          </h2>
        </div>

        {/* Large Split Showcase Cards (Images 3 & 4) */}
        <div className="space-y-12 sm:space-y-16">
          {spaces.map((space) => (
            <div
              key={space.number}
              className="bg-[#121212] border border-neutral-800/90 overflow-hidden flex flex-col lg:flex-row hover:border-neutral-700 transition-all duration-300 group shadow-2xl"
            >
              {/* Left Column: Watermark Number, Texts & Button */}
              <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
                
                {/* Giant Background Watermark Number (as in Images 3 & 4) */}
                <div className="absolute top-4 left-6 text-7xl sm:text-9xl font-display font-black text-white/[0.03] select-none pointer-events-none tracking-tighter">
                  {space.number}
                </div>

                <div>
                  {/* Small tag number */}
                  <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                    {space.number} — {space.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-6 group-hover:text-brand-neon transition-colors leading-tight">
                    {space.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-xl">
                    {space.description}
                  </p>
                </div>

                {/* Sharp rectangular button (IronX Explore More style) */}
                <div className="mt-10 pt-4">
                  <a
                    href={`https://wa.me/5491144724002?text=${encodeURIComponent(space.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-brand-neon text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-md group/btn"
                  >
                    <span>{space.ctaText}</span>
                    <ChevronRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

              {/* Right Column: High-Res Real Photography */}
              <div className="lg:w-1/2 relative min-h-[340px] sm:min-h-[460px] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121212] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IronSpaces;
