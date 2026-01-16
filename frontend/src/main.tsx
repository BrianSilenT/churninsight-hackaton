import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { createRoot } from "react-dom/client";
  import App from "./App";
  import "./index.css";

const queryClient = new QueryClient();

if (import.meta.env.VITE_USE_MOCK?.toLowerCase() === "true") {
  import("./mocks/browser").then(({ startWorker }) => startWorker());
}

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
  