import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { GYM_PLANS } from '../../data/gymData';

export const IronPricing: React.FC = () => {
  return (
    <section id="planes" className="py-28 sm:py-36 bg-[#0d0d0d] text-white border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
            ( MEMBRESÍAS & ACCESOS )
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase text-white">
            Elegí tu Nivel de <span className="text-brand-neon">Compromiso</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-400">
            Sin contratos de permanencia abusivos. Máxima flexibilidad para entrenar en 1 o en las 3 sedes.
          </p>
        </div>

        {/* Pricing Cards Grid (IronX Minimalist style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              className={`p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? 'bg-[#181818] border-2 border-brand-neon shadow-[0_0_40px_rgba(0,242,254,0.15)] -translate-y-2'
                  : 'bg-[#121212] border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neon text-black text-[10px] font-mono font-black uppercase tracking-widest px-4 py-1">
                  RECOMENDADO • MULTISEDE
                </div>
              )}

              <div>
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-2">
                  0{idx + 1} // {plan.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase mb-4 tracking-tight">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3.5 pt-6 border-t border-neutral-800">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <div className="w-4 h-4 rounded-none bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-brand-neon">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10 pt-6 border-t border-neutral-800">
                <a
                  href={`https://wa.me/5491144724002?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-brand-neon text-black hover:bg-white shadow-neon'
                      : 'bg-white text-black hover:bg-brand-neon'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IronPricing;
