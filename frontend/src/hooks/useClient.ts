import { getClientByDni } from "../services/clientService";
import type { ClientData } from "../schemas/client";
import { useQuery } from "@tanstack/react-query";

export function useClientByDni(dni: string | null) {
  return useQuery<ClientData, Error>({
    queryKey: ["client", dni],
    queryFn: async () => {
      if (!dni) throw new Error("El número DNI es requerido");
      return await getClientByDni(dni);
    },
    enabled: Boolean(dni),
    retry: false,
  });
}
