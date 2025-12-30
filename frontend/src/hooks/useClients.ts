import { getClients } from "../services/clientService";
import type { ClientData } from "../schemas/client";
import { useQuery } from "@tanstack/react-query";

export function useClients() {
  return useQuery<ClientData[], Error>({
    queryKey: ["clients"],
    queryFn: getClients,
    retry: false,
  });
}
