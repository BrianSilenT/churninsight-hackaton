import { z } from "zod";

export const ClientSchema = z.object({
  id: z.string(),
  contractLength: z.number(),
  paymentDelay: z.number(),
  usageFrequency: z.number(),
  subscriptionType: z.number(), 
});

export const ClientsSchema = z.array(ClientSchema);

export type Client = z.infer<typeof ClientSchema>;
export type Clients = z.infer<typeof ClientsSchema>;