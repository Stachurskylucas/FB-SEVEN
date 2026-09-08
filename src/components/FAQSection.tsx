import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GYM_FAQS } from '../data/gymData';
import { ScrollReveal } from './ui/ScrollReveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden">
      
      {/* Diffused dark ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header con animación suave */}
        <ScrollReveal direction="left" duration={0.7} className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-brand-neon/30 text-[11px] font-semibold text-brand-neon uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <HelpCircle className="w-3 h-3 text-brand-neon" />
            <span>Resolvé tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase mt-1">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.75)]">Frecuentes</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-normal">
            Todo lo que necesitás saber antes de comenzar a entrenar en FB SEVEN TRAINING.
          </p>
        </ScrollReveal>

        {/* Accordion List with Smooth Animation y entrada desde los costados */}
        <div className="space-y-4">
          {GYM_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 0.08}
                duration={0.65}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-950 border-brand-neon/60 shadow-[0_0_25px_rgba(0,242,254,0.2)]'
                    : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-neon transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-900 border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 border-brand-neon text-brand-neon shadow-[0_0_10px_rgba(0,242,254,0.4)]'
                      : 'border-neutral-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Expansion & Collapse Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
