import { api } from "../lib/api";
import {PredictionResponseSchema,type PredictionResponse} from "../schemas/prediction.schema";

export async function getPredictionByClientId(
  id: string
): Promise<PredictionResponse> {
  const res = await api.get(`/predict/client/${id}`);

  return PredictionResponseSchema.parse(res.data);
}