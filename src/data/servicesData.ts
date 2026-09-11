export interface GymService {
  id: string;
  title: string;
  subtitle: string;
  category: 'salud' | 'masajes' | 'nutricion' | 'kinesiologia' | 'personalizado';
  categoryLabel: string;
  badge?: string;
  badgeColor?: 'cyan' | 'emerald' | 'gold' | 'purple';
  description: string;
  duration: string;
  priceNote?: string;
  memberBenefit?: string;
  image: string;
  sedes: string[]; // IDs or names of sedes
  benefits: string[];
  requirements?: string;
  specialist?: string;
}

export const SERVICES_CATEGORIES = [
  { id: 'todos', label: 'Todos los Servicios' },
  { id: 'salud', label: 'Apto Médico & Salud' },
  { id: 'masajes', label: 'Masajes & Descarga' },
  { id: 'nutricion', label: 'Nutrición & ISAK' },
  { id: 'kinesiologia', label: 'Kinesiología' },
  { id: 'personalizado', label: 'Training 1 a 1' },
] as const;

export const GYM_SERVICES: GymService[] = [
  // 1. APTO MÉDICO OFICIAL
  {
    id: 'apto-medico',
    title: 'Apto Médico & Evaluación Deportiva',
    subtitle: 'Certificado de Aptitud Física Obligatorio con ECG',
    category: 'salud',
    categoryLabel: 'Salud & Apto Médico',
    badge: 'Obligatorio / Clínico',
    badgeColor: 'cyan',
    description: 'Evaluación médica integral presencial requerida para el inicio de cualquier actividad física. Incluye anamnesis clínica, examen cardiovascular, electrocardiograma (ECG) de reposo informado por cardiólogo matriculado y entrega inmediata del certificado de aptitud física.',
    duration: '20 - 30 min',
    priceNote: 'Arancel accesible • Turnos en el día',
    memberBenefit: '15% de reintegro en tu cuota al renovar con nosotros',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico (Bella Vista)', 'Sede Muñiz', 'Sede Ricchieri'],
    specialist: 'Médico Deportólogo & Cardiólogo Matriculado',
    benefits: [
      'Electrocardiograma (ECG) de 12 derivaciones con informe médico',
      'Examen cardiopulmonar, toma de presión arterial y pulso basal',
      'Certificado oficial válido por 1 año para gimnasios, clubes y maratones',
      'Detección preventiva de factores de riesgo cardiovascular'
    ],
    requirements: 'Asistir con ropa cómoda y DNI. Si contás con estudios previos recientes, podés traerlos.'
  },

  // 2. ERGOMETRÍA DE 12 DERIVACIONES
  {
    id: 'ergometria',
    title: 'Ergometría Graduada de Esfuerzo (PEG)',
    subtitle: 'Prueba de Esfuerzo Máxima para Deportistas',
    category: 'salud',
    categoryLabel: 'Salud & Apto Médico',
    badge: 'Alta Complejidad',
    badgeColor: 'gold',
    description: 'Estudio de monitoreo electrocardiográfico continuo sobre cinta ergométrica o cicloergómetro mientras se incrementa la carga de trabajo. Evalúa la respuesta cardíaca, presión arterial y capacidad aeróbica máxima ante el esfuerzo físico intenso.',
    duration: '40 min',
    priceNote: 'Convenios con obras sociales y prepagas por reintegro',
    memberBenefit: 'Descuento especial para atletas del Running Team y socios',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico (Bella Vista)', 'Sede Muñiz'],
    specialist: 'Equipo de Cardiología del Deporte',
    benefits: [
      'Determinación de zonas de frecuencia cardíaca de entrenamiento (Z1 a Z5)',
      'Descarte de isquemia miocárdica y arritmias inducidas por el ejercicio',
      'Informe detallado con cálculo de VO2 Máx estimado',
      'Recomendado para mayores de 35 años o atletas de mediana y alta exigencia'
    ],
    requirements: 'Ayuno liviano de 2 horas. Asistir con zapatillas de running y ropa deportiva.'
  },

  // 3. MASAJE DESCONTRACTURANTE PROFUNDO
  {
    id: 'masaje-descontracturante',
    title: 'Masaje Descontracturante Profundo',
    subtitle: 'Alivio de Sobrecargas, Cervicales y Zona Lumbar',
    category: 'masajes',
    categoryLabel: 'Masajes & Descarga',
    badge: 'Muy Solicitado',
    badgeColor: 'emerald',
    description: 'Terapia manual intensiva orientada a disolver nudos musculares (trigger points), tensiones posturales acumuladas y rigidez en trapecios, cuello, espalda baja y piernas. Restaura la oxigenación del tejido y devuelve la movilidad natural.',
    duration: '50 - 60 min',
    priceNote: 'Sesión individual o Pack x4 sesiones con descuento',
    memberBenefit: 'Tarifa preferencial para socios activos',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico (Gabinete Spa)', 'Sede Muñiz', 'Sede Ricchieri'],
    specialist: 'Masoterapeuta Deportivo & Terapéutico',
    benefits: [
      'Alivio inmediato de dolores de cuello, espalda y hombros',
      'Apertura de contracturas crónicas por sedentarismo o estrés laboral',
      'Utilización de aceites esenciales puros y cremas térmicas desinflamantes',
      'Mejora notable en la calidad del sueño y disminución del estrés'
    ]
  },

  // 4. MASAJE DEPORTIVO & DESCARGA MIOFASCIAL
  {
    id: 'masaje-deportivo',
    title: 'Masaje Deportivo & Descarga Pre/Post',
    subtitle: 'Optimización del Rendimiento y Recuperación Muscular Acelerada',
    category: 'masajes',
    categoryLabel: 'Masajes & Descarga',
    badge: 'Rendimiento Pro',
    badgeColor: 'cyan',
    description: 'Tratamiento kinésico manual enfocado en deportistas de pesas, crossfit, running y deportes de contacto. Aplica maniobras de presión profunda, descompresión miofascial y percusión para drenar ácido láctico y prevenir desgarros.',
    duration: '50 min',
    priceNote: 'Planes semanales para competidores',
    memberBenefit: 'Pases libres tienen prioridad en turnos pre-competencia',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico', 'Sede Ricchieri'],
    specialist: 'Especialista en Biomecánica & Masaje Deportivo',
    benefits: [
      'Acelera la recuperación tras entrenamientos de alta intensidad',
      'Previene contracturas y microdesgarros en isquiotibiales, cuádriceps y gemelos',
      'Aumenta la flexibilidad y la amplitud articular (ROM)',
      'Modalidad Pre-evento (activación) y Post-evento (descarga desintoxicante)'
    ]
  },

  // 5. CONSULTA NUTRICIONAL INTEGRAL
  {
    id: 'nutricion-integral',
    title: 'Nutrición Deportiva & Plan Personalizado',
    subtitle: 'Alimentación Estratégica según tu Disciplina y Metabolismo',
    category: 'nutricion',
    categoryLabel: 'Nutrición & ISAK',
    badge: '100% Personalizado',
    badgeColor: 'emerald',
    description: 'Plan de alimentación a medida diseñado por nutricionista deportiva licenciada. Olvidate de las dietas restrictivas genéricas: armamos un protocolo flexible y sostenible basado en tus gustos, horarios de trabajo, entrenamiento y requerimientos calóricos.',
    duration: '45 min (Primera consulta) / 30 min (Control)',
    priceNote: 'Consulta inicial + Seguimiento quincenal / mensual',
    memberBenefit: 'Guía de suplementación gratuita para socios',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico', 'Sede Muñiz', 'Modalidad Online disponible'],
    specialist: 'Lic. en Nutrición con Especialización Deportiva',
    benefits: [
      'Plan estructurado por macronutrientes (proteínas, hidratos y grasas saludables)',
      'Optimización de energía en entrenamientos y masa muscular magra',
      'Estrategias de hidratación y timing de ingesta pre y post entreno',
      'Protocolos de suplementación respaldados por evidencia científica (creatina, whey, etc.)'
    ]
  },

  // 6. ANTROPOMETRÍA ISAK Nivel II
  {
    id: 'antropometria-isak',
    title: 'Antropometría ISAK (Composición Corporal)',
    subtitle: 'El Gold Standard Mundial para Medir Músculo y Grasa',
    category: 'nutricion',
    categoryLabel: 'Nutrición & ISAK',
    badge: 'Precisión Milimétrica',
    badgeColor: 'purple',
    description: 'Medición antropométrica con calibres y plicómetros certificados bajo las normas de la International Society for the Advancement of Kinanthropometry (ISAK). Desglosa tu peso total en 5 componentes: masa grasa, masa muscular, ósea, visceral y residual.',
    duration: '35 min',
    priceNote: 'Incluye informe digital detallado en PDF con gráficos evolutivos',
    memberBenefit: 'Arancel especial en combo con Consulta Nutricional',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico', 'Sede Muñiz'],
    specialist: 'Antropometrista Certificado ISAK',
    benefits: [
      'Conocé exactamente cuántos kilos de músculo y grasa tenés (más allá de la balanza)',
      'Permite ver cambios reales en composición corporal antes de que se noten a simple vista',
      'Monitoreo trimestral objetivo para medir el éxito de tus rutinas',
      'Entrega de informe gráfico con somatotipo (endomorfo, mesomorfo, ectomorfo)'
    ],
    requirements: 'Presentarse con short deportivo corto y top o remera liviana para toma de pliegues.'
  },

  // 7. KINESIOLOGÍA & REHABILITACIÓN DEPORTIVA
  {
    id: 'kinesiologia-rehabilitacion',
    title: 'Kinesiología & Readaptación Funcional',
    subtitle: 'Superá Lesiones y Volvé a Entrenar al 100%',
    category: 'kinesiologia',
    categoryLabel: 'Kinesiología',
    badge: 'Gabinete Médico',
    badgeColor: 'cyan',
    description: 'Servicio de rehabilitación física integral especializado en lesiones del aparato locomotor: esguinces, tendinopatías, roturas fibrilares, meniscopatías y cirugías de ligamento. El objetivo no es solo quitar el dolor, sino readaptar tu cuerpo para que vuelvas a cargar peso con total seguridad.',
    duration: '45 - 60 min',
    priceNote: 'Sesión individual o Planes de Tratamiento',
    memberBenefit: 'Interconexión directa con los entrenadores de sala de FB SEVEN',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Muñiz (Gabinete Central)', 'Sede Pacífico'],
    specialist: 'Lic. en Kinesiología & Fisiatría (M.N. / M.P.)',
    benefits: [
      'Diagnóstico funcional kinésico y evaluación de patrones de movimiento',
      'Terapia manual, ejercicios propioceptivos y fortalecimiento excéntrico',
      'Pase gradual y coordinado del gabinete kinésico a la sala de musculación',
      'Corrección postural preventiva para evitar recidivas'
    ]
  },

  // 8. TRAINING PERSONALIZADO 1 A 1
  {
    id: 'training-1a1',
    title: 'Training Personalizado 1 a 1',
    subtitle: 'Atención y Planificación Exclusiva con tu Propio Coach',
    category: 'personalizado',
    categoryLabel: 'Training 1 a 1',
    badge: 'VIP / Exclusivo',
    badgeColor: 'gold',
    description: 'La máxima experiencia de entrenamiento de FB SEVEN. Tendrás un entrenador dedicado exclusivamente a vos durante toda la hora de sesión, supervisando cada repetición, dosificando descansos y ajustando la técnica biomecánica al milímetro.',
    duration: '60 min por sesión',
    priceNote: 'Packs mensuales de 2, 3 o 4 veces por semana',
    memberBenefit: 'Incluye acceso libre multisede a las 3 sedes',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico', 'Sede Ricchieri', 'Sede Muñiz'],
    specialist: 'Head Coach Personal Trainer FB SEVEN',
    benefits: [
      'Entrenador dedicado 100% a vos en cada serie y ejercicio',
      'Progresión de sobrecarga segura y adaptada a tus objetivos específicos',
      'Modalidades disponibles: 1 a 1 (individual), Dúo (parejas) o Grupo x4',
      'Revisión semanal de marcas personales y métricas corporales'
    ]
  },

  // 9. DRENAJE LINFÁTICO & ESTÉTICA CORPORAL
  {
    id: 'estetica-drenaje',
    title: 'Drenaje Linfático Manual & Estética Corporal',
    subtitle: 'Eliminación de Toxinas, Descongestión y Tonificación',
    category: 'masajes',
    categoryLabel: 'Masajes & Descarga',
    badge: 'Bienestar & Salud',
    badgeColor: 'purple',
    description: 'Maniobras manuales suaves y rítmicas orientadas a activar el sistema linfático superficial. Ideal para tratar retención de líquidos, piernas cansadas, post-operatorios y celulitis edematosa, complementando de forma ideal la rutina deportiva.',
    duration: '50 min',
    priceNote: 'Pack de 4 u 8 sesiones disponible',
    memberBenefit: 'Descuento del 10% abonando en efectivo o transferencia',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop',
    sedes: ['Sede Pacífico (Área Estética)', 'Sede Muñiz'],
    specialist: 'Esteticista & Masoterapeuta Certificada',
    benefits: [
      'Alivio inmediato de la sensación de pesadez e inflamación en miembros inferiores',
      'Favorece la eliminación de toxinas y mejora el retorno venoso',
      'Tratamiento seguro, no invasivo y profundamente relajante',
      'Apto para personas con retención de líquidos o deportistas en etapa de descarga'
    ]
  }
];

export const SEDES_LIST = [
  {
    id: 'pacifico',
    name: 'Sede Pacífico (Cine Pacífico)',
    address: 'Senador Morón 1450, Bella Vista',
    whatsappNumber: '5491144724002',
    servicesNote: 'Sede Central: Apto Médico, Nutrición, Masajes, Training 1a1, Estética'
  },
  {
    id: 'ricchieri',
    name: 'Sede Ricchieri',
    address: 'Ricchieri 691, Bella Vista',
    whatsappNumber: '5491144724002',
    servicesNote: 'Power & Performance: Masaje Deportivo, Apto Médico, Training 1a1'
  },
  {
    id: 'muniz',
    name: 'Sede Muñiz',
    address: 'León Gallardo 70, Muñiz',
    whatsappNumber: '5491144724002',
    servicesNote: 'Centro de Salud: Kinesiología, Apto Médico, Nutrición & ISAK, Masajes'
  }
];
