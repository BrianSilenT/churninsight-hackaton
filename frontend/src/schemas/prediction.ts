import { z } from "zod";

export const PredictionResponseSchema = z.object({
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
    probabilidad: z.number(),
  }),
});

export type PredictionResponse = z.infer<typeof PredictionResponseSchema>;