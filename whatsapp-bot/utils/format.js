// ============================================================
// utils/format.js - Utilidades de Formateo de Mensajes
// ============================================================

const config = require('../config');

/**
 * Construye el mensaje del Menú Principal de FB SEVEN
 */
function menuPrincipal(nombreUsuario = null) {
  const saludo = nombreUsuario ? `¡Hola, *${nombreUsuario}*! 👋` : `¡Hola! 👋`;
  return `${saludo} Soy *FitBot*, el asistente oficial de *${config.GYM_NAME}* 💪🔥

¿En qué puedo ayudarte hoy?

*1️⃣* — 📅 Reservar turno / clase
*2️⃣* — 💰 Ver planes y precios
*3️⃣* — ⏱️ Horarios de atención
*4️⃣* — 📍 Ubicación de las sedes
*5️⃣* — 🏋️ Ver clases y actividades
*6️⃣* — 🩺 Servicios con turno (Apto Médico, Masajes, Nutrición, Kine)
*7️⃣* — ⭐ Dejar una opinión
*0️⃣* — 🧑‍💼 Hablar con un asesor humano

_Respondé con el número de la opción o escribí tu consulta directamente_ 👇`;
}

/**
 * Construye el mensaje de precios
 */
function mensajePlanes() {
  const planes = config.PLANES.map(p => {
    const rec = p.recomendado ? ' ⭐ _¡Más elegido!_' : '';
    return `*${p.nombre}${rec}*\n💵 ${p.precio}/mes\n📝 ${p.descripcion}\n📌 ${p.nota}`;
  }).join('\n\n─────────────────────\n\n');

  return `💰 *Planes y Membresías de ${config.GYM_NAME}*\n\n${planes}\n\n_Los precios pueden variar. Para la tarifa actualizada consultá con nuestro equipo 👇_\n\n¿Querés saber más sobre algún plan? Escribí el nombre o respondé *0️⃣* para hablar con un asesor 🙌`;
}

/**
 * Construye el mensaje de horarios
 */
function mensajeHorarios() {
  const sedeMsgs = config.SEDES.map(s => {
    return `*${s.nombre}*\n📍 ${s.direccion}\n📅 ${s.horario_semana}\n📅 ${s.horario_sabado}\n📅 ${s.horario_domingo}`;
  }).join('\n\n─────────────────────\n\n');

  return `⏱️ *Horarios de Atención — ${config.GYM_NAME}*\n\n${sedeMsgs}\n\n_Para consultas especiales o eventos, escribinos directamente._ 💬`;
}

/**
 * Construye el mensaje de ubicaciones
 */
function mensajeUbicaciones() {
  const sedeMsgs = config.SEDES.map(s => {
    return `*${s.nombre}*\n📍 ${s.direccion}\n🗺️ ${s.maps}`;
  }).join('\n\n─────────────────────\n\n');

  return `📍 *Nuestras Sedes — ${config.GYM_NAME}*\n\n${sedeMsgs}\n\n¡Con el *Pase Black Multisede* podés entrenar en las 3 sedes! 🏆`;
}

/**
 * Construye el mensaje de actividades
 */
function mensajeActividades() {
  const lista = config.ACTIVIDADES.map((a, i) => `*${i + 1}.* ${a}`).join('\n');
  return `🏋️ *Clases y Actividades — ${config.GYM_NAME}*\n\n${lista}\n\n💡 Muchas de estas clases requieren turno previo.\n¿Querés reservar tu lugar? Respondé *1️⃣* o escribí _"reservar"_ 📅`;
}

/**
 * Construye el mensaje de servicios con turno
 */
function mensajeServicios() {
  const lista = config.SERVICIOS_TURNO.map((s, i) => `*${i + 1}.* ${s}`).join('\n');
  return `🩺 *Servicios con Turno Previo — ${config.GYM_NAME}*\n\n${lista}\n\n⏱️ _Todos los servicios requieren reserva previa._\n\n¿Querés sacar un turno? Respondé *1️⃣* o escribí _"reservar"_ 📅`;
}

/**
 * Mensaje de derivación al humano
 */
function mensajeAsesor() {
  return `🧑‍💼 *Conectándote con un asesor de ${config.GYM_NAME}...*\n\nUn miembro de nuestro equipo te va a responder en breve. Si es urgente podés escribirnos directamente al número del gimnasio: +54 9 11 4472-4002\n\n¡Gracias por tu paciencia! 🙏💪`;
}

/**
 * Determina si el texto contiene alguna de las palabras clave
 */
function contienePalabras(texto, palabras) {
  const textoLower = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return palabras.some(p => {
    const pNorm = p.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return textoLower.includes(pNorm);
  });
}

/**
 * Calcula cuántas estrellas hay en el texto (1-5)
 * Retorna null si no hay estrellas detectadas
 */
function detectarEstrellas(texto) {
  // Estrellas emoji
  const matches = texto.match(/⭐/g);
  if (matches) return matches.length;

  // Texto "X estrellas"
  const numMatch = texto.match(/(\d)\s*estrellas?/i);
  if (numMatch) return parseInt(numMatch[1]);

  // "Cinco", "cuatro", "tres", "dos", "una" estrella
  const textoLower = texto.toLowerCase();
  if (textoLower.includes('cinco estrellas') || textoLower.includes('5 estrellas')) return 5;
  if (textoLower.includes('cuatro estrellas') || textoLower.includes('4 estrellas')) return 4;
  if (textoLower.includes('tres estrellas') || textoLower.includes('3 estrellas')) return 3;
  if (textoLower.includes('dos estrellas') || textoLower.includes('2 estrellas')) return 2;
  if (textoLower.includes('una estrella') || textoLower.includes('1 estrella')) return 1;

  return null;
}

module.exports = {
  menuPrincipal,
  mensajePlanes,
  mensajeHorarios,
  mensajeUbicaciones,
  mensajeActividades,
  mensajeServicios,
  mensajeAsesor,
  contienePalabras,
  detectarEstrellas
};
