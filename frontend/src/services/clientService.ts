import { ClientDataSchema, ClientData } from "../schemas/client";
import { api } from "../lib/api";

export async function getClientByDni(dni: string): Promise<ClientData> {
  const res = await api.get(`/api/clients/${encodeURIComponent(dni)}`);
  const parsed = ClientDataSchema.parse(res.data);
  return parsed;
}

export async function getClients(): Promise<ClientData[]> {
  const res = await api.get(`/api/clients`);
  const payload = res.data?.data ?? res.data;
  if (!Array.isArray(payload)) {
    throw new Error("Respuesta inválida, mal formato de getClients");
  }
  return payload.map((item: unknown) => ClientDataSchema.parse(item));
}
