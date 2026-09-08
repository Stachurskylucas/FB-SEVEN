export interface GymSede {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: 'cyan' | 'gold' | 'emerald';
  address: string;
  zone: string;
  description: string;
  features: string[];
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  mainImage: string;
  secondaryImage: string;
}

export const GYM_SEDES: GymSede[] = [
  {
    id: 'pacifico',
    name: 'Sede Pacífico (Cine Pacífico)',
    tagline: 'Sede Central Flagship | Arquitectura Emblemática & Doble Altura',
    badge: 'Sede Emblemática',
    badgeColor: 'gold',
    address: 'Senador Morón 1450',
    zone: 'Bella Vista (Cine Pacífico)',
    description: 'Nuestra sede insignia emplazada en las instalaciones del recordado Cine Gran Pacífico. Un espacio colosal de dos niveles con barandas doradas originales, barra saludable de suplementos, biomecánica FB SEVEN personalizada y climatización central integral.',
    features: [
      'Espacio histórico recuperado con doble altura y mezzanine',
      'Maquinaria biomecánica personalizada con sello FB SEVEN',
      'Lounge bar de suplementación deportiva y proteínas',
      'Zona olímpica de peso libre, mancuernas pesadas y racks',
      'Climatización integral frío/calor y sistema de audio envolvente',
      'Vestuarios amplios de primer nivel y lockers seguros'
    ],
    hours: {
      weekdays: '07:00 a 22:00 hs',
      saturdays: '09:00 a 18:00 hs',
      sundays: 'Consultar eventos / masterclasses'
    },
    phone: '+54 9 11 4472-4002',
    whatsappNumber: '5491144724002',
    whatsappMessage: '¡Hola FB SEVEN! Quiero consultar información, planes y horarios para la Sede Pacífico (Senador Morón 1450).',
    googleMapsUrl: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5656816,-58.6841102,3519m/data=!3m1!1e3!4m10!1m2!2m1!1sFB+SEVEN+TRAINING!3m6!1s0x95bcbd86df4b38bf:0xfb47c13e20ebfb3!8m2!3d-34.5608491!4d-58.6879952',
    embedMapUrl: 'https://maps.google.com/maps?q=Senador+Moron+1450,+Bella+Vista,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mainImage: '/images/sede-pacifico-recepcion.png',
    secondaryImage: '/images/sede-pacifico-maquinas.png'
  },
  {
    id: 'ricchieri',
    name: 'Sede Ricchieri',
    tagline: 'Fuerza, Biomecánica & Máximo Rendimiento',
    badge: 'Power & Performance',
    badgeColor: 'cyan',
    address: 'Ricchieri 691',
    zone: 'Bella Vista',
    description: 'El templo del entrenamiento pesado y el alto rendimiento. Una sede concebida para quienes buscan llevar su condición física y masa muscular al siguiente nivel con monitoreo técnico constante.',
    features: [
      'Estaciones de poleas múltiples y máquinas convergentes',
      'Área de functional training & acondicionamiento metabólico',
      'Plataformas de levantamiento y barras olímpicas certificadas',
      'Ambiente enfocado 100% en la superación física',
      'Profesores presentes en sala en todo momento para correcciones',
      'Excelente conectividad y rápido estacionamiento'
    ],
    hours: {
      weekdays: '08:00 a 12:00 hs y 13:00 a 21:00 hs',
      saturdays: '09:00 a 13:00 hs',
      sundays: 'Cerrado'
    },
    phone: '+54 9 11 4472-4002',
    whatsappNumber: '5491144724002',
    whatsappMessage: '¡Hola FB SEVEN! Me gustaría consultar por planes y aranceles para la Sede Ricchieri (Ricchieri 691).',
    googleMapsUrl: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5608491,-58.6879952',
    embedMapUrl: 'https://maps.google.com/maps?q=Av+Tte+Gral+Ricchieri+691,+Bella+Vista,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mainImage: '/images/sede-pacifico-maquinas.png',
    secondaryImage: '/images/sede-pacifico-recepcion.png'
  },
  {
    id: 'muniz',
    name: 'Sede Muñiz',
    tagline: 'Entrenamiento Personalizado, Kinesiología & Bienestar',
    badge: 'Salud & 1 a 1',
    badgeColor: 'emerald',
    address: 'León Gallardo 70',
    zone: 'Muñiz',
    description: 'Tu espacio de entrenamiento en el centro neurálgico de Muñiz. Priorizamos la calidad de movimiento, la rehabilitación postural, planes adaptados a cada necesidad y una calidez de comunidad inigualable.',
    features: [
      'Atención personalizada con grupos reducidos y seguimiento meticuloso',
      'Gabinete de kinesiología y recuperación funcional deportiva',
      'Programas de hipertrofia, descenso de peso y acondicionamiento',
      'Espacio dinámico con tecnología y comodidades modernas',
      'Planes especiales combinados con nutrición deportiva',
      'Acceso privilegiado en el corazón comercial de Muñiz'
    ],
    hours: {
      weekdays: '08:00 a 13:00 hs y 15:00 a 21:00 hs',
      saturdays: '09:00 a 13:00 hs',
      sundays: 'Cerrado'
    },
    phone: '+54 9 11 4472-4002',
    whatsappNumber: '5491144724002',
    whatsappMessage: '¡Hola FB SEVEN! Quiero consultar por rutinas personalizadas y kinesiología en la Sede Muñiz (León Gallardo 70).',
    googleMapsUrl: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5540991,-58.6986319,179a,35y,38.98h,44.96t/data=!3m1!1e3!4m6!3m5!1s0x95bcbd0079fcddcb:0xd275e8724d0edd6c!8m2!3d-34.5528503!4d-58.6973306',
    embedMapUrl: 'https://maps.google.com/maps?q=Av+Leon+Gallardo+70,+Muniz,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mainImage: '/images/sede-pacifico-recepcion.png',
    secondaryImage: '/images/sede-pacifico-maquinas.png'
  }
];

