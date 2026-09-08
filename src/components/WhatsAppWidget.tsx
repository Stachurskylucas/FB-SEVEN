import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setShowWhatsApp(scroll > 80);
      setShowScrollTop(scroll > 350);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* 1. Scroll To Top Button (Mismo tamaño w-14 h-14 que el botón de WhatsApp) */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 rounded-full bg-neutral-900/90 hover:bg-brand-neon text-slate-200 hover:text-black border border-neutral-700/80 hover:border-brand-neon flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto hover:scale-110 active:scale-95'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Subir hacia arriba"
        title="Subir hacia arriba"
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* 2. WhatsApp Direct Floating Button: Azul más oscuro con logo blanco en contraste */}
      <a
        href="https://wa.me/5491144724002?text=%C2%A1Hola%20FB%20SEVEN!%20Quisiera%20hacerles%20una%20consulta%20sobre%20las%20sedes%20y%20entrenamientos."
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-full bg-[#006bd6] hover:bg-[#0052ad] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(0,107,214,0.65)] hover:shadow-[0_6px_35px_rgba(0,140,255,0.85)] border border-sky-300/40 transition-all duration-300 cursor-pointer group ${
          showWhatsApp
            ? 'opacity-100 translate-y-0 pointer-events-auto hover:scale-110 active:scale-95'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        {/* Official WhatsApp SVG Icon con relleno blanco puro */}
        <svg
          className="w-7 h-7 fill-white transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div>
  );
};

export default WhatsAppWidget;
