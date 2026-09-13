// ============================================================
// handlers/menu.js - Router Principal de Mensajes
// Detecta intención y delega al handler correcto
// ============================================================

const config = require('../config');
const {
  menuPrincipal, mensajePlanes, mensajeHorarios,
  mensajeUbicaciones, mensajeActividades, mensajeServicios,
  mensajeAsesor, contienePalabras
} = require('../utils/format');

const { iniciarReserva, procesarPasoReserva, confirmarReserva, ESTADOS_RESERVA } = require('./reservas');
const { manejarReview, armarMensajeAlertaAdmin } = require('./reviews');

/**
 * Router principal de mensajes entrantes
 * 
 * @param {string} texto - Texto del mensaje recibido
 * @param {string} numero - Número de WhatsApp del remitente
 * @param {string} nombreContacto - Nombre del contacto (si está guardado)
 * @param {object} estadoConversacion - Estado actual de la conversación { estado, datos_temp }
 * @returns {{ respuesta: string|string[], nuevoEstado: string, nuevosDatos: object, alertaAdmin: string|null }}
 */
function routearMensaje(texto, numero, nombreContacto, estadoConversacion) {
  const { estado, datos_temp } = estadoConversacion;
  const textoLower = texto.toLowerCase().trim();
  let alertaAdmin = null;

  // ── COMANDOS DE ADMIN ──
  if (numero === config.ADMIN_PHONE) {
    if (textoLower === '!alertas') {
      const { obtenerAlertasPendientes } = require('../data/database');
      const alertas = obtenerAlertasPendientes();
      if (alertas.length === 0) {
        return { respuesta: '✅ No hay quejas pendientes.', nuevoEstado: 'inicio', nuevosDatos: {} };
      }
      const lista = alertas.map(a =>
        `🚨 #${a.id} | ${a.nombre || a.numero_cliente} | ${a.motivo?.substring(0, 100)} | ${a.creado_en}`
      ).join('\n\n');
      return { respuesta: `📊 *Alertas pendientes:*\n\n${lista}`, nuevoEstado: 'inicio', nuevosDatos: {} };
    }
    if (textoLower === '!reservas') {
      const { obtenerTodasLasReservas } = require('../data/database');
      const reservas = obtenerTodasLasReservas();
      if (reservas.length === 0) {
        return { respuesta: '📅 No hay reservas registradas todavía.', nuevoEstado: 'inicio', nuevosDatos: {} };
      }
      const lista = reservas.slice(0, 10).map(r =>
        `📋 #${r.id} | ${r.nombre} | ${r.servicio} | ${r.dia} ${r.horario} | ${r.sede || '-'} | ${r.estado}`
      ).join('\n');
      return { respuesta: `📅 *Últimas reservas:*\n\n${lista}`, nuevoEstado: 'inicio', nuevosDatos: {} };
    }
  }

  // ── SI HAY UN FLUJO DE RESERVA ACTIVO ──
  const estadosReserva = Object.values(ESTADOS_RESERVA);
  if (estadosReserva.includes(estado)) {
    // Permitir cancelar el flujo en cualquier momento
    if (['cancelar', 'salir', 'menu', 'menú', 'volver', '0'].includes(textoLower)) {
      return {
        respuesta: '↩️ Reserva cancelada. Volvés al menú principal.\n\n' + menuPrincipal(nombreContacto),
        nuevoEstado: 'inicio',
        nuevosDatos: {}
      };
    }

    const resultado = procesarPasoReserva(estado, texto, datos_temp);

    if (resultado.confirmar) {
      const mensajeConfirmacion = confirmarReserva(numero, resultado.datos);
      return {
        respuesta: mensajeConfirmacion,
        nuevoEstado: 'inicio',
        nuevosDatos: {}
      };
    }

    if (resultado.cancelar) {
      return {
        respuesta: resultado.respuesta,
        nuevoEstado: 'inicio',
        nuevosDatos: {}
      };
    }

    return {
      respuesta: resultado.respuesta,
      nuevoEstado: resultado.nuevoEstado,
      nuevosDatos: resultado.nuevosDatos
    };
  }

  // ── DETECCIÓN DE REVIEWS / OPINIONES ──
  const respuestaReview = manejarReview(texto, numero, nombreContacto);
  if (respuestaReview) {
    // Si es queja, armar alerta para admin
    const { evaluarOpinion } = require('./reviews');
    const opinion = evaluarOpinion(texto);
    if (opinion && opinion.tipo === 'negativo') {
      alertaAdmin = armarMensajeAlertaAdmin(numero, nombreContacto, texto);
    }
    return {
      respuesta: respuestaReview,
      nuevoEstado: 'inicio',
      nuevosDatos: {},
      alertaAdmin
    };
  }

  // ── FLUJO INTERACTIVO OPCIONES DEL MENÚ ──
  // Opción 1 o palabras de reserva
  if (textoLower === '1' || contienePalabras(texto, config.PALABRAS_TURNO)) {
    const { respuesta, nuevoEstado } = iniciarReserva();
    return { respuesta, nuevoEstado, nuevosDatos: {} };
  }

  // Opción 2 o precios
  if (textoLower === '2' || contienePalabras(texto, config.PALABRAS_PLANES)) {
    return { respuesta: mensajePlanes(), nuevoEstado: 'inicio', nuevosDatos: {} };
  }

  // Opción 3 o horarios
  if (textoLower === '3' || contienePalabras(texto, config.PALABRAS_HORARIOS)) {
    return { respuesta: mensajeHorarios(), nuevoEstado: 'inicio', nuevosDatos: {} };
  }

  // Opción 4 o ubicación
  if (textoLower === '4' || contienePalabras(texto, config.PALABRAS_UBICACION)) {
    return { respuesta: mensajeUbicaciones(), nuevoEstado: 'inicio', nuevosDatos: {} };
  }

  // Opción 5 o actividades
  if (textoLower === '5' || textoLower === 'clases' || (contienePalabras(texto, config.PALABRAS_CLASES) && !contienePalabras(texto, ['servicio', 'apto', 'masaje', 'kine', 'nutri']))) {
    return { respuesta: mensajeActividades(), nuevoEstado: 'inicio', nuevosDatos: {} };
  }

  // Opción 6 o servicios de salud
  if (textoLower === '6' || textoLower === 'servicios' || contienePalabras(texto, ['apto medico', 'apto médico', 'masaje', 'nutricion', 'nutrición', 'kinesio', 'kine', 'pilates'])) {
    return { respuesta: mensajeServicios(), nuevoEstado: 'inicio', nuevosDatos: {} };
  }

  // Opción 7 o reviews
  if (textoLower === '7' || contienePalabras(texto, ['opinión', 'opinion', 'reseña', 'resena', 'review', 'calificación', 'calificacion', 'estrella'])) {
    return {
      respuesta: `⭐ *Dejá tu opinión sobre ${config.GYM_NAME}*\n\n¿Cómo fue tu experiencia con nosotros?\n\nContanos cómo estuvo (excelente, buena, regular...) o podés puntuar con ⭐⭐⭐⭐⭐ 👇`,
      nuevoEstado: 'esperando_review',
      nuevosDatos: {}
    };
  }

  // Opción 0 o asesor humano
  if (textoLower === '0' || contienePalabras(texto, ['asesor', 'humano', 'persona', 'hablar con', 'hablar con alguien', 'necesito ayuda', 'ayuda'])) {
    return { respuesta: mensajeAsesor(), nuevoEstado: 'esperando_asesor', nuevosDatos: {} };
  }

  // ── SALUDOS → MENÚ PRINCIPAL ──
  if (contienePalabras(texto, config.PALABRAS_SALUDO) || texto.length <= 5) {
    return {
      respuesta: menuPrincipal(nombreContacto),
      nuevoEstado: 'inicio',
      nuevosDatos: {}
    };
  }

  // ── FALLBACK: No entendimos ──
  return {
    respuesta: `😊 Hola! No entendí bien tu consulta. Acá el menú de opciones para ayudarte rápido:\n\n${menuPrincipal(nombreContacto)}`,
    nuevoEstado: 'inicio',
    nuevosDatos: {}
  };
}

module.exports = { routearMensaje };
