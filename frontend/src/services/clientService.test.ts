import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { rest, RestRequest, ResponseComposition, RestContext } from "msw";
import { getClientByDni, getClients } from "./clientService";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("clientService", () => {
  it("fetches client by id", async () => {
    const client = await getClientByDni("12345678");
    expect(client.id).toBe("12345678");
    expect(client.nombreUsuario).toBe("María González");
  });

  it("fetches clients list", async () => {
    const list = await getClients();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
    expect(list[0]).toHaveProperty("id");
  });

  it("throws when response has invalid shape", async () => {
    server.use(
      rest.get("/clients/:id", (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json({ invalid: true }));
      }) as any
    );

    await expect(getClientByDni("12345678")).rejects.toThrow();
  });
});
