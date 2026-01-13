import { getClients } from "../services/clientService";
import type { ClientData } from "../schemas/client";
import { useQuery } from "@tanstack/react-query";

export function useClients() {
  return useQuery<ClientData[], Error>({
    queryKey: ["clients"],
    queryFn: getClients, // React Query ejecutará la lógica de captura de errores definida en el service
    retry: false,
    // Opcional: mantiene los datos anteriores mientras se carga la nueva consulta
    placeholderData: (previousData) => previousData, 
  });
}
