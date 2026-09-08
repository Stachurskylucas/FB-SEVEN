import React from 'react';
import { Hero } from '../components/Hero';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { SedesGallerySection } from '../components/SedesGallerySection';
import { SocialProofSection } from '../components/SocialProofSection';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';
import { FB_SEVEN_MAIN_SCHEMA } from '../data/gymSchema';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="FB SEVEN TRAINING | Gimnasio de Alto Rendimiento en Bella Vista & Muñiz"
        description="Centro de alto rendimiento con 3 sedes interconectadas en Zona Oeste: Pacífico, Ricchieri y Muñiz. Musculación, biomecánica pesada, pilates reformer, boxeo y funcional con pase multisede."
        canonicalUrl="https://fbsevengym.com/"
        schemaJson={FB_SEVEN_MAIN_SCHEMA}
      />
      <main className="bg-black">
      {/* 1. Hero with Background Video, Glowing Title, Crystalline Glass Badge & Buttons */}
      <Hero />

      {/* 2. Clases & Horarios (Fondo azul oscuro con fade a negro, sin línea divisoria) */}
      <ActivitiesSection />

      {/* 3. Galería de Nuestras Sedes con Thumbnail Carousel (Fondo completamente negro unificado) */}
      <SedesGallerySection />

      {/* 4. Social Proof & Reseñas Verificadas Google Maps (Calificación 4.9★ y testimonios) */}
      <SocialProofSection />

      {/* 5. Memberships & Plans (Fondo animado con WebGL LightRays azul/cian) */}
      <PricingSection />

      {/* 5. Frequently Asked Questions (Fondo completamente negro) */}
      <FAQSection />

      {/* 6. Formulario de Inscripción / Contacto (Fondo animado con Canvas DotField azul) */}
      <ContactSection />
    </main>
    </>
  );
};

export default HomePage;
