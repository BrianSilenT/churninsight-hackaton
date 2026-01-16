import { z } from "zod";

export const PredictionResponseSchema = z.object({
  prevision: z.string(),
  probabilidad: z.number(),
});

export type PredictionResponse = z.infer<typeof PredictionResponseSchema>;