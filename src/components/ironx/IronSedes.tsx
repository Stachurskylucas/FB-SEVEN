import React from 'react';
import { MapPin, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { GYM_SEDES } from '../../data/gymData';

export const IronSedes: React.FC = () => {
  return (
    <section id="sedes" className="py-28 sm:py-36 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
            ( PRESENCIA EN ZONA OESTE )
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase text-white">
            Tres Sedes. <span className="text-brand-neon">Un Mismo Estándar.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-400">
            Conocé nuestras ubicaciones estratégicas en Bella Vista y Muñiz con equipamiento de competición.
          </p>
        </div>

        {/* 3 Sedes Cards Grid (IronX clean aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_SEDES.map((sede, idx) => (
            <div
              key={sede.id}
              className="bg-[#121212] border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 group shadow-2xl"
            >
              <div>
                {/* Sede Image with category badge */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={sede.mainImage}
                    alt={sede.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-neutral-700 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                      0{idx + 1} • {sede.badge}
                    </span>
                  </div>
                </div>

                {/* Sede Info Content */}
                <div className="p-7 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-neon transition-colors">
                    {sede.name}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                    <span>{sede.address} — {sede.zone}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {sede.description}
                  </p>

                  {/* Hours badge */}
                  <div className="p-3 bg-black/60 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Lun a Vie: {sede.hours.weekdays} | Sáb: {sede.hours.saturdays}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-7 sm:p-8 pt-0 border-t border-neutral-900/80 flex items-center justify-between gap-3 mt-4">
                <a
                  href={sede.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>CÓMO LLEGAR</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`https://wa.me/${sede.whatsappNumber}?text=${encodeURIComponent(sede.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white hover:bg-brand-neon text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 shadow-md"
                >
                  <span>WHATSAPP</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IronSedes;
