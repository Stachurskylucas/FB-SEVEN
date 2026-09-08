import React from 'react';
import { DriftWall, type DriftWallItem } from './reactbits/DriftWall';

export const GymPhotosSection: React.FC = () => {
  const gymPhotoItems: DriftWallItem[] = [
    {
      image: '/images/sede-pacifico-recepcion.png',
      title: 'Recepción Cine Pacífico',
      href: '#sedes'
    },
    {
      image: '/images/sede-pacifico-maquinas.png',
      title: 'Biomecánica & Logo Neón',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
      title: 'Racks de Sentadillas & Peso Libre',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
      title: 'Acondicionamiento & HIIT',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
      title: 'Plataformas Olímpicas',
      href: '#sedes'
    },
    {
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
      title: 'Estudio Pilates Reformer',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
      title: 'Coaching 1 a 1 en Sala',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
      title: 'Gabinete de Masajes & Descarga',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop',
      title: 'FB SEVEN Running Team',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
      title: 'Boxeo & Funcional Box',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
      title: 'Lounge Bar de Suplementos',
      href: '#sedes'
    },
    {
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop',
      title: 'Nutrición & Antropometría ISAK',
      href: '#actividades'
    },
    {
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
      title: 'Poder & Levantamiento Pesado',
      href: '#planes'
    },
    {
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
      title: 'Comunidad Atletas FB SEVEN',
      href: '#contacto'
    },
    {
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
      title: 'Máximo Rendimiento',
      href: '#planes'
    }
  ];

  return (
    <section id="galeria" className="w-full h-[720px] sm:h-[820px] lg:h-[900px] relative overflow-hidden bg-[#030508]">
      
      {/* DriftWall full-bleed edge-to-edge with much larger tiles and zero text/borders */}
      <DriftWall
        items={gymPhotoItems}
        columns={5}
        tileWidth={310}
        tileHeight={185}
        gap={22}
        tilt={14}
        turn={-12}
        perspective={1450}
        depth={115}
        speed={36}
        direction="up"
        variance={0.45}
        parallax={0.75}
        lift={72}
        fade={0.65}
        dim={0.65}
        overlayColor="#030508"
        radius={16}
        pauseOnHover={false}
      />
    </section>
  );
};

export default GymPhotosSection;
