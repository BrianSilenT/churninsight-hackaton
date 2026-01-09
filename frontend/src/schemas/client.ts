import { z } from "zod";


// valida y asegura el tipado de los datos que vienen del API o MSW
export const ClientDataSchema = z.object({
  dni: z.string(),
  nombreUsuario: z.string(),
  tiempoContrato: z.string(),
  retrasosPagos: z.number(),
  planType: z.string(),
  vaCancelar: z.boolean(),
  probabilidad: z.number(),
});

export type ClientData = z.infer<typeof ClientDataSchema>;
