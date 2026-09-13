# FB SEVEN - FitBot WhatsApp Bot 🤖💪

Bot automático de WhatsApp para FB SEVEN TRAINING, actuando como recepcionista virtual "FitBot".

## 📋 Características

- 🏋️ Información completa del gimnasio (3 sedes, horarios, planes, actividades)
- 📅 Gestión de reservas de turnos para servicios y clases
- ⭐ Filtro inteligente de reseñas (dirige positivas a Google Maps, negativas a la administración)
- 🎯 Respuestas automáticas a preguntas frecuentes
- 📊 Gestión de alertas internas de quejas
- 💬 Formato optimizado para WhatsApp con emojis

## 🛠 Tecnologías

- **Node.js** + **whatsapp-web.js** (cliente de WhatsApp Web)
- **qrcode-terminal** (QR en consola para escanear)
- **better-sqlite3** (base de datos de reservas y logs)
- **node-cron** (recordatorios automáticos)

## 🚀 Instalación

```bash
# 1. Entrar a la carpeta del bot
cd whatsapp-bot

# 2. Instalar dependencias
npm install

# 3. Ejecutar el bot
node bot.js
```

## 📱 Primera Ejecución

1. Al ejecutar `node bot.js`, aparecerá un código **QR en la consola**.
2. Abrí WhatsApp en tu celular → Dispositivos Vinculados → Vincular un Dispositivo.
3. Escaneá el QR con la cámara.
4. ¡El bot queda activo y conectado al número escaneado!

> ⚠️ **Importante:** El número que escanee el QR será el número del bot. Se recomienda usar el número oficial de FB SEVEN: +54 9 11 4472-4002 o un número secundario dedicado.

## 📁 Estructura de Archivos

```
whatsapp-bot/
├── bot.js              → Punto de entrada principal
├── config.js           → Configuración del gimnasio
├── handlers/
│   ├── menu.js         → Flujo de menú principal
│   ├── reservas.js     → Gestión de turnos y reservas
│   ├── reviews.js      → Filtro de reseñas y satisfacción
│   └── alertas.js      → Sistema de alertas internas
├── data/
│   ├── gym-info.js     → Base de conocimiento FB SEVEN
│   └── reservas.db     → Base de datos SQLite de reservas (auto-creada)
├── utils/
│   └── format.js       → Funciones de formateo de mensajes
├── package.json
└── README.md
```

## 🔧 Configuración

Editá `config.js` para ajustar:
- Número de WhatsApp del administrador (para recibir alertas)
- Enlace de Google Maps Reviews
- Horarios de atención

## 📊 Sistema de Alertas

Cuando un usuario reporta mala experiencia (1-3 estrellas), el bot:
1. Responde con empatía sin derivar a Google Maps
2. Registra internamente: `[ALERTA_QUEJA_INTERNA]`
3. Envía notificación al número del administrador con detalles completos

## 🔄 Flujos Principales

| Consulta del Usuario | Acción del Bot |
|---|---|
| "hola" / "info" | Menú principal |
| "reservar" / "turno" | Flujo de reserva paso a paso |
| "precio" / "planes" | Lista de planes FB SEVEN |
| "horarios" | Horarios de las 3 sedes |
| "ubicación" | Direcciones y links de Maps |
| "clases" | Lista de actividades disponibles |
| "me encantó" / "⭐⭐⭐⭐⭐" | Invitación a reseña de Google |
| "mal" / "queja" / 1-3 ⭐ | Empatía + alerta interna |

## ⚙️ Comandos de Administración

Enviá desde el número del admin:
- `!reservas` → Ver todas las reservas del día
- `!alertas` → Ver quejas pendientes
- `!clear` → Limpiar conversaciones viejas
