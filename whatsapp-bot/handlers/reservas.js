// ============================================================
// handlers/reservas.js - Flujo de Reserva de Turnos
// Paso a paso: nombre → servicio → sede → día → hora → confirm
// ============================================================

const config = require('../config');
const { actualizarEstadoConversacion, crearReserva } = require('../data/database');

// Estados del flujo de reserva
const ESTADOS_RESERVA = {
  PEDIR_NOMBRE: 'reserva_nombre',
  PEDIR_SERVICIO: 'reserva_servicio',
  PEDIR_SEDE: 'reserva_sede',
  PEDIR_DIA: 'reserva_dia',
  PEDIR_HORARIO: 'reserva_horario',
  CONFIRMACION: 'reserva_confirmacion'
};

/**
 * Inicia el flujo de reserva
 */
function iniciarReserva() {
  return {
    nuevoEstado: ESTADOS_RESERVA.PEDIR_NOMBRE,
    respuesta: `📅 *Reserva de Turno — ${config.GYM_NAME}*

¡Perfecto! Te ayudo a reservar tu turno en pocos pasos. 🏋️

*Paso 1 de 5:* ¿Cuál es tu nombre completo? 👤

_(Escribí tu nombre y apellido, ej: "Juan García")_`
  };
}

/**
 * Procesa cada paso del flujo de reserva
 */
