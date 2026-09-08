import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Dumbbell, 
  Users, 
  Award, 
  ArrowRight, 
  Building2, 
  Target,
  MessageCircle
} from 'lucide-react';
import { Magnet } from '../components/reactbits/Magnet';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';

export const NosotrosPage: React.FC = () => {
  const pillars = [
    {
      icon: <Dumbbell className="w-7 h-7 text-brand-neon" />,
      title: 'Biomecánica Anatómica Pura',
      description: 'Cada máquina de nuestras tres sedes fue elegida por su perfil de resistencia fisiológico. Movimientos convergentes y divergentes que maximizan el reclutamiento muscular protegiendo ligamentos y articulaciones.'
    },
    {
      icon: <Award className="w-7 h-7 text-cyan-300" />,
      title: 'Equipamiento Olímpico & Pesas Calibradas',
      description: 'Plataformas de levantamiento, barras olímpicas con rodamientos de aguja, racks de sentadilla macizos y mancuernas de hasta 60 kg para que entrenes sin limitaciones de carga.'
    },
    {
      icon: <Users className="w-7 h-7 text-brand-neon" />,
      title: 'Coaches Presentes en Sala',
      description: 'No te dejamos solo con una rutina en papel. Nuestro staff de profesores está permanentemente en sala para corregir tu técnica, ajustar ángulos de ejecución y potenciar tu rendimiento.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-cyan-300" />,
      title: 'Comunidad & Cultura de Superación',
      description: 'En FB SEVEN se respira disciplina, compañerismo y respeto mutuo. Un ambiente motivador donde atletas de competición y personas que inician por primera vez comparten la misma pasión.'
    }
  ];

  const milestones = [
    {
      year: 'Fase I',
      title: 'Nace la Visión en Bella Vista (Sede Ricchieri)',
      description: 'FB SEVEN comenzó con un propósito inquebrantable: crear un gimnasio de alto rendimiento que rompiera con las cadenas comerciales convencionales, priorizando maquinaria de hierro pesado y biomecánica real.'
    },
    {
      year: 'Fase II',
      title: 'Consolidación y Expansión a Muñiz',
      description: 'Llegamos al corazón de Muñiz (Av. León Gallardo) con una propuesta orientada al entrenamiento personalizado, kinesiología, recuperación funcional y seguimiento meticuloso 1 a 1.'
    },
    {
      year: 'Fase III',
      title: 'El Hito Monumental: Ex Cine Gran Pacífico',
      description: 'La apertura más ambiciosa de la zona norte: la recuperación patrimonial del emblemático Cine Gran Pacífico. Un templo de dos niveles, balcones dorados originales, techos colosales y tecnología biomecánica de punta.'
    }
  ];

  const stats = [
    { number: '3', label: 'Sedes Propias en Bella Vista y Muñiz' },
    { number: '+2.500', label: 'Atletas y Miembros Activos' },
    { number: '+120', label: 'Máquinas Biomecánicas de Élite' },
    { number: '100%', label: 'Pase Multisede Libre' },
  ];

  return (
    <>
      <SEO
        title="Nosotros & Filosofía | FB SEVEN Training"
        description="Conocé la historia, el equipamiento biomecánico y los valores de FB SEVEN Training. 3 sedes de alto rendimiento en Bella Vista y Muñiz."
        canonicalUrl="https://fbsevengym.com/nosotros"
      />
      <div className="pt-28 pb-32 bg-[#030508] text-white min-h-screen">
      
      {/* Background ambient lighting */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(0, 242, 254, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(0, 242, 254, 0.04) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* HERO HEADER */}
        <ScrollReveal direction="left" duration={0.8} className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-brand-neon/30 text-xs font-semibold uppercase tracking-widest text-brand-neon mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
            <span>Nuestra Identidad & Trayectoria</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] text-white">
            Pasión por la <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_35px_rgba(0,242,254,0.75)]">Biomecánica</span> y el Alto Rendimiento
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-xl font-normal max-w-3xl leading-relaxed">
            FB SEVEN nació para redefinir el estándar del entrenamiento en Bella Vista y San Miguel. No creemos en fórmulas mágicas ni en gimnasios masificados sin alma: creemos en el estímulo muscular científico, la biomecánica precisa y la calidez humana.
          </p>
        </ScrollReveal>

        {/* STATS BANNER */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {stats.map((s, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.6}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/80 text-center backdrop-blur-xl shadow-xl hover:border-brand-neon/40 transition-colors"
            >
              <span className="text-4xl sm:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white block">
                {s.number}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mt-2 block">
                {s.label}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* STORY SECTION WITH PHOTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          <ScrollReveal direction="left" duration={0.8} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono uppercase text-brand-neon">
              <Building2 className="w-3.5 h-3.5" />
              <span>Arquitectura & Legado</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight leading-tight">
              De un sueño local a recuperar el mítico <span className="text-brand-neon">Cine Gran Pacífico</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              El hito que consolidó la identidad de FB SEVEN fue la restauración del histórico edificio del Ex Cine Gran Pacífico en Bella Vista. Respetamos la mística del lugar: los altos techos, la iluminación escénica y los balcones dorados originales fueron integrados con maquinaria de biomecánica anatómica importada.
            </p>
            <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
              Hoy, nuestras tres sedes (Pacífico, Ricchieri y Muñiz) conforman un ecosistema integral conectado mediante nuestro Pase Black Multisede, permitiéndote entrenar donde y cuando quieras.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
              <img
                src="/images/sede-pacifico-recepcion.png"
                alt="Sede Central FB SEVEN Pacífico"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-4 py-1.5 rounded-full bg-black/80 border border-neutral-700 text-xs text-white font-semibold backdrop-blur-md">
                  Sede Central Pacífico • Arquitectura Emblemática
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* THE 4 PILLARS */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-brand-neon/30 text-xs font-semibold uppercase tracking-widest text-brand-neon mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>Nuestros Principios</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
              Los 4 Pilares de <span className="text-brand-neon">FB SEVEN</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Diseñamos cada aspecto de la experiencia pensando en el atleta que llevás dentro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 0.1}
                duration={0.7}
                className="p-8 sm:p-10 rounded-3xl bg-[#070a0f] border border-neutral-800 hover:border-brand-neon/50 transition-all duration-300 shadow-xl relative group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-display font-black uppercase text-white tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {p.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* TIMELINE / MILESTONES */}
        <div className="mb-28 bg-[#06090e] border border-neutral-800/90 rounded-[36px] p-8 sm:p-14 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mb-10 text-center">
            Nuestra <span className="text-brand-neon">Evolución</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-neon block mb-2">
                  {m.year}
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase mb-3">
                  {m.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-neutral-950 via-[#07131e] to-neutral-950 border border-brand-neon/30 p-8 sm:p-16 text-center shadow-[0_0_50px_rgba(0,242,254,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            Sumate a la <span className="text-brand-neon">Familia FB SEVEN</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Vení a entrenar a cualquiera de nuestras 3 sedes y sentí la diferencia de un gimnasio pensado para el máximo rendimiento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnet magnetStrength={0.2}>
              <a
                href={`https://wa.me/5491144724002?text=${encodeURIComponent(
                  '¡Hola FB SEVEN! Quiero conocer más sobre las sedes y anotarme.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black text-transparent" />
                <span>Contactar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Magnet>
          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default NosotrosPage;
