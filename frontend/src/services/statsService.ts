import { api } from "../lib/api";
import { StatsSchema, type Stats } from "../schemas/stats.schema";

export async function getStats(): Promise<Stats> {
  const res = await api.get("/api/stats");

  return StatsSchema.parse(res.data);
}