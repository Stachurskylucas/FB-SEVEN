// ============================================================
// bot.js - FitBot: Asistente Virtual de FB SEVEN TRAINING
// Punto de entrada principal
// Ejecutar con: node bot.js
// ============================================================

const { Client, LocalAuth, MessageTypes } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');
const { initDB, obtenerEstadoConversacion, actualizarEstadoConversacion, log } = require('./data/database');
const { routearMensaje } = require('./handlers/menu');

// ──────────────────────────────────────
// INICIALIZAR BASE DE DATOS
// ──────────────────────────────────────
initDB();

// ──────────────────────────────────────
// CONFIGURAR CLIENTE DE WHATSAPP
// ──────────────────────────────────────
const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'fitbot-fbseven',
    dataPath: './session'
  }),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  }
});

// ──────────────────────────────────────
// EVENTOS DEL CLIENTE
// ──────────────────────────────────────

// QR para autenticación
client.on('qr', (qr) => {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  🤖 FitBot — FB SEVEN TRAINING');
  console.log('  📱 Escaneá el QR con WhatsApp para conectar:');
  console.log('═══════════════════════════════════════════════════\n');
  qrcode.generate(qr, { small: true });
  console.log('\n  → Abrí WhatsApp → Dispositivos vinculados → Vincular dispositivo\n');
});

// Cargando...
client.on('loading_screen', (percent, message) => {
  if (percent % 25 === 0) {
    console.log(`⏳ Cargando WhatsApp... ${percent}% — ${message}`);
  }
});

// Autenticado
client.on('authenticated', () => {
  console.log('\n✅ FitBot autenticado correctamente.\n');
});

// Error de autenticación
client.on('auth_failure', (msg) => {
  console.error('❌ Error de autenticación:', msg);
  console.error('   Borrá la carpeta "session" y volvé a ejecutar para re-escanear el QR.');
});

// Bot listo
client.on('ready', () => {
  console.log('\n');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║  🤖 FitBot — FB SEVEN TRAINING                  ║');
  console.log('║  ✅ Bot activo y escuchando mensajes...          ║');
  console.log('║  📱 WhatsApp conectado exitosamente              ║');
  console.log('╚══════════════════════════════════════════════════╝');
  console.log('');
  console.log('  📊 Sistema de reservas: ACTIVO');
  console.log('  ⭐ Sistema de reviews: ACTIVO');
  console.log('  🚨 Sistema de alertas: ACTIVO');
  console.log('  🏋️  Sedes configuradas:', config.SEDES.length);
  console.log('  📋 Servicios disponibles:', config.SERVICIOS_TURNO.length);
  console.log('');
  console.log('  Presioná Ctrl+C para detener el bot.');
  console.log('');
});

// ──────────────────────────────────────
// PROCESAMIENTO DE MENSAJES
// ──────────────────────────────────────
client.on('message', async (msg) => {
  try {
    // Ignorar mensajes del propio bot, grupos, y no-texto
    if (msg.fromMe) return;
    if (msg.from.includes('@g.us')) return; // Ignorar grupos
    if (!msg.body || msg.body.trim() === '') return;

    const numero = msg.from.replace('@c.us', '');
    const texto = msg.body.trim();

    // Obtener nombre del contacto
    let nombreContacto = null;
    try {
      const contact = await msg.getContact();
      nombreContacto = contact.pushname || contact.name || null;
    } catch (e) { /* ignorar */ }

    // Loguear mensaje entrante
    log(numero, 'entrante', texto);
    console.log(`\n📩 [${new Date().toLocaleTimeString()}] ${numero} (${nombreContacto || 'Sin nombre'}):`);
    console.log(`   "${texto.substring(0, 100)}${texto.length > 100 ? '...' : ''}"`);

    // Obtener estado de la conversación
    const estadoConversacion = obtenerEstadoConversacion(numero);

    // Routear el mensaje
    const resultado = await routearMensaje(texto, numero, nombreContacto, estadoConversacion);

    // Actualizar estado en DB
    actualizarEstadoConversacion(
      numero,
      resultado.nuevoEstado || 'inicio',
      resultado.nuevosDatos || {}
    );

    // Enviar respuesta(s)
    const respuestas = Array.isArray(resultado.respuesta)
      ? resultado.respuesta
      : [resultado.respuesta];

    for (const respuesta of respuestas) {
      if (respuesta) {
        await new Promise(r => setTimeout(r, 800)); // Pequeña pausa natural
        await client.sendMessage(msg.from, respuesta);
        log(numero, 'saliente', respuesta);
        console.log(`   📤 FitBot respondió (${respuesta.length} chars)`);
      }
    }

    // Si hay alerta de admin, notificar al número configurado
    if (resultado.alertaAdmin && config.ADMIN_PHONE) {
      setTimeout(async () => {
        try {
          await client.sendMessage(`${config.ADMIN_PHONE}@c.us`, resultado.alertaAdmin);
          console.log(`   🚨 Alerta enviada al admin (${config.ADMIN_PHONE})`);
        } catch (e) {
          console.error('   ⚠️ No se pudo enviar alerta al admin:', e.message);
        }
      }, 2000);
    }

  } catch (error) {
    console.error('❌ Error procesando mensaje:', error.message);
    // En caso de error, enviar mensaje genérico
    try {
      await client.sendMessage(msg.from,
        `Disculpá, tuvimos un problema técnico momentáneo. 😔\n\nPor favor escribinos directamente al +54 9 11 4472-4002 o volvé a intentarlo en unos minutos.\n\n¡Gracias por tu paciencia! 🙏`
      );
    } catch (e) { /* ignorar */ }
  }
});

// ──────────────────────────────────────
// MANEJO DE CIERRE LIMPIO
// ──────────────────────────────────────
process.on('SIGINT', async () => {
  console.log('\n\n⏹️  Deteniendo FitBot...');
  await client.destroy();
  console.log('✅ Bot desconectado correctamente. ¡Hasta luego! 💪\n');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Error no capturado:', error);
});

// ──────────────────────────────────────
// INICIAR CLIENTE
// ──────────────────────────────────────
console.log('\n🚀 Iniciando FitBot — FB SEVEN TRAINING...\n');
client.initialize();
