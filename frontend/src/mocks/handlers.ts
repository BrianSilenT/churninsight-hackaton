import { mockClients } from "./mockClients";

//Simula API como si fuera un servidor real
export function createHandlers(rest: any) {
  return [
    rest.get("/clients/:id", (req: any, res: any, ctx: any) => {
      const { id } = req.params as { id: string };
      const client = mockClients[id];
      if (!client) return res(ctx.status(404), 
                              ctx.json({ message: "ID no encontrada" }));
      return res(ctx.status(200), ctx.json(client));
    }),

    rest.get("/clients", (_req: any, res: any, ctx: any) => {
      const list = Object.values(mockClients);
      return res(ctx.status(200), ctx.json({ data: list }));
    }),
  ];
}

