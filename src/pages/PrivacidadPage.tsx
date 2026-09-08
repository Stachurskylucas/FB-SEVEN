import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';

export const PrivacidadPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad y Protección de Datos | FB SEVEN Training"
        description="Conocé cómo protegemos tus datos personales conforme a la Ley Nacional Nº 25.326 de la República Argentina en FB SEVEN Training."
        canonicalUrl="https://fbsevengym.com/privacidad"
      />

      <div className="pt-28 pb-32 bg-black text-white min-h-screen relative overflow-hidden">
        {/* Diffused ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[240px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-brand-neon transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Link>
          </div>

          {/* Header */}
          <ScrollReveal direction="down" duration={0.6}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-semibold text-brand-neon mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-neon" />
              <span>Ley Nacional Nº 25.326 • Habeas Data</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-white mb-4">
              Política de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300">
                Privacidad
              </span>
            </h1>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              En <strong>FB SEVEN TRAINING</strong> nos comprometemos a garantizar la privacidad, confidencialidad y estricta seguridad de los datos personales de nuestros socios y visitantes conforme al marco regulatorio de la República Argentina.
            </p>
          </ScrollReveal>

          {/* Content Card */}
          <div className="space-y-8 bg-[#070b11]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Responsable del Tratamiento */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                El responsable del tratamiento de las bases de datos recabadas en este sitio web y en las recepciones de nuestras sedes es <strong>FB SEVEN TRAINING</strong>, con domicilio legal en Senador Morón 1450, Bella Vista, Provincia de Buenos Aires, República Argentina.
              </p>
            </section>

            {/* 2. Datos Recolectados y Finalidad */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                2. Datos Recolectados y Finalidad del Tratamiento
              </h2>
              <p>
                Recabamos únicamente la información necesaria para brindar el servicio de entrenamiento y atención al socio:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Datos de contacto:</strong> Nombre, teléfono / WhatsApp, correo electrónico y sede de preferencia para coordinar altas, responder consultas y enviar notificaciones operativas.</li>
                <li><strong>Apto médico y salud física:</strong> Registros médicos requeridos legalmente para salvaguardar la integridad física del deportista durante la práctica deportiva.</li>
                <li><strong>Datos técnicos y de navegación:</strong> Métricas anónimas para garantizar la seguridad del sitio, prevenir ataques de denegación de servicio (DDoS) o fraude, y mejorar la experiencia de usuario.</li>
              </ul>
            </section>

            {/* 3. Principio de Confidencialidad y No Cesión */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                3. Confidencialidad y Prohibición de Cesión a Terceros
              </h2>
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-slate-200">
                <p className="font-semibold text-white mb-1">Compromiso de Secreto Profesional:</p>
                <p className="text-xs sm:text-sm">
                  FB SEVEN TRAINING <strong>no vende, no alquila, no cede ni comercializa</strong> sus bases de datos con empresas de publicidad, intermediarios ni terceros bajo ninguna circunstancia.
                </p>
              </div>
            </section>

            {/* 4. Medidas de Seguridad Técnicas y Organizativas */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                4. Seguridad Técnica y Almacenamiento Cifrado
              </h2>
              <p>
                Adoptamos las medidas de seguridad técnicas y organizativas exigidas por la Resolución AAIP Nº 47/2018 para evitar la adulteración, pérdida, consulta o tratamiento no autorizado de datos:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
                <li>Cifrado de comunicaciones mediante TLS 1.3 / SSL (HTTPS forzado en todas las conexiones).</li>
                <li>Políticas estrictas de Content-Security-Policy (CSP) y prevención de Cross-Site Scripting (XSS).</li>
                <li>Protección contra falsificación de peticiones en sitios cruzados (Anti-CSRF) y honeypots de detección bot.</li>
                <li>Pagos 100% tokenizados: FB SEVEN no tiene acceso ni almacena los números de tarjeta de crédito/débito.</li>
              </ul>
            </section>

            {/* 5. Derechos ARCO (Habeas Data) */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                5. Derechos del Titular (Acceso, Rectificación y Supresión)
              </h2>
              <p>
                El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (artículo 14, inciso 3 de la Ley Nº 25.326). Asimismo, podrá solicitar en cualquier momento la actualización, rectificación o supresión de sus datos de nuestros registros.
              </p>
              <p>
                Para ejercer estos derechos, podés contactarte enviando un mensaje fehaciente a nuestro canal oficial de WhatsApp o por correo electrónico a <strong>legal@fbseven.com</strong> con copia de DNI para validar tu identidad.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 text-xs text-slate-300">
                <p className="font-bold text-brand-neon uppercase tracking-wider mb-1">
                  Órgano de Control de la Ley Nº 25.326:
                </p>
                <p className="italic">
                  "La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales."
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacidadPage;
