import { describe, expect, test } from "vitest";
import OrderEntry from "../OrderEntry";
import { render, screen } from "@testing-library/react";
import { server } from "../../../mocks/node";
import { HttpResponse } from "msw";
import { http } from "msw";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

describe.only("OrderEntry component tests", () => {
  test("Should render with error", async () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    server.use(
      http.get("http://localhost:3030/scoops", () => {
        return new HttpResponse(null, { status: 500 });
      }),

      http.get("http://localhost:3030/toppings", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<OrderEntry />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    const alertBanner = await screen.findByRole("alert");

    expect(alertBanner).toBeInTheDocument();
  });
});
