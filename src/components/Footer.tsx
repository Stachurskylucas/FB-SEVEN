import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  ExternalLink,
  Shield,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';
import { ScrollReveal } from './ui/ScrollReveal';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const SEDES_MAPS = [
  {
    id: 'pacifico',
    label: 'Pacífico',
    embed: 'https://maps.google.com/maps?q=Senador+Moron+1450,+Bella+Vista,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'ricchieri',
    label: 'Ricchieri',
    embed: 'https://maps.google.com/maps?q=Av+Tte+Gral+Ricchieri+691,+Bella+Vista,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'muniz',
    label: 'Muñiz',
    embed: 'https://maps.google.com/maps?q=Av+Leon+Gallardo+70,+Muniz,+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
];

export const Footer: React.FC = () => {
  const [activeSede, setActiveSede] = useState('pacifico');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPrivacyOpen(false);
    };
    if (isPrivacyOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPrivacyOpen]);

  const sedesLinks = [
    { 
      label: 'Sede Pacífico (Cine Pacífico)', 
      href: 'https://maps.google.com/?q=Senador+Moron+1450+Bella+Vista',
      sub: 'Senador Morón 1450, Bella Vista'
    },
    { 
      label: 'Sede Muñiz', 
      href: 'https://maps.google.com/?q=Leon+Gallardo+70+Muniz',
      sub: 'León Gallardo 70, Muñiz'
    },
    { 
      label: 'Sede Ricchieri', 
      href: 'https://maps.google.com/?q=Ricchieri+691+Bella+Vista',
      sub: 'Ricchieri 691, Bella Vista'
    },
  ];

  const contactInfo = [
    {
      icon: <MessageCircle size={18} className="text-[#00f2fe]" />,
      text: '+54 9 11 4472-4002',
      href: 'https://wa.me/5491144724002',
      label: 'WhatsApp Oficial'
    },
    {
      icon: <Phone size={18} className="text-[#00f2fe]" />,
      text: 'Atención & Recepción',
      href: 'tel:+541144724002',
      label: 'Llamadas'
    },
    {
      icon: <MapPin size={18} className="text-[#00f2fe]" />,
      text: 'Bella Vista & Muñiz',
      href: '#sedes',
      label: 'Zona Oeste'
    },
  ];

  const socialLinks = [
    { 
      icon: <InstagramIcon size={20} />, 
      label: 'Instagram', 
      href: 'https://instagram.com/fbseventraining' 
    },
    { 
      icon: <MessageCircle size={20} />, 
      label: 'WhatsApp', 
      href: 'https://wa.me/5491144724002' 
    },
    { 
      icon: <ExternalLink size={20} />, 
      label: 'Google Maps', 
      href: 'https://maps.google.com/?q=FB+Seven+Gym' 
    },
  ];

  const currentEmbed = SEDES_MAPS.find(s => s.id === activeSede)?.embed ?? SEDES_MAPS[0].embed;

  return (
    <footer className="bg-[#06090e] border border-neutral-800/90 relative h-fit rounded-3xl overflow-hidden mx-4 sm:mx-8 mb-8 mt-16 shadow-2xl">
      
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-30 relative">

        {/* Main layout: links grid (left) + map (right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 pb-12 items-start">

          {/* LEFT: 3-column info grid (Brand, Sedes, Contacto) */}
          <ScrollReveal direction="left" duration={0.8} className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 w-full">
            
            {/* 1. Brand Section */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="FB SEVEN" 
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-11 w-auto object-contain select-none" 
                />
                <span className="text-white text-2xl lg:text-3xl font-display font-black tracking-wider uppercase">
                  FB <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300">SEVEN</span>
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Centro de Alto Rendimiento y Biomecánica en Zona Oeste. 3 Sedes interconectadas con pase libre multisede.
              </p>
            </div>

            {/* 2. Sedes Direct Information */}
            <div>
              <h4 className="text-white text-base lg:text-lg font-display font-bold uppercase tracking-wide mb-4 lg:mb-6">
                Nuestras Sedes
              </h4>
              <ul className="space-y-3.5">
                {sedesLinks.map((sede) => (
                  <li key={sede.label} className="space-y-0.5">
                    <a
                      href={sede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-[#00f2fe] transition-colors flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>{sede.label}</span>
                      <ExternalLink className="w-3 h-3 text-brand-neon/70 shrink-0" />
                    </a>
                    <p className="text-xs text-slate-400 font-normal whitespace-nowrap">
                      {sede.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact & Service Channels */}
            <div>
              <h4 className="text-white text-base lg:text-lg font-display font-bold uppercase tracking-wide mb-4 lg:mb-6">
                Contacto Directo
              </h4>
              <ul className="space-y-3.5">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div className="min-w-0">
                      <span className="text-[10px] lg:text-[11px] text-slate-400 uppercase tracking-wider block font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-slate-200 hover:text-[#00f2fe] transition-colors whitespace-nowrap"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-200 whitespace-nowrap">
                          {item.text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* RIGHT: Compact interactive map */}
          <ScrollReveal direction="right" duration={0.8} className="flex flex-col gap-2.5 w-full lg:w-[300px] xl:w-[330px] shrink-0">
            {/* Sede pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {SEDES_MAPS.map((sede) => (
                <button
                  key={sede.id}
                  onClick={() => setActiveSede(sede.id)}
                  className={`px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSede === sede.id
                      ? 'bg-brand-neon/20 border border-brand-neon text-brand-neon shadow-[0_0_10px_rgba(0,242,254,0.3)]'
                      : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {sede.label}
                </button>
              ))}
            </div>

            {/* Map — slightly more compact */}
            <div className="w-full h-[210px] sm:h-[230px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <iframe
                key={activeSede}
                src={currentEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(88%) hue-rotate(180deg) saturate(0.6) brightness(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa sede ${activeSede}`}
              />
            </div>
          </ScrollReveal>

        </div>

        {/* Footer bar: social + copyright + privacy link */}
        <ScrollReveal direction="right" duration={0.8} delay={0.15}>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 pt-6">
            <div className="flex space-x-6 text-slate-400">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-[#00f2fe] transition-colors p-1"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-slate-400 text-center md:text-left">
              <p className="font-normal">
                &copy; {new Date().getFullYear()} FB SEVEN TRAINING. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/terminos"
                  className="text-slate-400 hover:text-brand-neon underline underline-offset-4 transition-colors"
                >
                  Términos y Condiciones
                </Link>
                <Link
                  to="/privacidad"
                  className="text-slate-400 hover:text-brand-neon underline underline-offset-4 transition-colors"
                >
                  Privacidad (Ley 25.326)
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Modal de Aviso de Privacidad adaptado a la Ley 25.326 de Protección de Datos Personales */}
        <AnimatePresence>
          {isPrivacyOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
              />

              {/* Modal Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl bg-[#080d15]/95 border border-cyan-500/35 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,242,254,0.25),0_25px_60px_rgba(0,0,0,0.85)] z-10 max-h-[85vh] overflow-y-auto backdrop-blur-2xl text-left"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Cerrar aviso de privacidad"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-brand-neon/15 border border-brand-neon/30 flex items-center justify-center text-brand-neon shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-neon font-bold uppercase tracking-wider block">
                      Marco Legal República Argentina
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">
                      Aviso de Privacidad & Protección de Datos
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    En cumplimiento con la <strong>Ley Nacional N° 25.326 de Protección de los Datos Personales</strong> de la República Argentina, <strong>FB SEVEN TRAINING</strong> informa a los usuarios y visitantes de este sitio web lo siguiente:
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-[#0e1520] border border-neutral-800">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-brand-neon">
                        1. Identidad y Responsable del Tratamiento
                      </h4>
                      <p className="text-slate-300 text-xs">
                        El responsable comercial es <strong>FB SEVEN TRAINING</strong>, con sedes físicas operativas en:
                      </p>
                      <ul className="list-disc list-inside text-slate-400 text-xs mt-1 space-y-0.5">
                        <li><strong>Sede Pacífico:</strong> Senador Morón 1450, Bella Vista (Ex Cine Gran Pacífico).</li>
                        <li><strong>Sede Muñiz:</strong> León Gallardo 70, Muñiz.</li>
                        <li><strong>Sede Ricchieri:</strong> Ricchieri 691, Bella Vista.</li>
                      </ul>
                      <p className="text-slate-400 text-xs mt-1">
                        Teléfono / WhatsApp oficial: +54 9 11 4472-4002.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#0e1520] border border-neutral-800">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-brand-neon">
                        2. Finalidad Exclusiva de los Datos
                      </h4>
                      <p className="text-slate-300 text-xs">
                        Los datos provistos voluntariamente por el usuario (nombre completo y consulta sobre planes o disciplinas) son utilizados <strong>única y exclusivamente</strong> para responder a solicitudes informativas, comerciales y coordinación de clases solicitadas por el titular.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#0e1520] border border-neutral-800">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-brand-neon">
                        3. Arquitectura Estática y No Almacenamiento
                      </h4>
                      <p className="text-slate-300 text-xs">
                        Este sitio web opera como landing estática sin almacenamiento en bases de datos del servidor web. Al enviar el formulario de contacto, el usuario es redirigido directamente a WhatsApp mediante enlace cifrado sin persistencia de información en este servidor.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#0e1520] border border-neutral-800">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-brand-neon">
                        4. Confidencialidad y No Cesión a Terceros
                      </h4>
                      <p className="text-slate-300 text-xs">
                        FB SEVEN TRAINING garantiza el secreto profesional y la absoluta confidencialidad. <strong>No vendemos, cedemos, alquilamos ni compartimos</strong> datos de contacto con terceros ni agencias de publicidad bajo ningún concepto.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#0e1520] border border-neutral-800">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-brand-neon">
                        5. Derechos del Titular (Habeas Data) y Órgano de Control
                      </h4>
                      <p className="text-slate-300 text-xs">
                        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (artículo 14, inciso 3 de la Ley Nº 25.326), así como los derechos de rectificación y supresión de sus datos mediante comunicación fehaciente a nuestro canal oficial de WhatsApp o en nuestras sedes físicas.
                      </p>
                      <p className="text-slate-400 text-[11px] mt-2 italic border-l-2 border-brand-neon/50 pl-2">
                        "La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsPrivacyOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                  >
                    Entendido y Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <hr className="border-t border-neutral-800/80 mt-8 mb-4" />
      </div>

      {/* Giant Interactive Text Hover Effect - Oculto en tablet y mobile, solo visible en desktop */}
      <ScrollReveal direction="up" duration={0.9} delay={0.1} className="hidden lg:block w-full">
        <div className="flex h-[12rem] lg:h-[16rem] -mt-4 lg:-mt-8 -mb-4 lg:-mb-8 justify-center items-center overflow-hidden pointer-events-auto relative px-4">
          <TextHoverEffect text="FB SEVEN" className="z-20 w-full" />
        </div>
      </ScrollReveal>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
