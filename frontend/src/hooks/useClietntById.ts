import { useQuery } from "@tanstack/react-query";
import { getClientById } from "../services/clientService";
import type { Client } from "../schemas/client.schema";

export function useClientById(id?: string) {
  return useQuery<Client>({
    queryKey: ["client", id],
    queryFn: () => getClientById(id!),
    enabled: !!id,
  });
}