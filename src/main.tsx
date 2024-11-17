import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App.tsx";
import "./style/index.css";
import { OrderDetailsProvider } from "./features/context/OrderDetails.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <OrderDetailsProvider>
        <App />
      </OrderDetailsProvider>
    </QueryClientProvider>
  </StrictMode>
);
