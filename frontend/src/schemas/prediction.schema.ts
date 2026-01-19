import { z } from "zod";

export const ClienteInfoSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  tiempoContrato: z.number(),
  retrasosPagos: z.number(),
  usoApp: z.number(),
  plan: z.enum(["Basic", "Standard", "Premium"]),
});

export const AnalisisSchema = z.object({
  probabilidad: z.number(),
  resultado: z.enum(["Va a cancelar", "Va a continuar"]),
});

export const PredictionResponseSchema = z.object({
  cliente: ClienteInfoSchema,
  analisis: AnalisisSchema,
});

export type ClienteInfo = z.infer<typeof ClienteInfoSchema>;
export type Analisis = z.infer<typeof AnalisisSchema>;
export type PredictionResponse = z.infer<typeof PredictionResponseSchema>;