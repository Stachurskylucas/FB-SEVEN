// ============================================================
// data/database.js - Persistencia JSON con lowdb
// Sin compilación nativa — funciona en cualquier Windows
// ============================================================

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const fs = require('fs');

// Asegurar que la carpeta data exista
const dataDir = path.join(__dirname);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Inicializar base de datos JSON
const adapter = new FileSync(path.join(dataDir, 'fitbot.json'));
const db = low(adapter);

function initDB() {
  db.defaults({
    reservas: [],
    conversaciones: [],
    alertas: [],
    logs: [],
    _nextId: { reservas: 1, alertas: 1, logs: 1 }
  }).write();
  console.log('✅ Base de datos FitBot inicializada correctamente (fitbot.json).');
}

// ─── ID autoincrementable ─────────────────────────────────
function nextId(tabla) {
  const current = db.get(`_nextId.${tabla}`).value() || 1;
  db.set(`_nextId.${tabla}`, current + 1).write();
  return current;
}

// ─── RESERVAS ────────────────────────────────────────────
function crearReserva({ numero, nombre, servicio, dia, horario, sede = null, notas = null }) {
  const id = nextId('reservas');
  const reserva = {
    id, numero_cliente: numero, nombre, servicio, dia, horario,
    sede, estado: 'pendiente', notas,
    creado_en: new Date().toISOString()
  };
  db.get('reservas').push(reserva).write();
  return id;
}

function obtenerReservasDelDia(dia) {
  return db.get('reservas')
    .filter(r => r.dia && r.dia.toLowerCase().includes(dia.toLowerCase()))
    .value();
}

function obtenerTodasLasReservas() {
  return db.get('reservas').value().slice(-50).reverse();
}

// ─── CONVERSACIONES ──────────────────────────────────────
function obtenerEstadoConversacion(numero) {
  const row = db.get('conversaciones').find({ numero }).value();
  if (!row) {
    return { estado: 'inicio', datos_temp: {} };
  }
  return {
    estado: row.estado || 'inicio',
    datos_temp: row.datos_temp || {}
  };
}

function actualizarEstadoConversacion(numero, estado, datosTmp = {}) {
  const existe = db.get('conversaciones').find({ numero }).value();
  if (existe) {
    db.get('conversaciones')
      .find({ numero })
      .assign({ estado, datos_temp: datosTmp, ultimo_mensaje: new Date().toISOString() })
      .write();
  } else {
    db.get('conversaciones').push({
      numero, estado, datos_temp: datosTmp,
      ultimo_mensaje: new Date().toISOString()
    }).write();
  }
}

function resetearConversacion(numero) {
  actualizarEstadoConversacion(numero, 'inicio', {});
}

// ─── ALERTAS ─────────────────────────────────────────────
function crearAlertaQueja({ numero, nombre = null, motivo, calificacion = null }) {
  const id = nextId('alertas');
  const alerta = {
    id, numero_cliente: numero, nombre, tipo: 'QUEJA',
    motivo, calificacion, estado: 'nueva',
    creado_en: new Date().toISOString()
  };
  db.get('alertas').push(alerta).write();
  return id;
}

function obtenerAlertasPendientes() {
  return db.get('alertas').filter({ estado: 'nueva' }).value();
}

function marcarAlertaResuelta(id) {
  db.get('alertas').find({ id }).assign({ estado: 'resuelta' }).write();
}

// ─── LOGS ─────────────────────────────────────────────────
function log(numero, direccion, mensaje) {
  const id = nextId('logs');
  db.get('logs').push({
    id, numero, direccion,
    mensaje: mensaje.substring(0, 500),
    timestamp: new Date().toISOString()
  }).write();
  // Limpiar logs viejos: mantener últimos 1000
  const logs = db.get('logs').value();
  if (logs.length > 1000) {
    db.set('logs', logs.slice(-1000)).write();
  }
}

module.exports = {
  initDB,
  crearReserva,
  obtenerReservasDelDia,
  obtenerTodasLasReservas,
  obtenerEstadoConversacion,
  actualizarEstadoConversacion,
  resetearConversacion,
  crearAlertaQueja,
  obtenerAlertasPendientes,
  marcarAlertaResuelta,
  log
};
