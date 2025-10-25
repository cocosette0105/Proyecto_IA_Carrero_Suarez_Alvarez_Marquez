// project/src/views/ResultsDisplay.tsx

import { PredictionResult } from '../models/PatientModel';
import { AlertTriangle, CheckCircle, AlertOctagon, ShieldAlert, ClipboardList, AlertCircle } from 'lucide-react';

interface ResultsDisplayProps {
  result: PredictionResult;
  onReset: () => void;
}

export const ResultsDisplay = ({ result, onReset }: ResultsDisplayProps) => {
  const getRiskColor = () => {
    switch (result.riskLevel) {
      case 'low':
        return 'from-green-500 to-emerald-600';
      case 'moderate':
        return 'from-yellow-500 to-amber-600';
      case 'high':
        return 'from-orange-500 to-red-600';
      case 'very-high':
        return 'from-red-600 to-rose-700';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  const getRiskBgColor = () => {
    switch (result.riskLevel) {
      case 'low':
        return 'bg-green-50 border-green-200';
      case 'moderate':
        return 'bg-amber-50 border-amber-200';
      case 'high':
        return 'bg-orange-50 border-orange-200';
      case 'very-high':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  const getRiskTextColor = () => {
    switch (result.riskLevel) {
      case 'low':
        return 'text-green-700';
      case 'moderate':
        return 'text-amber-700';
      case 'high':
        return 'text-orange-700';
      case 'very-high':
        return 'text-red-700';
      default:
        return 'text-slate-700';
    }
  };

  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case 'low':
        return <CheckCircle className="w-12 h-12 text-green-600" />;
      case 'moderate':
        return <AlertTriangle className="w-12 h-12 text-amber-600" />;
      case 'high':
        return <AlertOctagon className="w-12 h-12 text-orange-600" />;
      case 'very-high':
        return <ShieldAlert className="w-12 h-12 text-red-600" />;
      default:
        return <AlertCircle className="w-12 h-12 text-slate-600" />;
    }
  };

  const getRiskLabel = () => {
    switch (result.riskLevel) {
      case 'low':
        return 'Riesgo Bajo';
      case 'moderate':
        return 'Riesgo Moderado';
      case 'high':
        return 'Riesgo Alto';
      case 'very-high':
        return 'Riesgo Muy Alto';
      default:
        return 'Riesgo';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className={`${getRiskBgColor()} rounded-xl shadow-lg border-2 p-8`}>
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4">{getRiskIcon()}</div>
          <h2 className={`text-3xl font-bold ${getRiskTextColor()} mb-2`}>
            {getRiskLabel()}
          </h2>

          <div className="relative w-full max-w-md mt-6">
            <div className="h-6 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full bg-gradient-to-r ${getRiskColor()} transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                style={{ width: `${result.riskPercentage}%` }}
              >
                <span className="text-white font-bold text-sm drop-shadow-md">
                  {result.riskPercentage}%
                </span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="mt-8 w-full max-w-2xl">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <p className={`text-lg ${getRiskTextColor()} font-semibold leading-relaxed`}>
                {result.clinicalMessage}
              </p> 
              {/* --- ¡AQUÍ ESTÁ LA CORRECCIÓN! --- */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <ClipboardList className="w-6 h-6 text-teal-600" />
          <h3 className="text-2xl font-bold text-slate-800">Recomendaciones</h3>
        </div>

        <ul className="space-y-4">
          {result.recommendations.map((recommendation, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-teal-300 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-slate-700 flex-1 pt-1">{recommendation}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md"
        >
          Realizar Nueva Evaluación
        </button>
      </div>
    </div>
  );
};