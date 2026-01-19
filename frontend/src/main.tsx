import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

async function enableMocks() {
  if (import.meta.env.VITE_USE_MOCK?.toLowerCase() === "true") {
    const { startWorker } = await import("./mocks/browser");
    await startWorker();
  }
}

enableMocks().then(() => {
  createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
