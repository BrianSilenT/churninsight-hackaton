import { setupServer } from "msw/node";
import { createHandlers } from "./handlers";
import * as msw from "msw";

//Versión MSW para test y entorno node 
export const server = setupServer(...(createHandlers(msw.rest) as any));
