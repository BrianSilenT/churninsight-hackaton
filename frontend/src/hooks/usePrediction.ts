import { getPredictionByClientId } from "../services/PredictionService";
import type { PredictionResponse } from "../services/PredictionService"; // usa el type del mismo archivo
import { useQuery } from "@tanstack/react-query";

export function usePrediction(id: string | null) {
  return useQuery<PredictionResponse, Error>({
    queryKey: ["prediction", id],
    queryFn: async () => {
      if (!id) throw new Error("ID requerido para la predicción");
      return await getPredictionByClientId(id); // devuelve PredictionResponse
    },
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}