// 12 Official Activities from FB SEVEN Instagram Stories
export interface GymActivity {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export const GYM_ACTIVITIES: GymActivity[] = [
  {
    id: 'personalizado',
    name: 'Entrenamiento Personalizado',
    subtitle: 'Modalidades 1 a 1, 2 y 4 personas',
    description: 'Planificación individual, control de cargas, corrección técnica continua y revisión de progresos.',
    iconName: 'UserCheck',
    highlight: true
  },
  {
    id: 'asistido',
    name: 'Training Asistido',
    subtitle: 'Packs x8 y x12 clases / mes',
    description: 'Musculación con guía profesional en grupos reducidos para entrenar acompañado y con técnica cuidada.',
    iconName: 'Users',
    highlight: true
  },
  {
    id: 'pilates',
    name: 'Pilates Reformer',
    subtitle: 'Camas de reformer de alta precisión',
    description: 'Fortalecimiento de la zona media (core), elongación muscular, alineación postural y movilidad articular.',
    iconName: 'Activity',
    highlight: true
  },
  {
    id: 'instructorado',
    name: 'Instructorado de Pilates',
    subtitle: 'Formación profesional certificada',
    description: 'Capacitación teórico-práctica con aval para desempeñarte como instructor calificado en pilates.',
    iconName: 'GraduationCap'
  },
  {
    id: 'boxeo',
    name: 'Boxeo',
    subtitle: 'Técnica, potencia & reflejos',
    description: 'Golpes fundamentales, desplazamientos, trabajo en bolsa y circuitos de resistencia cardiovascular.',
    iconName: 'Crosshair'
  },
  {
    id: 'funcional-box',
    name: 'Funcional Box',
    subtitle: 'Alta intensidad metabólica',
    description: 'Fusión de ejercicios de alta intensidad con técnicas de boxeo para quemar calorías y tonificar.',
    iconName: 'Zap'
  },
  {
    id: 'acro-flex',
    name: 'Acro Flex',
    subtitle: 'Flexibilidad & acrobacia',
    description: 'Desarrollo de elasticidad, control corporal y destrezas acrobáticas adaptadas a cada nivel.',
    iconName: 'Sparkles'
  },
  {
    id: 'kids',
    name: 'Skill for Kids',
    subtitle: 'Desarrollo psicomotriz infantil',
    description: 'Espacio lúdico y formativo para niños, fomentando el deporte, la coordinación y el compañerismo.',
    iconName: 'Smile'
  },
  {
    id: 'running',
    name: 'Running Team',
    subtitle: 'Planes de carrera & resistencia',
    description: 'Preparación física específica para corredores, desde 5k y 10k hasta media maratón y fondo.',
    iconName: 'Flame'
  },
  {
    id: 'nutricion',
    name: 'Nutrición Deportiva',
    subtitle: 'Antropometría ISAK & planes',
    description: 'Evaluación integral, medición ISAK de composición corporal y planes alimentarios orientados a tu objetivo.',
    iconName: 'Apple',
    highlight: true
  },
  {
    id: 'estetica',
    name: 'Estética Integral',
    subtitle: 'Tratamientos faciales y corporales',
    description: 'Aparatología y cuidados estéticos para complementar tu bienestar físico y salud dérmica.',
    iconName: 'Heart'
  },
  {
    id: 'masajes',
    name: 'Masajes Terapéuticos',
    subtitle: 'Deportivos, descontracturantes & relax',
    description: 'Masajes descontracturantes, relajantes y drenaje linfático para una recuperación muscular óptima.',
    iconName: 'HandMetal',
    highlight: true
  }
];

// Deep-Dive Specialized Pillars from FB SEVEN Official Info
export const TRAINING_PERSONALIZADO_INFO = {
  title: 'Training Personalizado',
  headline: 'No es solo entrenar. También venís a aprender.',
  subheadline: 'Te acompañamos en todo el proceso para que alcances tu mejor versión.',
  checklist: [
    'Planificación personalizada acorde a tu nivel y metas',
    'Seguimiento y atención exclusiva del coach en cada ejercicio',
    'Revisión periódica de progresos y adaptación de estímulos',
    'Control estricto de cargas para progresiones seguras',
    'Comunicación constante y canal directo para dudas'
  ],
  modalidades: [
    { title: '1 a 1', desc: 'Coach exclusivo para vos en cada repetición' },
    { title: '2 personas', desc: 'Entrená en pareja o con un amigo con plan guiado' },
    { title: '4 personas', desc: 'Grupo súper reducido con atención minuciosa' }
  ],
  ctaText: 'Consultar por Training Personalizado',
  whatsappMessage: 'Hola FB SEVEN! Me interesa consultar disponibilidad y horarios para Training Personalizado.'
};

export const TRAINING_ASISTIDO_INFO = {
  title: 'Training Asistido',
  headline: 'No es entrenar solo. Es entrenar con guía y planificación.',
  subheadline: 'El balance perfecto entre autonomía y supervisión profesional continua.',
  checklist: [
    'Musculación con guía técnica en sala',
    'Planificación orientada a hipertrofia o fuerza',
    'Corrección de posturas y acompañamiento constante',
    'Grupos reducidos para garantizar tu espacio y seguridad'
  ],
  packs: [
    { name: 'Pack x8 Clases', desc: '2 veces por semana, ideal para complementar' },
    { name: 'Pack x12 Clases', desc: '3 veces por semana, frecuencia óptima de progreso' }
  ],
  horarios: 'Lunes a Viernes en franjas horarias flexibles',
  ctaText: 'Consultar Cupos de Training Asistido',
  whatsappMessage: 'Hola FB SEVEN! Quiero consultar cupos y aranceles para los packs de Training Asistido.'
};

export const NUTRICION_Y_BIENESTAR_INFO = {
  title: 'Nutrición, Estética & Masajes',
  tagline: 'Conocé tu cuerpo, mejorá tu calidad de vida',
  sections: [
    {
      name: 'Nutrición & Antropometría ISAK',
      subtitle: 'Mejor nutrición, mejor rendimiento',
      items: [
        {
          title: 'Consulta Nutricional Individual',
          desc: 'Evaluación integral de hábitos, objetivos y necesidades para un plan alimentario personalizado.'
        },
        {
          title: 'Consulta de Control',
          desc: 'Seguimiento de progreso, adaptación de calorías y macronutrientes según tus avances.'
        },
        {
          title: 'Antropometría ISAK',
          desc: 'Medición de pliegues y perímetros corporales para conocer exactamente tu masa muscular y porcentaje graso.'
        }
      ]
    },
    {
      name: 'Estética & Recuperación',
      subtitle: 'Tratamientos faciales, corporales y masajes',
      items: [
        {
          title: 'Estética Facial y Corporal',
          desc: 'Tecnología estética no invasiva para tonificación, textura dérmica y cuidado integral.'
        },
        {
          title: 'Masajes Deportivos y Descontracturantes',
          desc: 'Alivio de sobrecargas musculares, contracturas y optimización del rango de movimiento.'
        },
        {
          title: 'Masajes Relajantes & Drenaje Linfático',
          desc: 'Reducción de retención de líquidos, eliminación de toxinas y relajación profunda post entrenamiento.'
        }
      ]
    }
  ]
};

export const GYM_PLANS = [
  {
    name: 'Plan Monosede',
    badge: 'Popular',
    price: '$38.000',
    priceNote: 'Opciones mensuales y trimestrales',
    featured: false,
    description: 'Ideal si tenés una sede de preferencia cerca de tu casa o trabajo.',
    features: [
      'Acceso ilimitado a 1 sede elegida',
      'Área de musculación y peso libre',
      'Rutina inicial armada por coach de sala',
      'Uso de vestuarios y lockers',
      'Acceso a eventos internos'
    ],
    ctaText: 'Consultar',
    whatsappMessage: 'Hola FB SEVEN! Me interesa consultar el valor y opciones del Plan Monosede.'
  },
  {
    name: 'Pase Black Multisede',
    badge: 'Recomendado',
    price: '$48.000',
    priceNote: 'Pase libre para Pacífico, Ricchieri y Muñiz',
    featured: true,
    description: 'Entrená sin límites en las 3 sedes: Pacífico, Ricchieri y Muñiz con máxima libertad.',
    features: [
      'Acceso 100% libre a las 3 sedes',
      'Musculación + Funcional ilimitado',
      'Seguimiento mensual de progresiones',
      'Descuentos exclusivos en Suplementación FB',
      'Invitaciones mensuales para amigos',
      'Horarios extendidos sin restricción'
    ],
    ctaText: 'Consultar',
    whatsappMessage: 'Hola FB SEVEN! Quisiera consultar la promoción actual para el Pase Black Multisede (3 sedes).'
  },
  {
    name: 'Plan Elite Personalizado',
    badge: 'VIP 1 a 1',
    price: '$85.000',
    priceNote: 'Coach personal 1 a 1 + plan integral',
    featured: false,
    description: 'La experiencia definitiva con coach asignado, kinesiólogo y plan nutricional.',
    features: [
      'Acceso libre Multisede (3 ubicaciones)',
      'Coach personal 1 a 1 en cada sesión',
      'Planificación nutricional personalizada',
      'Evaluación kinésica y postural continua',
      'Prioridad de reserva y atención preferencial'
    ],
    ctaText: 'Consultar',
    whatsappMessage: 'Hola FB SEVEN! Quisiera consultar disponibilidad y costo del Plan Elite Personalizado.'
  }
];

export const GYM_FAQS = [
  {
    question: '¿Puedo entrenar en cualquiera de las 3 sedes con una sola cuota?',
    answer: '¡Sí! Con nuestro Pase Black Multisede podés asistir indistintamente a la Sede Pacífico (Senador Morón 1450), a la Sede Ricchieri (Ricchieri 691) y a la Sede Muñiz (León Gallardo 70) según te resulte más cómodo cada día.'
  },
  {
    question: '¿Qué diferencia a la Sede Pacífico (Ex Cine Gran Pacífico)?',
    answer: 'La Sede Pacífico es nuestro centro insignia: fue desarrollada recuperando la emblemática arquitectura del antiguo Cine Gran Pacífico. Posee una imponente doble altura, barandas doradas históricas, barra saludable con suplementos y la mayor concentración de maquinaria de biomecánica de la región.'
  },
  {
    question: '¿Los profesores me ayudan a armar la rutina si nunca entrené?',
    answer: 'Absolutamente. En FB SEVEN nos diferenciamos de las cadenas masivas porque contamos con entrenadores siempre atentos en sala para enseñarte la técnica correcta, armar tu plan acorde a tu nivel y cuidar que no sufras lesiones.'
  },
  {
    question: '¿Cómo puedo conocer los aranceles vigentes y métodos de pago?',
    answer: 'Podés consultarnos directamente por WhatsApp tocando cualquiera de los botones de la web. Aceptamos efectivo, transferencias bancarias y tarjetas a través de Mercado Pago con promociones especiales por trimestre o semestre.'
  },
  {
    question: '¿Tienen clases de prueba?',
    answer: '¡Por supuesto! Escribinos por WhatsApp indicando qué sede te gustaría visitar para coordinar una clase de prueba y conocer de primera mano nuestras instalaciones y coaches.'
  }
];
