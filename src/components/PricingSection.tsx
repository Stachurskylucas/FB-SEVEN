import React from 'react';
import { Check, ChevronRight, Zap, ShieldCheck } from 'lucide-react';
import { GYM_PLANS } from '../data/gymData';
import { Magnet } from './reactbits/Magnet';
import { ScrollReveal } from './ui/ScrollReveal';
import { LightRays } from './reactbits/LightRays';

export const PricingSection: React.FC = () => {
  return (
    <section id="planes" className="py-14 sm:py-20 bg-gradient-to-b from-black via-[#08121f] to-black relative overflow-hidden">
      
      {/* Top and bottom subtle blend fades to guarantee pure black seamless transitions */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* React Bits LightRays WebGL Background with Neon Cyan Ray Color */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00f2fe"
          raysSpeed={1.2}
          lightSpread={0.75}
          rayLength={1.5}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.25}
          noiseAmount={0.05}
          distortion={0.04}
          saturation={1.3}
        />
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-neon/8 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header con animación suave */}
        <ScrollReveal direction="left" duration={0.7} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/20 text-[11px] font-semibold uppercase tracking-widest text-brand-neon mb-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.3)]">
            <Zap className="w-3 h-3 text-brand-neon" />
            <span>Membresías & Accesos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase mt-1">
            Elegí tu nivel de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.75)]">Compromiso</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-normal max-w-xl mx-auto">
            Planes directos y sin letra chica. Accedé a nuestras salas de biomecánica pesada o elegí el pase para entrenar en las 3 sedes.
          </p>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {GYM_PLANS.map((plan, idx) => {
            const isFeatured = plan.featured;
            const cardDirection: 'left' | 'right' | 'up' = idx === 0 ? 'left' : idx === 1 ? 'up' : 'right';

            return (
              <ScrollReveal
                key={idx}
                direction={cardDirection}
                delay={idx * 0.1}
                duration={0.65}
                className="h-full flex"
              >
                <div
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl w-full ${
                    isFeatured
                      ? 'bg-gradient-to-b from-[#0e1620]/95 to-[#080d12]/95 border-2 border-brand-neon shadow-[0_0_35px_rgba(0,242,254,0.25)] lg:-translate-y-2'
                      : 'bg-[#090d13]/90 border border-neutral-800 hover:border-neutral-700 shadow-xl'
                  }`}
                >
                  {/* Badge Recomendado: Mitad fuera mitad dentro de arriba en la esquina */}
                  {isFeatured && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 z-20">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-brand-neon text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.6)]">
                        Recomendado
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                      {plan.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 mt-2.5 min-h-[40px] leading-relaxed font-normal">
                      {plan.description}
                    </p>

                    {/* Pricing display sin cuadro */}
                    <div className="my-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-sm sm:text-base text-slate-400 font-semibold">/ mes</span>
                      </div>
                      <span className="text-xs sm:text-sm text-brand-neon font-semibold mt-1.5 block">
                        {plan.priceNote}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                        Incluye:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-brand-neon/20 text-brand-neon'
                              : 'bg-neutral-800 text-slate-400'
                          }`}>
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom CTA Button con feedback táctil (Emil Kowalski) */}
                  <div className="mt-8 pt-6 border-t border-neutral-800/80">
                    <Magnet magnetStrength={0.15} className="w-full">
                      <a
                        href={`https://wa.me/5491144724002?text=${encodeURIComponent(plan.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-tactile w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer ${
                          isFeatured
                            ? 'bg-brand-neon hover:bg-white text-black shadow-[0_0_20px_rgba(0,242,254,0.35)]'
                            : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-brand-neon/60'
                        }`}
                      >
                        <span>Consultar</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Magnet>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Risk-Reversal & Guarantee Strip (Marketing Skills / CRO) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="w-full rounded-[20px] bg-white/[0.05] backdrop-blur-2xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <div className="p-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-neon shrink-0" />
                <span>Sin matrícula de inscripción oculta</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-neon shrink-0" />
                <span>Pase digital con acceso instantáneo</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-neon shrink-0" />
                <span>Congelamiento por vacaciones</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
