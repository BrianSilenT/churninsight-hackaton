import { getClientById } from "../services/clientService";
import type { ClientData } from "../schemas/client";
import { useQuery } from "@tanstack/react-query";

export function useClientById(id: string | null) {
  return useQuery<ClientData, Error>({
    queryKey: ["client", id],
    queryFn: async () => {
      if (!id) throw new Error("El número ID es requerido");
      return await getClientById(id);
    },
    enabled: !!id, 
    retry: false,
  });
}
