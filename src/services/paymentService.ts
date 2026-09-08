// ==============================================================================
// ARQUITECTURA DE PAGO TOKENIZADA (PCI-DSS COMPLIANT)
// Módulo 1: Seguridad y Privacidad (MercadoPago SDK & Stripe Tokenization)
// ==============================================================================

export interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  currency: 'ARS';
  description: string;
}

export interface TokenizedCardPayload {
  cardNumberFirstSix: string; // Para identificar banco / franquicia sin almacenar PAN
  cardholderName: string;
  token: string;              // Token seguro emitido por MercadoPago / Stripe
  paymentMethodId: string;    // 'visa', 'master', etc.
  installments: number;
}

/**
 * 1. Inicialización segura del SDK de MercadoPago
 * Los datos sensibles nunca pasan ni se almacenan en el backend propio.
 */
export async function initializeMercadoPagoSdk(publicKey?: string): Promise<boolean> {
  const key = publicKey || (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_MERCADOPAGO_PUBLIC_KEY;
  if (!key) {
    console.info('[PaymentService] MercadoPago operando en modo simulación/presencial');
    return false;
  }

  if (typeof window === 'undefined') return false;

  // Cargar SDK v2 oficial de MercadoPago de forma asíncrona
  return new Promise((resolve) => {
    if ((window as unknown as { MercadoPago?: unknown }).MercadoPago) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

/**
 * 2. Tokenización Segura de Tarjeta (MercadoPago)
 * El navegador del cliente se comunica directamente con los servidores PCI-DSS de MercadoPago.
 */
export async function tokenizeCardMercadoPago(cardData: {
  cardNumber: string;
  cardholderName: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  securityCode: string;
  identificationType: string;
  identificationNumber: string;
}): Promise<TokenizedCardPayload> {
  const win = window as unknown as { MercadoPago?: new (key: string, opts?: { locale: string }) => { createCardToken: (data: unknown) => Promise<{ id: string; first_six_digits: string; payment_method_id?: string }> } };
  const mpPublicKey = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_MERCADOPAGO_PUBLIC_KEY || 'TEST-PUBLIC-KEY';

  if (!win.MercadoPago) {
    // Fallback de desarrollo seguro tokenizado
    return {
      token: `mp_tok_${Date.now()}_simulated`,
      cardNumberFirstSix: cardData.cardNumber.replace(/\s/g, '').slice(0, 6) || '450995',
      cardholderName: cardData.cardholderName,
      paymentMethodId: 'visa',
      installments: 1
    };
  }

  const mp = new win.MercadoPago(mpPublicKey, { locale: 'es-AR' });

  // createCardToken envía los datos directamente a la bóveda segura de MP
  const response = await mp.createCardToken({
    cardNumber: cardData.cardNumber.replace(/\s/g, ''),
    cardholderName: cardData.cardholderName,
    cardExpirationMonth: cardData.cardExpirationMonth,
    cardExpirationYear: cardData.cardExpirationYear,
    securityCode: cardData.securityCode,
    identificationType: cardData.identificationType,
    identificationNumber: cardData.identificationNumber
  });

  return {
    token: response.id,
    cardNumberFirstSix: response.first_six_digits,
    cardholderName: cardData.cardholderName,
    paymentMethodId: response.payment_method_id || 'credit_card',
    installments: 1
  };
}

/**
 * 3. Enlace de Pago Directo / WhatsApp Checkout
 * Alternativa preferida para gimnasios locales en Argentina:
 * Redirección directa al canal de ventas o enlace de pago verificado.
 */
export function generateWhatsAppCheckoutLink(planName: string, sedeName: string): string {
  const phone = '5491144724002';
  const text = `¡Hola FB SEVEN! Quiero contratar el plan *${planName}* para entrenar en *${sedeName}*. ¿Podrían enviarme el link de pago seguro o datos para abonar?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
