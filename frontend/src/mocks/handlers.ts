import { mockClients } from "./mockClients";

//Simula API como si fuera un servidor real
export function createHandlers(rest: any) {
  return [
    rest.get("/clients/:dni", (req: any, res: any, ctx: any) => {
      const { dni } = req.params as { dni: string };
      const client = mockClients[dni];
      if (!client) return res(ctx.status(404), 
                              ctx.json({ message: "DNI no encontrada" }));
      return res(ctx.status(200), ctx.json(client));
    }),

    rest.get("/clients", (_req: any, res: any, ctx: any) => {
      const list = Object.values(mockClients);
      return res(ctx.status(200), ctx.json({ data: list }));
    }),
  ];
}

