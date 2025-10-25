// project/src/models/PatientModel.ts

//  Esta es la interfaz que el Back-end (Python) espera.
export interface PatientData {
  age: number;
  gender: 'Male' | 'Female'; 
  bmi: number;
  alcohol_consumption: 'Never' | 'Occasional' | 'Regular' | 'Heavy'; // <- Ojo a los valores
  smoking_status: 'Never' | 'Former' | 'Current'; // <- Ojo a los valores
  hepatitis_b: 0 | 1;
  hepatitis_c: 0 | 1;
  liver_function_score: number;
  alpha_fetoprotein_level: number;
  cirrhosis_history: 0 | 1;
  family_history_cancer: 0 | 1;
  physical_activity_level: 'Low' | 'Moderate' | 'High'; // <- Ojo a los valores
  diabetes: 0 | 1;
}

// Esta es la interfaz que el Front-end (React) usa para mostrar resultados
export interface PredictionResult {
  riskPercentage: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  clinicalMessage: string;
  recommendations: string[];
}

export class PatientModel {
  private data: Partial<PatientData> = {};

  setData(data: Partial<PatientData>): void {
    this.data = { ...this.data, ...data };
  }

  getData(): Partial<PatientData> {
    return { ...this.data };
  }

  // Validación para los 13 campos
  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const d = this.data;

    if (d.age === undefined || d.age < 0 || d.age > 120) errors.push('Edad es requerida');
    if (!d.gender) errors.push('Género es requerido');
    if (d.bmi === undefined || d.bmi < 0) errors.push('IMC es requerido');
    if (!d.alcohol_consumption) errors.push('Consumo de alcohol es requerido');
    if (!d.smoking_status) errors.push('Estado de fumador es requerido');
    if (d.hepatitis_b === undefined) errors.push('Hepatitis B es requerido');
    if (d.hepatitis_c === undefined) errors.push('Hepatitis C es requerido');
    if (d.liver_function_score === undefined) errors.push('Puntaje hepático es requerido');
    if (d.alpha_fetoprotein_level === undefined) errors.push('Nivel Alfa-fetoproteína es requerido');
    if (d.cirrhosis_history === undefined) errors.push('Historial de cirrosis es requerido');
    if (d.family_history_cancer === undefined) errors.push('Historial familiar es requerido');
    if (!d.physical_activity_level) errors.push('Actividad física es requerida');
    if (d.diabetes === undefined) errors.push('Diabetes es requerido');

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  toJSON(): PatientData {
    // Asegurarse de que todos los campos numéricos se envíen como números
    return {
        age: Number(this.data.age),
        gender: this.data.gender!,
        bmi: Number(this.data.bmi),
        alcohol_consumption: this.data.alcohol_consumption!,
        smoking_status: this.data.smoking_status!,
        hepatitis_b: Number(this.data.hepatitis_b) as 0 | 1,
        hepatitis_c: Number(this.data.hepatitis_c) as 0 | 1,
        liver_function_score: Number(this.data.liver_function_score),
        alpha_fetoprotein_level: Number(this.data.alpha_fetoprotein_level),
        cirrhosis_history: Number(this.data.cirrhosis_history) as 0 | 1,
        family_history_cancer: Number(this.data.family_history_cancer) as 0 | 1,
        physical_activity_level: this.data.physical_activity_level!,
        diabetes: Number(this.data.diabetes) as 0 | 1,
    };
  }

  reset(): void {
    this.data = {};
  }
}