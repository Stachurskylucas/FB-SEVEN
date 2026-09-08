import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Scale } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';

export const TerminosPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Términos y Condiciones de Servicio | FB SEVEN Training"
        description="Términos y condiciones de contratación, normas de convivencia, apto médico y políticas de membresías en FB SEVEN Training."
        canonicalUrl="https://fbsevengym.com/terminos"
      />

      <div className="pt-28 pb-32 bg-black text-white min-h-screen relative overflow-hidden">
        {/* Diffused dark ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[240px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Breadcrumb / Back button */}
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
              <Scale className="w-4 h-4 text-brand-neon" />
              <span>Marco Legal & Contratación</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-white mb-4">
              Términos y Condiciones{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-cyan-300">
                de Servicio
              </span>
            </h1>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Última actualización: Septiembre 2026. Por favor, leé atentamente los presentes Términos y Condiciones que rigen el uso de las instalaciones, actividades y membresías de <strong>FB SEVEN TRAINING</strong> (Sedes Pacífico, Ricchieri y Muñiz).
            </p>
          </ScrollReveal>

          {/* Content Card */}
          <div className="space-y-8 bg-[#070b11]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Objeto */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                1. Objeto y Alcance del Servicio
              </h2>
              <p>
                Los presentes términos regulan la relación contractual entre el usuario/socio y FB SEVEN TRAINING. La contratación de cualquier plan, pase libre multisede o clase de prueba implica la aceptación plena de este reglamento.
              </p>
            </section>

            {/* 2. Requisitos de Admisión y Apto Médico */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                2. Apto Médico y Salud Física (Obligatorio)
              </h2>
              <p>
                Conforme a la normativa vigente en la Provincia de Buenos Aires y la Ley Nacional de Deporte, es condición excluyente para el inicio de cualquier actividad física la presentación de un <strong>Certificado de Aptitud Física (Apto Médico)</strong> emitido por un profesional médico matriculado, con vigencia no mayor a 1 (un) año.
              </p>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  El socio declara bajo juramento no padecer afecciones cardíacas, respiratorias o lesiones osteoarticulares que le impidan realizar esfuerzos físicos sin supervisión médica expresa.
                </p>
              </div>
            </section>

            {/* 3. Membresías, Pagos y Renovaciones */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                3. Membresías, Tarifas y Medios de Pago
              </h2>
              <p>
                Las membresías son personales e intransferibles. Los pagos se abonan por adelantado mediante los canales oficiales habilitados (MercadoPago, transferencias bancarias, tarjetas o efectivo en recepción).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Pase Multisede:</strong> Habilita el acceso indistinto a las Sedes Pacífico, Ricchieri y Muñiz respetando los horarios de funcionamiento de cada una.</li>
                <li><strong>Vencimiento:</strong> Las cuotas mensuales tienen un período de vigencia de 30 días corridos a partir de la fecha de activación.</li>
                <li><strong>Procesamiento seguro:</strong> Los pagos electrónicos se gestionan exclusivamente a través de procesadores de pago tokenizados autorizados (PCI-DSS compliant). FB SEVEN nunca almacena datos sensibles de tarjetas de crédito o débito.</li>
              </ul>
            </section>

            {/* 4. Derecho de Arrepentimiento */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                4. Derecho de Arrepentimiento (Ley 24.240)
              </h2>
              <p>
                En cumplimiento del artículo 34 de la Ley 24.240 de Defensa del Consumidor y la Res. 271/2020 de la Secretaría de Comercio Interior, en las contrataciones realizadas por medios electrónicos o a distancia, el usuario dispone del derecho irrenunciable a revocar la contratación dentro del plazo de <strong>diez (10) días corridos</strong> contados a partir de la fecha de suscripción, siempre que no se haya hecho uso efectivo de las instalaciones.
              </p>
            </section>

            {/* 5. Normas de Convivencia y Seguridad */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                5. Normas de Convivencia y Cuidado del Equipamiento
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Es obligatorio el uso de toalla personal sobre los tapizados de las máquinas y bancos de musculación.</li>
                <li>Descargar y ordenar las barras, mancuernas y discos en sus respectivos racks al finalizar cada ejercicio.</li>
                <li>Uso obligatorio de indumentaria deportiva adecuada y calzado cerrado. Está prohibido entrenar descalzo (salvo actividades específicas) o con torso descubierto.</li>
                <li>FB SEVEN se reserva el derecho de admisión y permanencia ante conductas antideportivas, agresiones o mal uso premeditado de la maquinaria.</li>
              </ul>
            </section>

            {/* 6. Lockers y Guardado de Pertenencias */}
            <section className="space-y-3">
              <h2 className="text-xl font-display font-black uppercase text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                6. Lockers y Custodia de Pertenencias
              </h2>
              <p>
                Los casilleros/lockers son de uso diario exclusivo durante la permanencia en el gimnasio. Cada socio debe utilizar su propio candado de seguridad. FB SEVEN no se responsabiliza por la pérdida, extravío o hurto de objetos de valor o dinero no declarados expresamente en recepción.
              </p>
            </section>

            {/* 7. Contacto Legal */}
            <section className="pt-4 border-t border-white/10 space-y-2">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Consultas y Domicilio Legal
              </h2>
              <p className="text-xs text-slate-400">
                FB SEVEN TRAINING • Sede Central: Senador Morón 1450, Bella Vista, Buenos Aires, Argentina. • WhatsApp de Atención: +54 9 11 4472-4002 • Correo electrónico: legal@fbseven.com
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default TerminosPage;
