import { getPredictionByClientId } from "../services/PredictionService";
import type { PredictionResponse } from "../types/predictionResponse";
import { useQuery } from "@tanstack/react-query";

export function usePrediction(id: string | null) {
  return useQuery<PredictionResponse, Error>({
    queryKey: ["prediction", id],
    queryFn: async () => {
      if (!id) throw new Error("ID requerido para la predicción");
      return await getPredictionByClientId(id);
    },
    enabled: !!id, // Solo se ejecuta si hay un ID
    retry: false,
    // Puedes definir un staleTime más largo si la predicción no cambia seguido
    staleTime: 1000 * 60 * 5, 
  });
}