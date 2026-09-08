import React from 'react';
import { Dumbbell, Flame, Shield, ArrowUpRight } from 'lucide-react';

export const IronPhilosophy: React.FC = () => {
  const cards = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: 'Entrenamiento Profesional',
      description: 'Entrená con coaches certificados que diseñan planificaciones estructuradas y progresivas basadas en tus metas, nivel actual y constante evolución.'
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-white" />,
      title: 'Biomecánica Avanzada',
      description: 'Equipamiento custom de alta gama, poleas multidireccionales y zonas olímpicas concebidas para optimizar la fuerza cuidando tus articulaciones.'
    },
    {
      icon: <Flame className="w-5 h-5 text-white" />,
      title: 'Ambiente de Superación',
      description: 'Una atmósfera enérgica, limpia y de máxima camaradería en nuestras 3 sedes que te inspira a sostener la constancia y romper tus propios límites.'
    }
  ];

  return (
    <section id="filosofia" className="relative py-28 sm:py-36 bg-[#0d0d0d] text-white overflow-hidden border-t border-neutral-900">
      
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Eyebrow Label */}
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            ( MÁS QUE UN GIMNASIO )
          </span>
        </div>

        {/* Central Bold Statement (Exact typography style from Image 2) */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <p className="text-2xl sm:text-4xl md:text-[42px] font-display font-medium text-neutral-300 leading-snug tracking-tight">
            Nuestro espacio combina <span className="font-black text-white">equipamiento profesional</span>, coaches expertos, y una atmósfera motivadora para ayudarte a <span className="font-black text-white underline decoration-brand-neon decoration-2 underline-offset-8">entrenar con inteligencia</span>, moverte mejor, y <span className="font-black text-white">superarte cada día</span>.
          </p>
        </div>

        {/* 3 Square Minimalist Cards (Exact layout from Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-neutral-800/80 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 group"
            >
              <div>
                {/* Square Icon Badge (as in Image 2) */}
                <div className="w-12 h-12 bg-neutral-800/90 border border-neutral-700 flex items-center justify-center mb-10 group-hover:bg-brand-neon group-hover:text-black group-hover:border-brand-neon transition-all duration-300">
                  {card.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-4 tracking-tight group-hover:text-brand-neon transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-neutral-300 transition-colors">
                <span>0{idx + 1} • FB SEVEN</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-brand-neon transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Giant Marquee / Ticker Text (as seen in Image 2: "WHERE COMMITMENT MEETS RESULTS") */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none py-6 border-y border-neutral-900/60 bg-black/40">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter uppercase text-neutral-800/30 mx-6">
            WHERE COMMITMENT MEETS RESULTS • FB SEVEN TRAINING • 3 SEDES ZONA OESTE •
          </span>
          <span className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter uppercase text-neutral-800/30 mx-6">
            WHERE COMMITMENT MEETS RESULTS • FB SEVEN TRAINING • 3 SEDES ZONA OESTE •
          </span>
        </div>
      </div>

    </section>
  );
};

export default IronPhilosophy;
