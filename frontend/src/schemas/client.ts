import { z } from "zod";


// valida y asegura el tipado de los datos que vienen del API o MSW
export const ClientDataSchema = z.object({
  id: z.string().optional(), 
  age: z.number().int().min(0),
  gender: z.number().int(),  
  tenure: z.number().int().nonnegative(),
  usageFrequency: z.number().int().nonnegative(),
  supportCalls: z.number().int().nonnegative(),
  paymentDelay: z.number().int().nonnegative(),
  subscriptionType: z.number().int(),
  contractLength: z.number().int(),
  totalSpend: z.number().nonnegative(),
  lastInteraction: z.number().int().nonnegative(),
  supportUrgency: z.number().nonnegative(),
  monthlySpend: z.number().nonnegative(),
});

export type ClientData = z.infer<typeof ClientDataSchema>;



// - **CustomerID:** Código de identificación del cliente
// - **Age:** Edad del cliente (en años)
// - **Gender:** Género del cliente (Masculino/Femenino)
// - **Tenure:** El período de tiempo que el cliente utiliza el servicio (en meses)
// - **Usage Frequency:** La frecuencia con la que el cliente utiliza el servicio (en meses)
// - **Support Calls:** Frecuencia de llamadas del cliente al servicio de atención
// - **Payment Delay:** El período de retraso en el pago de las facturas del servicio por parte de los clientes (en meses)
// - **Subscription Type:** El tipo de servicio seleccionado por el cliente (Básico/Estándar/Premium)
// - **Contract Length:** El período de contrato del servicio seleccionado por el cliente (Mensual/Trimestral/Anual)
// - **Total Spend:** Dinero total gastado por el cliente en el servicio (en USD)
// - **Last Interaction:** El período de tiempo desde el último uso del cliente hasta el presente (en meses)
// - **Churn:** El estado actual del cliente, continúa con el servicio (0) o lo abandona (1)
