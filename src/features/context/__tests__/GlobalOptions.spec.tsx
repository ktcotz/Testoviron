import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Options } from "../../msw/Options";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("Context component tests", () => {
  test("Update scoop subtotal when scoops change", async () => {
    render(<Options optionType="scoops" />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const userEvents = userEvent.setup();

    const scoopsTotal = screen.getByText("Scoops total: $", { exact: false });

    expect(scoopsTotal).toHaveTextContent("0.00");

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    await userEvents.clear(vanillaInput);
    await userEvents.type(vanillaInput, "1");

    expect(scoopsTotal).toHaveTextContent("2.00");

    await userEvents.clear(chocolateInput);
    await userEvents.type(chocolateInput, "2");

    expect(scoopsTotal).toHaveTextContent("6.00");
  });
});
