// ============================================================
// handlers/reviews.js - Sistema de Filtro de Reseñas
// Regla de Oro: positivas → Google Maps, negativas → admin
// ============================================================

const config = require('../config');
const { crearAlertaQueja } = require('../data/database');
const { detectarEstrellas, contienePalabras } = require('../utils/format');

/**
 * Evalúa si el mensaje es una opinión/reseña y qué tipo
 * Retorna: null | { tipo: 'positivo' | 'negativo', estrellas: number | null }
 */
function evaluarOpinion(texto) {
  const estrellas = detectarEstrellas(texto);

  // Si hay estrellas explícitas
  if (estrellas !== null) {
    if (estrellas >= 4) return { tipo: 'positivo', estrellas };
    return { tipo: 'negativo', estrellas };
  }

  // Si hay palabras clave positivas
  const esPositivo = contienePalabras(texto, config.PALABRAS_POSITIVO);
  if (esPositivo) return { tipo: 'positivo', estrellas: null };

  // Si hay palabras clave negativas
  const esNegativo = contienePalabras(texto, config.PALABRAS_NEGATIVO);
  if (esNegativo) return { tipo: 'negativo', estrellas: null };

  return null;
}

/**
 * Genera la respuesta para una opinión positiva (4-5 estrellas)
 */
function respuestaPositiva(nombreContacto) {
  const nombre = nombreContacto || 'atleta';
  return `¡Qué alegría saber que entrenaste con todo, *${nombre}*! 💪🔥

Nos pone muy felices que hayas tenido una gran experiencia en *${config.GYM_NAME}*.

¿Nos das una mano dejando tu reseña en Google? ¡Tarda menos de 1 minuto y nos ayuda un montón! ⭐⭐⭐⭐⭐

👉 ${config.GOOGLE_MAPS_REVIEW_LINK}

¡Nos vemos en el próximo entrenamiento! 🏋️‍♂️🔥`;
}

/**
 * Genera la respuesta empática para una opinión negativa (1-3 estrellas)
 * Y registra la alerta interna
 */
function respuestaNegativa(nombreContacto, numero, textoOriginal, estrellas) {
  const nombre = nombreContacto || 'alumno/a';

  // Registrar alerta interna en base de datos
  const motivoAlerta = `Mensaje del cliente: "${textoOriginal.substring(0, 300)}"${estrellas ? ` (${estrellas} estrellas)` : ''}`;
  crearAlertaQueja({
    numero,
    nombre,
    motivo: motivoAlerta,
    calificacion: estrellas
  });

  console.log(`\n🚨 [ALERTA_QUEJA_INTERNA] Nueva queja registrada:`);
  console.log(`   📱 Número: ${numero}`);
  console.log(`   👤 Nombre: ${nombre}`);
  console.log(`   📝 Motivo: ${motivoAlerta}`);
  console.log(`   ⭐ Estrellas: ${estrellas || 'no especificado'}\n`);

  return `Lamentamos muchísimo que tu experiencia no haya sido la ideal, *${nombre}*. 😔

En *${config.GYM_NAME}* nos tomamos esto muy en serio y queremos mejorar para vos y para todos.

¿Nos contás con más detalle qué fue lo que sucedió? Así lo derivamos a la administración para que lo resuelvan *hoy mismo*. 🙏

📩 _Tu opinión llega directamente a quien puede solucionarlo._`;
}

/**
 * Handler principal de reviews — retorna respuesta o null si no aplica
 */
function manejarReview(texto, numero, nombreContacto) {
  const opinion = evaluarOpinion(texto);
  if (!opinion) return null;

  if (opinion.tipo === 'positivo') {
    return respuestaPositiva(nombreContacto);
  } else {
    return respuestaNegativa(nombreContacto, numero, texto, opinion.estrellas);
  }
}

/**
 * Notificación al admin cuando hay una queja nueva
 * (Llamar desde bot.js para enviar el mensaje al admin)
 */
function armarMensajeAlertaAdmin(numero, nombre, motivo) {
  return `🚨 *[ALERTA_QUEJA_INTERNA] — ${config.GYM_NAME}*

📱 *Cliente:* ${numero}
👤 *Nombre:* ${nombre || 'No identificado'}
📝 *Motivo:* ${motivo}

⚠️ _Por favor contactar al cliente a la brevedad para resolver la situación._

#FitBot #AlertaInterna`;
}

module.exports = {
  manejarReview,
  evaluarOpinion,
  respuestaPositiva,
  respuestaNegativa,
  armarMensajeAlertaAdmin
};
