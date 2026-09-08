// ==============================================================================
// UTILIDADES DE CIBERSEGURIDAD, ANTI-CSRF Y RECAPTCHA V3
// Módulo 1: Seguridad y Privacidad
// ==============================================================================

const CSRF_STORAGE_KEY = 'fbseven_csrf_token';
const RATE_LIMIT_STORAGE_KEY = 'fbseven_last_submit_timestamp';

/**
 * 1. Genera un token criptográficamente seguro para prevenir ataques CSRF
 */
export function getOrCreateCsrfToken(): string {
  if (typeof window === 'undefined') return '';
  
  let token = sessionStorage.getItem(CSRF_STORAGE_KEY);
  if (!token) {
    const array = new Uint8Array(24);
    window.crypto.getRandomValues(array);
    token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem(CSRF_STORAGE_KEY, token);
  }
  return token;
}

/**
 * 2. Valida la coincidencia del token CSRF del formulario con el de la sesión
 */
export function validateCsrfToken(submittedToken: string): boolean {
  if (typeof window === 'undefined') return false;
  const storedToken = sessionStorage.getItem(CSRF_STORAGE_KEY);
  return Boolean(storedToken && submittedToken && storedToken === submittedToken);
}

/**
 * 3. Rate limiting en frontend: Previene envíos automáticos masivos (Flood/Spam)
 * Permite máximo 1 envío cada 6 segundos por cliente.
 */
export function checkSubmissionRateLimit(minIntervalSeconds: number = 6): { allowed: boolean; waitSeconds?: number } {
  if (typeof window === 'undefined') return { allowed: true };
  
  const lastSubmit = sessionStorage.getItem(RATE_LIMIT_STORAGE_KEY);
  const now = Date.now();

  if (lastSubmit) {
    const elapsedSeconds = (now - parseInt(lastSubmit, 10)) / 1000;
    if (elapsedSeconds < minIntervalSeconds) {
      const wait = Math.ceil(minIntervalSeconds - elapsedSeconds);
      return { allowed: false, waitSeconds: wait };
    }
  }

  sessionStorage.setItem(RATE_LIMIT_STORAGE_KEY, now.toString());
  return { allowed: true };
}

/**
 * 4. Sanitización estricta de cadenas de texto para prevenir inyecciones XSS
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Elimina etiquetas HTML
    .replace(/javascript:/gi, '') // Elimina pseudoprotocolos maliciosos
    .replace(/on\w+=/gi, '') // Elimina handlers inline (onerror, onload, onclick, etc.)
    .trim();
}

/**
 * 5. Cargador y ejecutor de Google reCAPTCHA v3
 * Si no se define VITE_RECAPTCHA_SITE_KEY en el entorno, opera en modo pass-through seguro sin romper la UX.
 */
export async function executeRecaptcha(action: string = 'submit_lead'): Promise<string | null> {
  const siteKey = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_RECAPTCHA_SITE_KEY;
  
  if (!siteKey || siteKey === 'your_recaptcha_site_key') {
    // Modo passthrough en desarrollo o sin credenciales API configuradas
    return 'recaptcha_dev_token';
  }

  if (typeof window === 'undefined') return null;

  return new Promise((resolve) => {
    const win = window as unknown as { grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } };

    // Si el script ya está cargado
    if (win.grecaptcha) {
      win.grecaptcha.ready(async () => {
        try {
          const token = await win.grecaptcha!.execute(siteKey, { action });
          resolve(token);
        } catch {
          resolve(null);
        }
      });
      return;
    }

    // Inyectar script asíncrono
    const scriptId = 'google-recaptcha-v3-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (win.grecaptcha) {
          win.grecaptcha.ready(async () => {
            try {
              const token = await win.grecaptcha!.execute(siteKey, { action });
              resolve(token);
            } catch {
              resolve(null);
            }
          });
        } else {
          resolve(null);
        }
      };
      script.onerror = () => resolve(null);
      document.head.appendChild(script);
    } else {
      resolve(null);
    }
  });
}
