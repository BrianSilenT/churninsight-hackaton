import { useQuery } from "@tanstack/react-query";
import { getClients } from "../services/clientService";
import type { Client } from "../schemas/client.schema";

export function useClients() {
  return useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: getClients,
  });
}