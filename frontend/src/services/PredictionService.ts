import axios from "axios";
import { z } from "zod";

// Esquema de validación con Zod
export const PredictionSchema = z.object({
  cliente: z.object({
    tiempoContrato: z.number(),
    id: z.string(),
    retrasosPagos: z.number(),
    nombre: z.string(),
    plan: z.string(),
    usoApp: z.number(),
  }),
  analisis: z.object({
    resultado: z.string(),
    probabilidad: z.number(), // valor entre 0 y 1
  }),
});

export type PredictionResponse = z.infer<typeof PredictionSchema>;

export async function getPredictionByClientId(id: string): Promise<PredictionResponse> {
  try {
    const res = await axios.get(
      `http://localhost:8080/predict/client/${encodeURIComponent(id)}`
    );

    // Validamos la respuesta contra el esquema
    return PredictionSchema.parse(res.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      // Extraemos mensaje del backend si existe
      const serverMessage =
        error.response.data?.message || error.response.data?.error;
      throw new Error(serverMessage || "No se pudo obtener la predicción");
    }
    throw error;
  }
}