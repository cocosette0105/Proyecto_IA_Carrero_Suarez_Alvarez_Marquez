import { Activity } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <Activity className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Predicción de Riesgo de Cáncer</h1>
              <p className="text-teal-100 text-sm">Sistema de Evaluación Clínica Avanzada</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
