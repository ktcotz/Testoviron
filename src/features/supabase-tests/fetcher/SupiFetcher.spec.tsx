import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as hooks from "./../hooks/useTodos";
import { SupiFetcher } from "./SupiFetcher";

const queryClient = new QueryClient();

const EXAMPLE_DATA = [
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Run",
  },
  { id: 3, name: "Learn" },
];

describe("Supi Fetcher tests", () => {
  test("Should render items when successful response", async () => {
    vi.spyOn(hooks, "useTodos").mockImplementation(() => ({
      data: EXAMPLE_DATA,
      isLoading: false,
    }));

    render(<SupiFetcher />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const tasks = await screen.findAllByText(/Task/i);

    expect(tasks.length).toBe(3);
  });

  test("Should see a loading when is loading", async () => {
    vi.spyOn(hooks, "useTodos").mockImplementation(() => ({
      data: undefined,
      isLoading: true,
    }));

    render(<SupiFetcher />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const loadingBar = screen.getByRole("progressbar");

    expect(loadingBar).toBeInTheDocument();
  });

  test("Should see a information when empty tasks", async () => {
    vi.spyOn(hooks, "useTodos").mockImplementation(() => ({
      data: [],
      isLoading: false,
    }));

    render(<SupiFetcher />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        );
      },
    });

    const emptyInformation = screen.getByText(/Nie masz więcej zadań/i);

    expect(emptyInformation).toBeInTheDocument();
  });
});
