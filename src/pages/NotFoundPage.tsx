import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Home, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="404: Página no encontrada | FB SEVEN TRAINING"
        description="La página que buscás no existe o ha sido movida. Volvé al inicio o consultá nuestras actividades."
        noindex={true}
      />
      <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-brand-neon/30 text-brand-neon text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(0,242,254,0.25)]">
          <Dumbbell className="w-4 h-4 animate-pulse" />
          <span>Error 404 • Fuera de serie</span>
        </div>

        {/* Big 404 Typography */}
        <h1 className="text-7xl sm:text-9xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mb-4 select-none">
          404
        </h1>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-3">
          ¿Te desviaste del entrenamiento?
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          La página que buscás no existe o fue reubicada. Volvé al circuito principal o contactanos para ayudarte a encontrar lo que necesitás.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-neon text-black font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:bg-white transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            to="/clases"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Dumbbell className="w-4 h-4 text-brand-neon" />
            <span>Ver Actividades</span>
          </Link>

          <a
            href="https://wa.me/5491144724002?text=Hola%20FB%20SEVEN!%20No%20encuentro%20una%20secci%C3%B3n%20en%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  </>
  );
};

export default NotFoundPage;
