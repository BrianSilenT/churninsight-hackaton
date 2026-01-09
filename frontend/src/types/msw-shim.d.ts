declare module "msw" {
  export const rest: {
    get: (
      path: string,
      handler: (req: RestRequest, res: ResponseComposition, ctx: RestContext) => unknown
    ) => unknown;
    post: (
      path: string,
      handler: (req: RestRequest, res: ResponseComposition, ctx: RestContext) => unknown
    ) => unknown;
  };

  export type RestRequest = {
    params: Record<string, string>;
    url: URL;
    method: string;
    [key: string]: unknown;
  };

  export type ResponseComposition = (...args: unknown[]) => unknown;

  export type RestContext = {
    status: (code: number) => unknown;
    json: (body: unknown) => unknown;
    [key: string]: unknown;
  };

  export function setupWorker(...handlers: unknown[]): { start: () => Promise<void> };
  export function setupServer(...handlers: unknown[]): {
    listen: () => void;
    use: (...handlers: unknown[]) => void;
    resetHandlers: () => void;
    close: () => void;
  };
}
