import { api } from "../lib/api";
import { ClientSchema, type Client } from "../schemas/client.schema";
import { z } from "zod";

export async function getClients(): Promise<Client[]> {
  const res = await api.get("/api/clients");

  return z.array(ClientSchema).parse(res.data);
}

export async function getClientById(id: string): Promise<Client> {
  const res = await api.get(`/api/clients/${id}`);

  return ClientSchema.parse(res.data);
}