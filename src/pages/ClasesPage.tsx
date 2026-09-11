import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Flame, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  MessageCircle,
  X
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';

interface ActivityCatalogItem {
  id: string;
  title: string;
  category: 'entrenamiento' | 'clases' | 'salud' | 'kids';
  tags: string[];
  description: string;
  difficulty: string;
  duration: string;
  image: string;
  buttonText?: string;
  sedes: string[];
  schedules: {
    sede: string;
    slots: { days: string; hours: string; coach: string }[];
  }[];
}

const ACTIVITIES_CATALOG: ActivityCatalogItem[] = [
  {
    id: 'musculacion',
    title: 'Musculación & Biomecánica',
    category: 'entrenamiento',
    tags: ['PASE LIBRE', 'MÁQUINAS FB SEVEN', 'ZONA OLÍMPICA'],
    description: 'Equipamiento biomecánico convergente, discos olímpicos, mancuernas pesadas y racks para hipertrofia y fuerza pura.',
    difficulty: 'Alta',
    duration: 'Pase Libre',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Lunes a Viernes', hours: '07:00 a 22:00 hs (Horario Corrido)', coach: 'Staff de Biomecánica Permanente' },
          { days: 'Sábados', hours: '09:00 a 18:00 hs', coach: 'Coaches de Turno' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lunes a Viernes', hours: '08:00 a 12:00 hs y 13:00 a 21:00 hs', coach: 'Coaches de Sala' },
          { days: 'Sábados', hours: '09:00 a 13:00 hs', coach: 'Monitoreo Técnico' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lunes a Viernes', hours: '08:00 a 13:00 hs y 15:00 a 21:00 hs', coach: 'Profesores de Turno' },
          { days: 'Sábados', hours: '09:00 a 13:00 hs', coach: 'Guardia Técnica' }
        ]
      }
    ]
  },
  {
    id: 'training-asistido',
    title: 'Training Asistido',
    category: 'entrenamiento',
    tags: ['GRUPOS REDUCIDOS', 'PACKS 8/12 CLASES'],
    description: 'Musculación con guía profesional en grupos reducidos. Disponible en packs x8 y x12 clases mensuales con control de cargas y plan progresivo.',
    difficulty: 'Media / Progresiva',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '08:30 hs / 10:30 hs / 18:00 hs / 19:30 hs', coach: 'Prof. Lucas M. & Staff' },
          { days: 'Sábados', hours: '10:00 hs', coach: 'Coach de Turno' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun a Vie', hours: '09:00 hs / 17:30 hs / 19:00 hs', coach: 'Prof. Nicolás S.' },
          { days: 'Sábados', hours: '11:00 hs', coach: 'Prof. Lucas M.' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lun a Vie', hours: '08:00 hs / 18:00 hs / 19:30 hs', coach: 'Prof. Julieta R.' }
        ]
      }
    ]
  },
  {
    id: 'pilates-reformer',
    title: 'Pilates Reformer',
    category: 'salud',
    tags: ['CORE PROFUNDO', 'SALUD POSTURAL'],
    description: 'Camas reformer de alta precisión para descomprimir la columna vertebral, fortalecer el core profundo y ganar movilidad articular.',
    difficulty: 'Suave a Media',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '08:30 / 09:30 / 17:30 / 18:30 / 19:30 hs', coach: 'Inst. Romina T. (Mezzanine)' },
          { days: 'Mar y Jue', hours: '09:00 / 18:00 hs', coach: 'Inst. Romina T.' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun a Vie', hours: '08:00 / 10:00 / 17:30 / 18:30 hs', coach: 'Inst. Carla B. & Valeria L.' },
          { days: 'Sábados', hours: '10:00 y 11:00 hs', coach: 'Inst. Andrea M.' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '09:00 / 18:00 hs', coach: 'Inst. Daniela K.' },
          { days: 'Mar y Jue', hours: '08:30 / 17:30 hs', coach: 'Inst. Daniela K.' }
        ]
      }
    ]
  },
  {
    id: 'boxeo',
    title: 'Boxeo',
    category: 'clases',
    tags: ['TÉCNICA & GUARDIA', 'BOLSAS PESADAS'],
    description: 'Golpeo técnico en bolsas pesadas, guanteo coordinado, manoplas y asaltos para descargar tensiones y acelerar reflejos.',
    difficulty: 'Alta',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '18:00 hs / 19:30 hs', coach: 'Prof. Nicolás S. (Ring y Bolsas)' }
        ]
      },
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Mar y Jue', hours: '19:00 hs / 20:15 hs', coach: 'Prof. Javier O. (Sector Combate)' },
          { days: 'Sábados', hours: '11:30 hs (Sparring Técnico)', coach: 'Prof. Javier O.' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Mar y Jue', hours: '18:30 hs / 20:00 hs', coach: 'Coaches de Turno' }
        ]
      }
    ]
  },
  {
    id: 'funcional-box',
    title: 'Funcional Box',
    category: 'clases',
    tags: ['ALTA INTENSIDAD', 'HÍBRIDO'],
    description: 'Fusión de intervalos de alta intensidad metabólica con técnica de golpeo, saltos y ejercicios dinámicos de máxima quema calórica.',
    difficulty: 'Máxima',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '08:00 / 10:00 / 18:00 / 19:30 hs', coach: 'Prof. Lucas M. & Tomás V.' },
          { days: 'Mar y Jue', hours: '09:00 / 18:30 / 20:00 hs', coach: 'Prof. Florencia B.' },
          { days: 'Sábados', hours: '10:30 hs (Masterclass)', coach: 'Equipo de Coaches' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun a Vie', hours: '08:30 / 18:00 / 19:30 hs', coach: 'Prof. Nicolás S.' },
          { days: 'Sábados', hours: '11:00 hs', coach: 'Prof. Lucas M.' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lun, Mié y Vie', hours: '09:00 / 18:30 hs', coach: 'Prof. Julieta R.' },
          { days: 'Mar y Jue', hours: '19:00 hs', coach: 'Prof. Julieta R.' }
        ]
      }
    ]
  },
  {
    id: 'acro-flex',
    title: 'Acro Flex',
    category: 'salud',
    tags: ['FLEXIBILIDAD', 'DESTREZAS'],
    description: 'Flexibilidad profunda, alineación corporal y destrezas acrobáticas adaptadas para ampliar rangos y soltura muscular.',
    difficulty: 'Media',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1552196563-552368297a78?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Mar y Jue', hours: '18:00 hs / 19:15 hs', coach: 'Prof. Candela R.' },
          { days: 'Sábados', hours: '12:00 hs (Taller Intensivo)', coach: 'Prof. Candela R.' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun y Mié', hours: '19:30 hs', coach: 'Prof. Agustín F.' }
        ]
      }
    ]
  },
  {
    id: 'nutricion-isak',
    title: 'Nutrición & ISAK',
    category: 'salud',
    tags: ['MEDICIÓN ISAK', 'PLANES A MEDIDA'],
    description: 'Consulta nutricional individual, consulta control y antropometría ISAK con informe preciso de composición corporal. Mejor nutrición, mejor rendimiento.',
    difficulty: 'Clínica',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Miércoles y Viernes', hours: '15:00 a 20:00 hs (Turnos personalizados)', coach: 'Lic. en Nutrición Deportiva' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Martes y Jueves', hours: '16:00 a 20:30 hs', coach: 'Lic. Especialista ISAK Nivel 2' }
        ]
      }
    ]
  },
  {
    id: 'kinesiologia',
    title: 'Kinesiología',
    category: 'salud',
    tags: ['POSTURAL & LESIONES', 'SEDE MUÑIZ'],
    description: 'Rehabilitación de lesiones, corrección postural y recuperación funcional deportiva en gabinete equipado de Sede Muñiz.',
    difficulty: 'Terapéutica',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lunes a Viernes', hours: '09:00 a 13:00 hs y 16:00 a 20:30 hs', coach: 'Lic. Kinesiólogo Fisiatra (Turnos)' },
          { days: 'Sábados', hours: '09:00 a 13:00 hs', coach: 'Guardia Kine Deportiva' }
        ]
      }
    ]
  },
  {
    id: 'skill-for-kids',
    title: 'Skill for Kids',
    category: 'kids',
    tags: ['COORDINACIÓN', 'AGILIDAD'],
    description: 'Desarrollo psicomotriz infantil, coordinación, agilidad y juegos deportivos formativos en un entorno seguro y divertido.',
    difficulty: 'Infantil',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Mar y Jue', hours: '17:30 hs (Edades 6 a 12 años)', coach: 'Prof. Educación Física Infantil' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Lun y Mié', hours: '17:30 hs (Edades 6 a 12 años)', coach: 'Prof. Educación Física Infantil' }
        ]
      }
    ]
  },
  {
    id: 'instructorado-pilates',
    title: 'Instructorado Pilates',
    category: 'kids',
    tags: ['CERTIFICACIÓN AVALADA', 'FORMACIÓN'],
    description: 'Formación profesional teórico-práctica con aval para desempeñarte como instructor calificado en Pilates Reformer.',
    difficulty: 'Docente',
    duration: 'Modular',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Sábados', hours: '14:00 a 18:00 hs (Clases Teórico-Prácticas)', coach: 'Master Trainer Certificada' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Módulos Intensivos Semestrales', hours: 'Consultar Fechas de Cohorte', coach: 'Dirección Académica FB SEVEN' }
        ]
      }
    ]
  },
  {
    id: 'running-team',
    title: 'Running Team',
    category: 'clases',
    tags: ['TODOS LOS NIVELES', 'MARTES Y JUEVES 8 AM'],
    description: 'Entrenamiento para todos los niveles: planes personalizados, mejora de resistencia, velocidad y técnica, y preparación para competencias. Adaptamos cada sesión a tus metas porque el verdadero objetivo siempre es el movimiento, y el movimiento es salud.',
    difficulty: 'Todos los niveles',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Ricchieri'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Martes y Jueves', hours: '08:00 hs (8:00 AM)', coach: 'Head Coach de Running FB' },
          { days: 'Sábados', hours: '08:30 hs (Fondos y Pasadas)', coach: 'Equipo de Running' }
        ]
      },
      {
        sede: 'Sede Ricchieri',
        slots: [
          { days: 'Martes y Jueves', hours: '08:00 hs (8:00 AM)', coach: 'Coach de Running' }
        ]
      }
    ]
  },
  {
    id: 'masajes-terapeuticos',
    title: 'Masajes Terapéuticos & Deportivos',
    category: 'salud',
    tags: ['RECUPERACIÓN & RENDIMIENTO', 'TERAPIA MANUAL'],
    description: 'Preparación y recuperación deportiva. Modalidades: Relajante-sedativo, Deportivo, Descontracturante (con antebrazos y codos), Drenaje linfático y Recuperación asistida (ventosas y pistola de percusión). Trabajo adaptado a fútbol, pádel, running y fuerza. Mejor recuperación, mejor rendimiento.',
    difficulty: 'Personalizado',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'CONSULTAR HORARIOS',
    sedes: ['Sede Pacífico', 'Sede Muñiz'],
    schedules: [
      {
        sede: 'Sede Pacífico',
        slots: [
          { days: 'Lunes a Viernes', hours: '09:00 a 20:30 hs (Turnos personalizados)', coach: 'Especialista en Fisioterapia Manual' },
          { days: 'Sábados', hours: '09:00 a 14:00 hs', coach: 'Gabinete de Recovery' }
        ]
      },
      {
        sede: 'Sede Muñiz',
        slots: [
          { days: 'Lunes a Viernes', hours: '09:00 a 20:00 hs (Con turno previo)', coach: 'Masoterapeuta & Recovery' }
        ]
      }
    ]
  }
];

