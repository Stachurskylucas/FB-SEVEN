// ============================================================
// FitBot - Configuración Central de FB SEVEN TRAINING
// Editá este archivo para actualizar datos del gimnasio
// ============================================================

module.exports = {

  // ──────────────────────────────────────
  // IDENTIDAD DEL BOT
  // ──────────────────────────────────────
  BOT_NAME: 'FitBot',
  GYM_NAME: 'FB SEVEN TRAINING',

  // ──────────────────────────────────────
  // CONTACTO Y ADMIN
  // ──────────────────────────────────────
  // Número sin +, 15 ni guiones (formato internacional)
  ADMIN_PHONE: '5491144724002',        // Número del dueño/admin que recibe alertas de quejas
  GYM_WHATSAPP: '5491144724002',       // Número principal del gimnasio

  // ──────────────────────────────────────
  // GOOGLE MAPS REVIEWS
  // ──────────────────────────────────────
  GOOGLE_MAPS_REVIEW_LINK: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5656816,-58.6841102,3519m/data=!3m1!1e3!4m10!1m2!2m1!1sFB+SEVEN+TRAINING!3m6!1s0x95bcbd86df4b38bf:0xfb47c13e20ebfb3!8m2!3d-34.5608491!4d-58.6879952',

  // ──────────────────────────────────────
  // SEDES
  // ──────────────────────────────────────
  SEDES: [
    {
      id: 'pacifico',
      nombre: '🏛 Sede Pacífico (Ex Cine Gran Pacífico)',
      direccion: 'Senador Morón 1450, Bella Vista',
      horario_semana: 'Lunes a Viernes: 07:00 a 22:00 hs',
      horario_sabado: 'Sábados: 09:00 a 18:00 hs',
      horario_domingo: 'Domingos: Consultar eventos/masterclasses',
      maps: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5608491,-58.6879952'
    },
    {
      id: 'ricchieri',
      nombre: '⚡ Sede Ricchieri',
      direccion: 'Av. Tte. Gral. Ricchieri 691, Bella Vista',
      horario_semana: 'Lunes a Viernes: 08:00 a 12:00 hs y 13:00 a 21:00 hs',
      horario_sabado: 'Sábados: 09:00 a 13:00 hs',
      horario_domingo: 'Domingos: Cerrado',
      maps: 'https://maps.google.com/?q=Ricchieri+691+Bella+Vista'
    },
    {
      id: 'muniz',
      nombre: '🌿 Sede Muñiz',
      direccion: 'León Gallardo 70, Muñiz',
      horario_semana: 'Lunes a Viernes: 08:00 a 13:00 hs y 15:00 a 21:00 hs',
      horario_sabado: 'Sábados: 09:00 a 13:00 hs',
      horario_domingo: 'Domingos: Cerrado',
      maps: 'https://www.google.com/maps/place/FB+SEVEN+TRAINING/@-34.5528503,-58.6973306'
    }
  ],

  // ──────────────────────────────────────
  // PLANES Y PRECIOS
  // ──────────────────────────────────────
  PLANES: [
    {
      nombre: '🔵 Plan Monosede',
      precio: '$38.000',
      descripcion: 'Acceso ilimitado a 1 sede elegida + rutina inicial de coach + vestuario y lockers.',
      nota: 'Opciones mensuales y trimestrales disponibles'
    },
    {
      nombre: '⭐ Pase Black Multisede',
      precio: '$48.000',
      descripcion: 'Acceso libre a las 3 sedes (Pacífico, Ricchieri y Muñiz). Musculación + Funcional ilimitado + seguimiento mensual.',
      nota: '¡El más elegido! Recomendado para máxima libertad',
      recomendado: true
    },
    {
      nombre: '👑 Plan Elite Personalizado',
      precio: '$85.000',
      descripcion: 'Multisede + coach personal 1 a 1 en cada sesión + plan nutricional + evaluación kinésica continua.',
      nota: 'La experiencia VIP completa de FB SEVEN'
    }
  ],

  // ──────────────────────────────────────
  // SERVICIOS CON TURNO PREVIO
  // ──────────────────────────────────────
  SERVICIOS_TURNO: [
    'Apto Médico Oficial con Electrocardiograma (ECG)',
    'Ergometría Graduada de Esfuerzo',
    'Masaje Descontracturante Profundo',
    'Masaje Deportivo de Recuperación',
    'Drenaje Linfático Manual',
    'Nutrición Deportiva y Antropometría ISAK',
    'Kinesiología y Readaptación Deportiva',
    'Training Personalizado 1 a 1',
    'Pilates Reformer',
    'Clase de Prueba Gratuita',
    'Evaluación Física Inicial'
  ],

  // ──────────────────────────────────────
  // ACTIVIDADES / CLASES GRUPALES
  // ──────────────────────────────────────
  ACTIVIDADES: [
    'Musculación & Biomecánica',
    'Training Asistido (grupos reducidos)',
    'Pilates Reformer',
    'Boxeo',
    'Funcional Box',
    'Acro Flex (Flexibilidad & Acrobacia)',
    'Skill for Kids (Niños)',
    'Running Team',
    'Estética Integral'
  ],

  // ──────────────────────────────────────
  // PALABRAS CLAVE PARA DETECCIÓN
  // ──────────────────────────────────────
  PALABRAS_SALUDO: ['hola', 'buenas', 'buen dia', 'buen día', 'buenas tardes', 'buenas noches', 'hey', 'ola', 'start', 'menu', 'menú'],
  PALABRAS_TURNO: ['reservar', 'turno', 'sacar turno', 'agendar', 'reserva', 'quiero turno', 'cita', 'appointment'],
  PALABRAS_HORARIOS: ['horario', 'horarios', 'cuando abren', 'cuándo abren', 'hora', 'a que hora', 'abren'],
  PALABRAS_PLANES: ['precio', 'precios', 'plan', 'planes', 'cuánto sale', 'cuanto sale', 'cuánto cuesta', 'cuanto cuesta', 'arancel', 'cuota', 'mensualidad', 'costo'],
  PALABRAS_UBICACION: ['donde', 'dónde', 'ubicación', 'ubicacion', 'dirección', 'direccion', 'sede', 'sedes', 'cómo llegar', 'como llegar', 'maps', 'mapa'],
  PALABRAS_CLASES: ['clase', 'clases', 'actividades', 'actividad', 'pilates', 'boxeo', 'funcional', 'musculacion', 'musculación', 'running', 'kids', 'servicios'],
  PALABRAS_POSITIVO: ['excelente', 'genial', 'perfecto', 'me encantó', 'me encanto', 'muy bien', 'buenísimo', 'buenisimo', 'increíble', 'increible', 'buenazo', '5 estrellas', '⭐⭐⭐⭐⭐', '5estrellas', 'maravilloso', 'fantástico', 'fantastico', '10 puntos', 'diez puntos', 'recomiendo', 'lo mejor'],
  PALABRAS_NEGATIVO: ['malo', 'mala', 'mal', 'pésimo', 'pesimo', 'horrible', 'decepcionante', 'queja', 'problema', 'no funciona', 'roto', 'sucio', 'fría', 'fria', 'caliente', '1 estrella', '2 estrellas', '3 estrellas', '⭐', '⭐⭐', '⭐⭐⭐', 'cobrar de más', 'cobrar de mas', 'tardaron', 'espera'],

};
