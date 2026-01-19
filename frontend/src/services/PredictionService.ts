import type { PredictionResponse } from "../types/predictionResponse";

export async function getPredictionByClientId(id: string): Promise<PredictionResponse> {
  const response = await fetch(`/predictions/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener la predicción");
  }
  return await response.json();
};