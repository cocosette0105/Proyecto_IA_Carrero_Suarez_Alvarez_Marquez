import { useState } from 'react';
import { PredictionController } from './controllers/PredictionController';
import { PatientData, PredictionResult } from './models/PatientModel';
import { Header } from './views/Header';
import { Footer } from './views/Footer';
import { WelcomeSection } from './views/WelcomeSection';
import { PatientForm } from './views/PatientForm';
import { ResultsDisplay } from './views/ResultsDisplay';
import { ErrorDisplay } from './views/ErrorDisplay';

const controller = new PredictionController();

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: Partial<PatientData>) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      controller.updatePatientData(data);
      const prediction = await controller.predictRisk();
      setResult(prediction);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido al calcular el riesgo');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    controller.resetModel();
    setResult(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {!result && !error && <WelcomeSection />}

        {error && <ErrorDisplay error={error} onRetry={handleRetry} />}

        {result && <ResultsDisplay result={result} onReset={handleReset} />}

        {!result && !error && (
          <PatientForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