type CategoryFilter = 'todas' | 'entrenamiento' | 'clases' | 'salud' | 'kids';

const FILTER_PILLS: { id: CategoryFilter; label: string }[] = [
  { id: 'todas', label: 'TODAS' },
  { id: 'entrenamiento', label: 'ENTRENAMIENTO & SALA' },
  { id: 'clases', label: 'CLASES & COMBATE' },
  { id: 'salud', label: 'SALUD & RECOVERY' },
  { id: 'kids', label: 'KIDS & CURSOS' }
];

export const ClasesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat') as CategoryFilter | null;

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todas');
  const [selectedActivity, setSelectedActivity] = useState<ActivityCatalogItem | null>(null);
  const [modalSedeTab, setModalSedeTab] = useState<string>('');

  // Sync with URL query parameter
  useEffect(() => {
    if (catQuery && FILTER_PILLS.some(p => p.id === catQuery)) {
      setActiveCategory(catQuery);
    } else {
      setActiveCategory('todas');
    }
  }, [catQuery]);

  const handleSelectCategory = (catId: CategoryFilter) => {
    setActiveCategory(catId);
    if (catId === 'todas') {
      searchParams.delete('cat');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ cat: catId }, { replace: true });
    }
  };

  const filteredItems = ACTIVITIES_CATALOG.filter((item) => {
    if (activeCategory === 'todas') return true;
    return item.category === activeCategory;
  });

  const openScheduleModal = (item: ActivityCatalogItem) => {
    setSelectedActivity(item);
    setModalSedeTab(item.schedules[0]?.sede || item.sedes[0] || 'Sede Pacífico');
  };

  const closeScheduleModal = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <SEO
        title="Clases & Horarios | FB SEVEN Training (Musculación, Pilates, Boxeo)"
        description="Grilla completa de actividades y horarios en las 3 sedes de FB SEVEN: Pacífico, Ricchieri y Muñiz. Musculación, Funcional, Pilates Reformer, Boxeo y más."
        canonicalUrl="https://fbsevengym.com/clases"
      />
      <div className="pt-28 pb-32 bg-[#02050e] text-white min-h-screen relative overflow-hidden">
      
      {/* Dynamic Black & Deep Blue Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030917] via-[#02050e] to-[#040c1b] pointer-events-none" />

      {/* Tech Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(to right, #00f2fe 1px, transparent 1px), linear-gradient(to bottom, #00f2fe 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Glowing Ambient Light Orbs (Blue & Cyan) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[65%] -left-24 w-[600px] h-[600px] bg-cyan-600/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* TOP HEADER: Centered title matching mockup */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal direction="none" duration={0.6}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 backdrop-blur-2xl border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-brand-neon mb-4 shadow-[0_4px_20px_rgba(0,242,254,0.15)]">
              <Sparkles className="w-4 h-4 text-brand-neon" />
              <span>Gimnasio & Centro de Entrenamiento</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase text-white leading-tight">
              EXPLORA TUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)]">DISCIPLINAS Y ACTIVIDADES</span>
            </h1>
            <p className="mt-3.5 text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
              Accedé a toda la oferta deportiva de FB SEVEN en nuestras 3 sedes (Pacífico, Ricchieri y Muñiz). Consultá horarios, nivel de intensidad y reservá tu lugar.
            </p>
          </ScrollReveal>

          {/* FILTER PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => handleSelectCategory(pill.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-neon text-black font-extrabold shadow-[0_0_20px_rgba(0,242,254,0.4)] scale-105'
                      : 'bg-[#061224]/85 border border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-[#0b1f3c]'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 CARDS GRID (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((card) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openScheduleModal(card)}
                className="group relative rounded-2xl bg-gradient-to-b from-[#071325]/95 via-[#050d1a]/95 to-[#020710]/95 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between p-5 min-h-[260px] shadow-lg hover:shadow-[0_12px_40px_rgba(0,180,255,0.2)] cursor-pointer"
              >
                {/* Background image covering card with seamless right placement and left-to-right fade */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-right filter brightness-85 contrast-105 group-hover:scale-105 transition-transform duration-700 opacity-90 select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent_15%,black_70%)] [-webkit-mask-image:linear-gradient(to_right,transparent_15%,black_70%)]"
                    loading="lazy"
                  />
                  {/* Gradients to blend seamlessly with the card background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071325] via-[#071325]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-transparent to-[#071325]/40" />
                </div>

                {/* Foreground Content (Left aligned) */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Activity Title */}
                    <h3 className="font-display font-black text-white text-lg sm:text-xl uppercase tracking-tight leading-tight line-clamp-2 pr-12 group-hover:text-brand-neon transition-colors">
                      {card.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300/85 font-normal leading-relaxed mt-3.5 line-clamp-3 max-w-[215px]">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Meta & Action Indicator */}
                  <div className="mt-4 pt-3 border-t border-cyan-900/30">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-2.5">
                      <span className="flex items-center gap-1 text-brand-neon font-semibold">
                        <Flame className="w-3 h-3" />
                        {card.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {card.duration}
                      </span>
                    </div>

                    <div className="w-full py-2.5 px-4 rounded-xl border border-cyan-500/25 bg-blue-950/30 group-hover:border-brand-neon group-hover:bg-brand-neon group-hover:text-black font-bold text-xs uppercase tracking-wider text-slate-200 transition-all duration-200 text-center flex items-center justify-center gap-1.5 shadow-sm">
                      <span>Ver Horarios por Sede</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM HELPFUL INFO BANNER */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#030917] via-[#081b37] to-[#030917] border border-cyan-400/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_55px_rgba(0,180,255,0.2)]">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-xs font-bold uppercase tracking-widest text-brand-neon">
              <Sparkles className="w-3.5 h-3.5" />
              Entrená en Cualquiera de las 3 Sedes
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
              ¿Querés hacer una <span className="text-brand-neon">Clase de Prueba</span>?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Escribinos directamente por WhatsApp, elegí la sede que te quede más cómoda y reservamos tu sesión para que conozcas las instalaciones sin compromiso.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/5491144724002?text=${encodeURIComponent(
                  '¡Hola FB SEVEN! Quisiera coordinar una clase de prueba para conocer el gimnasio y los planes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                <span>Pedir Clase de Prueba por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* INTERACTIVE SCHEDULE MODAL - EFECTO FLUIDO / LAMPARA DE SABIO */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={closeScheduleModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Dialog: Expansión suave y fluida estilo lámpara mágica */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 35, filter: 'blur(16px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.88, y: 20, filter: 'blur(12px)' }}
              transition={{ 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-2xl bg-[#080d15]/95 border border-cyan-500/35 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,242,254,0.25),0_25px_60px_rgba(0,0,0,0.85)] z-10 max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeScheduleModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-neutral-700">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
                <div className="pr-8">
                  <span className="text-[10px] font-mono text-brand-neon font-bold uppercase tracking-wider block mb-1">
                    Horarios & Disciplinas
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">
                    {selectedActivity.title}
                  </h2>
                </div>
              </div>

              {/* Details & Specs */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedActivity.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-[#0f141c] border border-neutral-800">
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500">Dificultad</span>
                  <span className="text-xs sm:text-sm font-bold text-brand-neon">{selectedActivity.difficulty}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500">Duración</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{selectedActivity.duration}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500">Sedes Disponibles</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-300">{selectedActivity.sedes.length} Sedes</span>
                </div>
              </div>

              {/* Sede Tabs */}
              <div className="mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-brand-neon" />
                  Horarios según sede:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedActivity.schedules.map((sch) => (
                    <button
                      key={sch.sede}
                      onClick={() => setModalSedeTab(sch.sede)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        modalSedeTab === sch.sede
                          ? 'bg-brand-neon text-black font-extrabold shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                          : 'bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {sch.sede}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Slots for Active Sede */}
              <div className="space-y-2.5 mb-6">
                {selectedActivity.schedules
                  .find(s => s.sede === modalSedeTab)
                  ?.slots.map((slot, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <span className="text-xs font-mono text-brand-neon font-bold uppercase block">
                          {slot.days}
                        </span>
                        <span className="text-sm sm:text-base font-display font-bold text-white block mt-0.5">
                          {slot.hours}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 sm:text-right">
                        <span className="block text-slate-500 uppercase text-[10px] tracking-wider">Coach / Staff</span>
                        <span className="text-slate-300 font-semibold">{slot.coach}</span>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pie de modal informativo (sin botón de reservar) */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Sede activa: <strong className="text-white">{modalSedeTab}</strong>
                </span>
                <button
                  type="button"
                  onClick={closeScheduleModal}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
    </>
  );
};

export default ClasesPage;
