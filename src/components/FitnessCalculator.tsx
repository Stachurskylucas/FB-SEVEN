import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Check } from 'lucide-react';

export const FitnessCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [activity, setActivity] = useState<'moderate' | 'intense' | 'very_intense'>('intense');
  const [goal, setGoal] = useState<'hypertrophy' | 'fat_loss' | 'recomp'>('hypertrophy');

  // Calculations
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  // Basal Metabolic Rate (Harris-Benedict formula)
  let bmr = 0;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  const activityMultiplier = activity === 'moderate' ? 1.45 : activity === 'intense' ? 1.65 : 1.85;
  const maintenanceCalories = Math.round(bmr * activityMultiplier);

  let targetCalories = maintenanceCalories;
  let goalLabel = 'Recomposición Corporal';
  let recommendedProgram = 'Musculación Biomecánica + Funcional en FB SEVEN';

  if (goal === 'hypertrophy') {
    targetCalories = Math.round(maintenanceCalories * 1.12);
    goalLabel = 'Aumento de Masa Muscular (Superávit Controlado)';
    recommendedProgram = 'Plan de Fuerza & Biomecánica en Sede Pacífico o Ricchieri';
  } else if (goal === 'fat_loss') {
    targetCalories = Math.round(maintenanceCalories * 0.82);
    goalLabel = 'Definición & Pérdida de Grasa (Déficit Calórico)';
    recommendedProgram = 'Combinación HIIT + Musculación Pesada con Coach 1 a 1';
  }

  let bmiCategory = 'Peso Normal';
  let bmiColor = 'text-emerald-400';
  if (bmi < 18.5) {
    bmiCategory = 'Bajo Peso';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Sobrepeso / Masa Muscular Elevada';
    bmiColor = 'text-brand-neon';
  } else if (bmi >= 30) {
    bmiCategory = 'Obesidad / Requiere Evaluación';
    bmiColor = 'text-rose-400';
  }

  const whatsappMessage = `¡Hola FB SEVEN! Calculé mi plan en la web:
- Objetivo: ${goalLabel}
- Peso: ${weight}kg | Altura: ${height}cm | IMC: ${bmi.toFixed(1)}
- Calorías objetivo: ~${targetCalories} kcal/día
Me gustaría asesorarme con un coach en sala para empezar a entrenar.`;

  return (
    <section id="calculadora" className="py-24 bg-brand-card/60 relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-neon uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-brand-neon" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            Calculadora de <span className="text-brand-neon">Rendimiento</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Ingresá tus métricas para estimar tu gasto calórico ideal y la programación de entrenamiento sugerida en FB SEVEN.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="bg-brand-card rounded-3xl border border-brand-border p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (Left) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Gender */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Género</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'male'
                        ? 'bg-brand-neon text-black border-brand-neon shadow-neon'
                        : 'bg-brand-surface text-slate-300 border-brand-border hover:border-slate-500'
                    }`}
                  >
                    Masculino
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'female'
                        ? 'bg-brand-neon text-black border-brand-neon shadow-neon'
                        : 'bg-brand-surface text-slate-300 border-brand-border hover:border-slate-500'
                    }`}
                  >
                    Femenino
                  </button>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Weight */}
                <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-slate-400">Peso</span>
                    <span className="text-lg font-black text-white">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-brand-neon cursor-pointer"
                  />
                </div>

                {/* Height */}
                <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-slate-400">Altura</span>
                    <span className="text-lg font-black text-white">{height} cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-brand-neon cursor-pointer"
                  />
                </div>

                {/* Age */}
                <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-slate-400">Edad</span>
                    <span className="text-lg font-black text-white">{age} años</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-brand-neon cursor-pointer"
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Nivel de Actividad Semanal</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'moderate', label: '3 a 4 días', desc: 'Entrenamiento moderado' },
                    { id: 'intense', label: '4 a 5 días', desc: 'Entrenamiento intenso FB' },
                    { id: 'very_intense', label: '6 días / Atleta', desc: 'Alto rendimiento' },
                  ].map((act) => (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => setActivity(act.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        activity === act.id
                          ? 'bg-brand-surface border-brand-neon text-white shadow-neon'
                          : 'bg-brand-surface/40 border-brand-border text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-bold text-xs text-white block">{act.label}</span>
                      <span className="text-[11px] text-slate-400">{act.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Tu Objetivo Principal</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'hypertrophy', label: 'Ganancia Muscular', desc: 'Hipertrofia & Fuerza' },
                    { id: 'fat_loss', label: 'Pérdida de Grasa', desc: 'Definición & Tonificación' },
                    { id: 'recomp', label: 'Recomposición', desc: 'Salud, postura & energía' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        goal === g.id
                          ? 'bg-brand-surface border-brand-gold text-white shadow-gold'
                          : 'bg-brand-surface/40 border-brand-border text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-bold text-xs text-brand-gold block">{g.label}</span>
                      <span className="text-[11px] text-slate-400">{g.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculated Result Card (Right) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-brand-surface to-brand-card border border-brand-border flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                  <span className="text-xs uppercase font-bold text-brand-neon tracking-wider">Diagnóstico Inicial</span>
                  <Sparkles className="w-4 h-4 text-brand-neon" />
                </div>

                {/* BMI display */}
                <div className="my-5 p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <span className="text-xs text-slate-400 block">Índice de Masa Corporal (IMC)</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl font-display font-black text-white">{bmi.toFixed(1)}</span>
                    <span className={`text-xs font-bold ${bmiColor}`}>{bmiCategory}</span>
                  </div>
                </div>

                {/* Target Calories */}
                <div className="mb-5 p-4 rounded-xl bg-brand-dark/80 border border-brand-neon/30">
                  <span className="text-xs text-slate-400 block">Estimación Calórica Diaria</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-display font-black text-brand-neon">~{targetCalories}</span>
                    <span className="text-xs text-slate-300 font-semibold">kcal / día</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Ajustado para: <span className="text-white font-medium">{goalLabel}</span>
                  </p>
                </div>

                {/* Recommendation */}
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                    <span><strong>Rutina recomendada:</strong> {recommendedProgram}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>Asesoramiento:</strong> Ajuste de técnica 1 a 1 por coach en sala.</span>
                  </div>
                </div>
              </div>

              {/* Share with Coach Button */}
              <a
                href={`https://wa.me/5491144724002?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-neon text-black font-extrabold text-sm hover:bg-brand-accentHover transition-all shadow-neon hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Enviar mi Objetivo a un Coach</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
