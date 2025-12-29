import { createHandlers } from "./handlers";
import { setupWorker } from "msw/browser";

//inicia el msw, se intercepta el proxy y el API no se afecta
export async function startWorker() {
  try {
    const mswModule = await import("msw");
    const rest = (mswModule as any).rest ?? (mswModule as any).default?.rest;
    if (!rest) {
      console.warn("MSW: 'rest' helper not found; skipping worker start in this environment.");
      return;
    }
    const handlers = createHandlers(rest);
    const worker = setupWorker(...handlers);
    await worker.start();
    try {
      if (typeof window !== "undefined") {
        (window as any).__MSW_ACTIVE = true;
        window.dispatchEvent(new CustomEvent("msw:started"));
      }
    } catch (e) {
    }
    return worker;
  } catch (err) {
    console.error("Failed to start MSW worker:", err);
    try {
      if (typeof window !== "undefined") {
        (window as any).__MSW_ACTIVE = false;
        window.dispatchEvent(new CustomEvent("msw:failed"));
      }
    } catch (e) {
    }
  }
}

