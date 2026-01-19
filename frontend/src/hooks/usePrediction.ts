import { useQuery } from "@tanstack/react-query";
import { getPredictionByClientId } from "../services/predictionService";
import type { PredictionResponse } from "../schemas/prediction.schema";

export function usePrediction(id?: string) {
  return useQuery<PredictionResponse, Error>({
    queryKey: ["prediction", id],
    queryFn: async () => {
      if (!id) throw new Error("ID requerido para la predicción");
      return await getPredictionByClientId(id);
    },
    enabled: !!id,
  });
}
