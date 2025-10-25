// project/src/controllers/PredictionController.ts

import { PatientModel, PatientData, PredictionResult } from '../models/PatientModel';

export class PredictionController {
  private model: PatientModel;
  private apiEndpoint: string;
  
 
  constructor(apiEndpoint: string = 'http://127.0.0.1:5000/predict') {
    this.model = new PatientModel();
    this.apiEndpoint = apiEndpoint;
  }

  updatePatientData(data: Partial<PatientData>): void {
    this.model.setData(data);
  }

  validateData(): { isValid: boolean; errors: string[] } {
    return this.model.validate();
  }

  async predictRisk(): Promise<PredictionResult> {
    const validation = this.model.validate();

    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }

    const patientData = this.model.toJSON();

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en el servidor');
      }

      // Esta es la respuesta REAL de tu API
      const result: { riesgo_porcentaje: number; mensaje_accion: string } = await response.json();

      // Adaptamos la respuesta de Python al formato que espera el Front-end
      return this.generateFrontEndResult(result.riesgo_porcentaje, result.mensaje_accion);

    } catch (error) {
      
      console.error("Error al conectar con la API:", error);
      let errorMessage = "Error desconocido al conectar con la API";
      if (error instanceof Error) {
        errorMessage = error.message; // Ahora es seguro acceder a .message
      }
      throw new Error(`Error de conexión: ${errorMessage}`);
    
    }
  }

  // Esta función convierte la respuesta simple del API
  // en la respuesta rica que espera tu Front-end
  private generateFrontEndResult(riskScore: number, clinicalMessage: string): PredictionResult {
    let riskLevel: PredictionResult['riskLevel'];
    let recommendations: string[];

    if (riskScore < 30) {
      riskLevel = 'low';
      recommendations = [
        'Mantenga una dieta equilibrada rica en frutas y verduras',
        'Realice ejercicio regularmente (150 minutos semanales)',
        'Realice chequeos médicos anuales',
      ];
    } else if (riskScore < 50) {
      riskLevel = 'moderate';
      recommendations = [
        'Consulte con su médico sobre estrategias de prevención',
        'Realice exámenes de detección según su edad y factores de riesgo',
        'Mejore sus hábitos de vida: ejercicio, alimentación, evite tabaco y alcohol',
      ];
    } else if (riskScore < 70) {
      riskLevel = 'high';
      recommendations = [
        'Programe una consulta médica urgente',
        'Realice exámenes de detección completos',
        'Implemente cambios significativos en estilo de vida',
      ];
    } else {
      riskLevel = 'very-high';
      recommendations = [
        'URGENTE: Consulte con un especialista en las próximas 48 horas',
        'Realice exámenes diagnósticos completos de inmediato',
      ];
    }

    return {
      riskPercentage: Math.round(riskScore),
      riskLevel,
      // Usamos el mensaje de acción REAL que viene del API
      clinicalMessage: clinicalMessage, 
      recommendations,
    };
  }

  resetModel(): void {
    this.model.reset();
  }

  getModelData(): Partial<PatientData> {
    return this.model.getData();
  }
}