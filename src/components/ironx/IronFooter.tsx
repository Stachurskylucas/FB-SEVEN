import React from 'react';
import { ArrowUp, MapPin, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../Icons';
import { GYM_SEDES } from '../../data/gymData';

export const IronFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Logo & Overview */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#inicio" className="block">
              <img
                src="/images/logo.png"
                alt="FB SEVEN"
                className="h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              />
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md font-normal">
              Centro de entrenamiento de referencia en Zona Oeste. Tres sedes equipadas con maquinaria biomecánica de alta gama, atención personalizada y la sede central en el histórico Cine Gran Pacífico.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/fbseventraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-neutral-800 bg-[#111111] hover:border-brand-neon hover:text-brand-neon flex items-center justify-center text-neutral-300 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5491144724002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-neutral-800 bg-[#111111] hover:border-brand-neon hover:text-brand-neon flex items-center justify-center text-neutral-300 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><a href="#inicio" className="hover:text-brand-neon transition-colors">INICIO</a></li>
              <li><a href="#filosofia" className="hover:text-brand-neon transition-colors">FILOSOFÍA</a></li>
              <li><a href="#espacios" className="hover:text-brand-neon transition-colors">ESPACIOS & PROGRAMAS</a></li>
              <li><a href="#coaches" className="hover:text-brand-neon transition-colors">COACHES EN SALA</a></li>
              <li><a href="#sedes" className="hover:text-brand-neon transition-colors">NUESTRAS 3 SEDES</a></li>
              <li><a href="#planes" className="hover:text-brand-neon transition-colors">PLANES Y MEMBRESÍAS</a></li>
              <li><a href="#contacto" className="hover:text-brand-neon transition-colors">CONTACTO DIRECTO</a></li>
            </ul>
          </div>

          {/* Col 3: The 3 Sedes */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              3 Sedes Oficiales
            </h4>
            <div className="space-y-3 text-xs">
              {GYM_SEDES.map(s => (
                <div key={s.id} className="p-3 bg-[#111111] border border-neutral-900">
                  <span className="font-bold text-white block">{s.name}</span>
                  <a
                    href={s.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-brand-neon flex items-center gap-1 mt-1 text-[11px] font-mono"
                  >
                    <MapPin className="w-3 h-3 text-brand-neon shrink-0" />
                    <span>{s.address} ({s.zone})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} FB SEVEN TRAINING. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Bella Vista & Muñiz, Buenos Aires</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-neutral-800 bg-[#111111] hover:border-brand-neon hover:text-brand-neon text-neutral-300 transition-all"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default IronFooter;
