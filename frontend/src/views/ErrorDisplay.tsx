import { XCircle, RefreshCcw } from 'lucide-react';

interface ErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

export const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-xl shadow-lg p-8 animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <XCircle className="w-16 h-16 text-red-600 mb-4" />
        <h3 className="text-2xl font-bold text-red-700 mb-3">Error en la Evaluación</h3>
        <p className="text-red-600 mb-6 max-w-md">{error}</p>

        <button
          onClick={onRetry}
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md"
        >
          <RefreshCcw className="w-5 h-5" />
          <span>Intentar Nuevamente</span>
        </button>
      </div>
    </div>
  );
};
