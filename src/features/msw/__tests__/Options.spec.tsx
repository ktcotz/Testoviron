import { render, screen } from "@testing-library/react";
import { Options } from "../Options";
import { expect, describe, test } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Options component testing", () => {
  test("Should render scoops on success", async () => {
    render(<Options optionType="scoops" />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const images = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });

    expect(images).toHaveLength(2);

    const altTexts = images.map((image) => image.alt);
    expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  test("Should render toopings on success", async () => {
    render(<Options optionType="toppings" />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const images = await screen.findAllByRole("img", {
      name: /tooping$/i,
    });

    expect(images).toHaveLength(3);

    const altTexts = images.map((image) => image.alt);
    expect(altTexts).toEqual([
      "Cherries tooping",
      "M&Ms tooping",
      "Hot fudge tooping",
    ]);
  });
});
