import React from 'react';
import { Camera } from 'lucide-react';
import { AccordionGallery } from './reactbits/AccordionGallery';

export const GallerySection: React.FC = () => {
  const galleryItems = [
    { 
      image: '/images/sede-pacifico-recepcion.png', 
      label: 'Cine Pacífico', 
      description: 'Recepción histórica del Ex Cine Gran Pacífico con balcón dorado y lounge de suplementos.', 
      link: '#' 
    },
    { 
      image: '/images/sede-pacifico-maquinas.png', 
      label: 'Biomecánica Pro', 
      description: 'Sector de poleas regulables y máquinas customizadas con el monograma neón de FB SEVEN.', 
      link: '#' 
    },
    { 
      image: 'https://picsum.photos/id/1018/900/1200', 
      label: 'Zona de Fuerza', 
      description: 'Plataformas olímpicas de levantamiento, racks y mancuernas pesadas.', 
      link: '#' 
    },
    { 
      image: 'https://picsum.photos/id/1039/900/1200', 
      label: 'Funcional & HIIT', 
      description: 'Cajones pliométricos, trineos de potencia y circuitos de alta intensidad.', 
      link: '#' 
    },
    { 
      image: 'https://picsum.photos/id/1044/900/1200', 
      label: 'Comunidad FB', 
      description: 'Atención personalizada 1 a 1 y seguimiento continuo con coaches en sala.', 
      link: '#' 
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-brand-dark/98 relative border-t border-brand-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-neon uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-brand-neon" />
            <span>Galería Visual Interactiva</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase mt-2">
            Explorá el <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.75)]">Espacio</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Pasá el cursor sobre cada panel para expandir las fotografías de nuestras instalaciones en alta resolución.
          </p>
        </div>

        {/* React Bits AccordionGallery with GSAP (Snappy 0.25s speed, 0.68 expand width) */}
        <div className="w-full">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={1}
            expandRatio={0.68}
            trigger="hover"
            duration={0.25}
          />
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
