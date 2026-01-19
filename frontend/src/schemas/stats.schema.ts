import { z } from "zod";

export const StatsSchema = z.object({
  total_clientes_dataset: z.number(),
  precision_modelo: z.number(),
  recall_churn: z.number(),
  f1_score_churn: z.number(),
  estado_modelo: z.string(),
});

export type Stats = z.infer<typeof StatsSchema>;