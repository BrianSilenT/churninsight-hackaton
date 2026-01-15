import { ClientDataSchema, type ClientData } from "../schemas/client"; 
import { api } from "../lib/api"; 
import axios from "axios";

export async function getClientById(id: string): Promise<ClientData> {
  try {
    const res = await api.get(`/clients/${encodeURIComponent(id)}`);
    // Validamos la data con el esquema de Zod
    return ClientDataSchema.parse(res.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Extraemos el mensaje de error del backend
      const serverMessage = error.response.data?.error || error.response.data?.message;
      throw new Error(serverMessage || "Cliente no encontrado");
    }
    throw error;
  }
}

export async function getClients(): Promise<ClientData[]> {
  try {
    const res = await api.get(`/clients`);
    const payload = res.data?.data ?? res.data;

    if (!Array.isArray(payload)) {
      throw new Error("Respuesta inválida del servidor");
    }

    return payload.map((item: unknown) => ClientDataSchema.parse(item));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverMessage = error.response.data?.error || error.response.data?.message;
      throw new Error(serverMessage || "No se pudo cargar la lista de clientes");
    }
    throw error;
  }
}
