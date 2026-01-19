import { useQuery } from "@tanstack/react-query";
import { getStats } from "../services/statsService";
import type { Stats } from "../schemas/stats.schema";

export function useStats() {
  return useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: getStats,
    staleTime: 1000 * 60 * 5, 
  });
}