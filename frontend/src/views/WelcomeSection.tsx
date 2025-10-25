import { Info, Shield } from 'lucide-react';

export const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-sm border border-teal-100 p-8 mb-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start space-x-4 mb-6">
          <div className="bg-teal-600 p-3 rounded-lg">
            <Info className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Bienvenido al Sistema de Evaluación de Riesgo
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Esta herramienta utiliza información clínica y factores de estilo de vida para
              calcular una estimación del riesgo de desarrollar cáncer. Los resultados son
              orientativos y deben ser interpretados por un profesional médico calificado.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
          <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold mb-1">Importante:</p>
            <p>
              Esta evaluación no constituye un diagnóstico médico. Siempre consulte con su
              médico para una evaluación completa y personalizada de su salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