function procesarPasoReserva(estadoActual, texto, datos) {
  const textoLimpio = texto.trim();

  switch (estadoActual) {

    // ── PASO 1: Pedir nombre ──
    case ESTADOS_RESERVA.PEDIR_NOMBRE: {
      if (textoLimpio.length < 2) {
        return {
          respuesta: '⚠️ Por favor ingresá tu nombre completo (ej: "María López").',
          nuevoEstado: estadoActual,
          nuevosDatos: datos
        };
      }

      const serviciosLista = config.SERVICIOS_TURNO
        .map((s, i) => `*${i + 1}.* ${s}`)
        .join('\n');

      return {
        nuevoEstado: ESTADOS_RESERVA.PEDIR_SERVICIO,
        nuevosDatos: { ...datos, nombre: textoLimpio },
        respuesta: `Genial, *${textoLimpio}*! 💪

*Paso 2 de 5:* ¿Qué servicio querés reservar?

${serviciosLista}

_Respondé con el número o el nombre del servicio que te interesa_ 👇`
      };
    }

    // ── PASO 2: Pedir servicio ──
    case ESTADOS_RESERVA.PEDIR_SERVICIO: {
      let servicioElegido = null;

      // Intentar por número
      const num = parseInt(textoLimpio);
      if (!isNaN(num) && num >= 1 && num <= config.SERVICIOS_TURNO.length) {
        servicioElegido = config.SERVICIOS_TURNO[num - 1];
      } else {
        // Intentar por texto parcial
        servicioElegido = config.SERVICIOS_TURNO.find(s =>
          s.toLowerCase().includes(textoLimpio.toLowerCase())
        );
      }

      if (!servicioElegido) {
        const lista = config.SERVICIOS_TURNO.map((s, i) => `*${i + 1}.* ${s}`).join('\n');
        return {
          nuevoEstado: estadoActual,
          nuevosDatos: datos,
          respuesta: `⚠️ No encontré ese servicio. Por favor elegí uno de la lista:\n\n${lista}`
        };
      }

      const sedesLista = config.SEDES.map((s, i) => `*${i + 1}.* ${s.nombre}\n   📍 ${s.direccion}`).join('\n\n');

      return {
        nuevoEstado: ESTADOS_RESERVA.PEDIR_SEDE,
        nuevosDatos: { ...datos, servicio: servicioElegido },
        respuesta: `✅ Servicio elegido: *${servicioElegido}*

*Paso 3 de 5:* ¿En qué sede preferís atenderte?

${sedesLista}

_Respondé con el número de la sede_ 👇`
      };
    }

    // ── PASO 3: Pedir sede ──
    case ESTADOS_RESERVA.PEDIR_SEDE: {
      let sedeElegida = null;

      const numSede = parseInt(textoLimpio);
      if (!isNaN(numSede) && numSede >= 1 && numSede <= config.SEDES.length) {
        sedeElegida = config.SEDES[numSede - 1];
      } else {
        sedeElegida = config.SEDES.find(s =>
          s.nombre.toLowerCase().includes(textoLimpio.toLowerCase()) ||
          s.id.toLowerCase().includes(textoLimpio.toLowerCase())
        );
      }

      if (!sedeElegida) {
        const lista = config.SEDES.map((s, i) => `*${i + 1}.* ${s.nombre}`).join('\n');
        return {
          nuevoEstado: estadoActual,
          nuevosDatos: datos,
          respuesta: `⚠️ No reconozco esa sede. Por favor elegí:\n\n${lista}`
        };
      }

      return {
        nuevoEstado: ESTADOS_RESERVA.PEDIR_DIA,
        nuevosDatos: { ...datos, sede: sedeElegida.nombre },
        respuesta: `✅ Sede: *${sedeElegida.nombre}*
📍 ${sedeElegida.direccion}

*Paso 4 de 5:* ¿Qué día preferís el turno? 📅

Ejemplos: _"Lunes 15/09"_, _"Martes de la semana que viene"_, _"Lo antes posible"_

👇`
      };
    }

    // ── PASO 4: Pedir día ──
    case ESTADOS_RESERVA.PEDIR_DIA: {
      if (textoLimpio.length < 2) {
        return {
          nuevoEstado: estadoActual,
          nuevosDatos: datos,
          respuesta: '⚠️ Por favor indicá el día que preferís para el turno.'
        };
      }

      return {
        nuevoEstado: ESTADOS_RESERVA.PEDIR_HORARIO,
        nuevosDatos: { ...datos, dia: textoLimpio },
        respuesta: `✅ Día elegido: *${textoLimpio}*

*Paso 5 de 5:* ¿En qué horario preferís? ⏱️

Ejemplos: _"Mañana (9:00-12:00)"_, _"Tarde (15:00-18:00)"_, _"Noche (18:00-21:00)"_

👇`
      };
    }

    // ── PASO 5: Pedir horario ──
    case ESTADOS_RESERVA.PEDIR_HORARIO: {
      if (textoLimpio.length < 2) {
        return {
          nuevoEstado: estadoActual,
          nuevosDatos: datos,
          respuesta: '⚠️ Por favor indicá el horario de tu preferencia.'
        };
      }

      const nuevosDatos = { ...datos, horario: textoLimpio };

      return {
        nuevoEstado: ESTADOS_RESERVA.CONFIRMACION,
        nuevosDatos,
        respuesta: `✅ ¡Perfecto! Revisá el resumen de tu reserva:

─────────────────────
👤 *Nombre:* ${nuevosDatos.nombre}
🩺 *Servicio:* ${nuevosDatos.servicio}
🏢 *Sede:* ${nuevosDatos.sede}
📅 *Día:* ${nuevosDatos.dia}
⏱️ *Horario preferido:* ${nuevosDatos.horario}
─────────────────────

¿Confirmamos la solicitud? 

*✅ SI* — para confirmar
*❌ NO* — para cancelar y volver al menú`
      };
    }

    // ── CONFIRMACIÓN FINAL ──
    case ESTADOS_RESERVA.CONFIRMACION: {
      const textoLower = textoLimpio.toLowerCase();

      if (textoLower.includes('si') || textoLower.includes('sí') || textoLower === 'yes' || textoLower === 's') {
        return {
          confirmar: true,
          datos
        };
      } else if (textoLower.includes('no') || textoLower === 'n') {
        return {
          cancelar: true,
          respuesta: '❌ Reserva cancelada. ¡Cuando quieras volvemos a intentarlo! 💪\n\nEscribí *"menu"* para ver las opciones.'
        };
      } else {
        return {
          nuevoEstado: estadoActual,
          nuevosDatos: datos,
          respuesta: '¿Confirmamos la reserva? Respondé *SI* para confirmar o *NO* para cancelar.'
        };
      }
    }

    default:
      return null;
  }
}

/**
 * Finaliza una reserva confirmada
 */
function confirmarReserva(numero, datos) {
  // Guardar en DB
  const id = crearReserva({
    numero,
    nombre: datos.nombre,
    servicio: datos.servicio,
    dia: datos.dia,
    horario: datos.horario,
    sede: datos.sede
  });

  return `🎉 *¡Reserva enviada exitosamente!* 

📋 *N° de solicitud:* #${id}
👤 *Nombre:* ${datos.nombre}
🩺 *Servicio:* ${datos.servicio}
🏢 *Sede:* ${datos.sede}
📅 *Día:* ${datos.dia}
⏱️ *Horario:* ${datos.horario}

🔔 *Un asesor de ${config.GYM_NAME} te va a confirmar el turno exacto en breve por este mismo chat.*

¡Muchas gracias y nos vemos en el gym! 💪🔥

_Para otra consulta escribí "menu"._`;
}

module.exports = {
  ESTADOS_RESERVA,
  iniciarReserva,
  procesarPasoReserva,
  confirmarReserva
};
