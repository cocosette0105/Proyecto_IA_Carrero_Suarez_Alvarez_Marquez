import React, { useState } from 'react'; // <--- Importante añadir 'React'
import { PatientData } from '../models/PatientModel';
import { User, Activity as ActivityIcon, AlertCircle } from 'lucide-react';

interface PatientFormProps {
  onSubmit: (data: Partial<PatientData>) => void;
  isLoading: boolean;
}

// --- Definición de Tipos para SelectField ---
interface SelectFieldProps {
  label: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; label: string }[];
  name: string;
}

// Componente helper para selects (Ahora tipado con React.FC)
const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, options, name }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {label}
    </label>
    <select
      required
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
    >
      <option value="">Seleccione...</option>
      {/* 'opt' ahora tendrá el tipo correcto gracias a la interfaz */}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

// --- Definición de Tipos para NumberField ---
interface NumberFieldProps {
  label: string;
  value: number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  min?: string;
  step?: string;
}

// Componente helper para inputs numéricos (Ahora tipado con React.FC)
const NumberField: React.FC<NumberFieldProps> = ({ label, value, onChange, name, min = "0", step = "0.1" }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {label}
    </label>
    <input
      type="number"
      min={min}
      step={step}
      required
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
    />
  </div>
);

export const PatientForm = ({ onSubmit, isLoading }: PatientFormProps) => {
  const [formData, setFormData] = useState<Partial<PatientData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof PatientData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
        <User className="w-6 h-6 text-teal-600" />
        <span>Información del Paciente</span>
      </h2>

      {/* Fila 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <NumberField
          label="Edad (años)"
          name="age"
          value={formData.age}
          // 'e' ahora está tipado
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('age', e.target.value)}
          min="0"
          step="1"
        />
        <SelectField
          label="Género"
          name="gender"
          value={formData.gender}
          // 'e' ahora está tipado
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('gender', e.target.value)}
          options={[
            { value: 'Male', label: 'Masculino' },
            { value: 'Female', label: 'Femenino' },
          ]}
        />
        <NumberField
          label="IMC (Índice de Masa Corporal)"
          name="bmi"
          value={formData.bmi}
          // 'e' ahora está tipado
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('bmi', e.target.value)}
        />
      </div>

      <div className="border-t border-slate-200 pt-8 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-teal-600" />
          <span>Historial Clínico</span>
        </h3>
      </div>
      
      {/* Fila 2 - Historial Clínico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <NumberField
          label="Puntaje Función Hepática"
          name="liver_function_score"
          value={formData.liver_function_score}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('liver_function_score', e.target.value)}
        />
         <NumberField
          label="Nivel Alfa-fetoproteína"
          name="alpha_fetoprotein_level"
          value={formData.alpha_fetoprotein_level}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('alpha_fetoprotein_level', e.target.value)}
        />
        <SelectField
          label="Diabetes"
          name="diabetes"
          value={formData.diabetes}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('diabetes', e.target.value)}
          options={[
            { value: 0, label: 'No' },
            { value: 1, label: 'Sí' },
          ]}
        />
      </div>

      {/* Fila 3 - Historial Clínico (Binarios) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <SelectField
          label="Hepatitis B"
          name="hepatitis_b"
          value={formData.hepatitis_b}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('hepatitis_b', e.target.value)}
          options={[
            { value: 0, label: 'No' },
            { value: 1, label: 'Sí' },
          ]}
        />
        <SelectField
          label="Hepatitis C"
          name="hepatitis_c"
          value={formData.hepatitis_c}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('hepatitis_c', e.target.value)}
          options={[
            { value: 0, label: 'No' },
            { value: 1, label: 'Sí' },
          ]}
        />
        <SelectField
          label="Historial de Cirrosis"
          name="cirrhosis_history"
          value={formData.cirrhosis_history}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('cirrhosis_history', e.target.value)}
          options={[
            { value: 0, label: 'No' },
            { value: 1, label: 'Sí' },
          ]}
        />
        <SelectField
          label="Historial Familiar de Cáncer"
          name="family_history_cancer"
          value={formData.family_history_cancer}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('family_history_cancer', e.target.value)}
          options={[
            { value: 0, label: 'No' },
            { value: 1, label: 'Sí' },
          ]}
        />
      </div>

       <div className="border-t border-slate-200 pt-8 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <ActivityIcon className="w-5 h-5 text-teal-600" />
          <span>Hábitos</span>
        </h3>
      </div>
      
      {/* Fila 4 - Hábitos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SelectField
          label="Consumo de Alcohol"
          name="alcohol_consumption"
          value={formData.alcohol_consumption}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('alcohol_consumption', e.target.value)}
          options={[
            { value: 'Never', label: 'Nunca' },
            { value: 'Occasional', label: 'Ocasional' },
            { value: 'Regular', label: 'Regular' },
            { value: 'Heavy', label: 'Fuerte' },
          ]}
        />
        <SelectField
          label="Tabaquismo"
          name="smoking_status"
          value={formData.smoking_status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('smoking_status', e.target.value)}
          options={[
            { value: 'Never', label: 'Nunca' },
            { value: 'Former', label: 'Ex-fumador' },
            { value: 'Current', label: 'Actual' },
          ]}
        />
        <SelectField
          label="Actividad Física"
          name="physical_activity_level"
          value={formData.physical_activity_level}
          // --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('physical_activity_level', e.target.value)}
          options={[
            { value: 'Low', label: 'Baja' },
            { value: 'Moderate', label: 'Moderada' },
            { value: 'High', label: 'Alta' },
          ]}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold py-4 px-6 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
      >
        {isLoading ? (
          <span className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Calculando riesgo...</span>
          </span>
        ) : (
          'Calcular Riesgo'
        )}
      </button>
    </form>
  );
};