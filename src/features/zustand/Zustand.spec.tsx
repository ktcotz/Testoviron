import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Zustand } from "./Zustand";
import userEvent from "@testing-library/user-event";

describe("Zustand tests", () => {
  test("Should on first render display name", () => {
    render(<Zustand />);
    expect(screen.getByText("Hi, Kamil")).toBeInTheDocument();
  });

  test("Should update name", async () => {
    render(<Zustand />);
    const userEvents = userEvent.setup();
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvents.clear(input);
    await userEvents.type(input, "Martyna");
    await userEvents.click(button);

    expect(screen.getByText("Hi, Martyna")).toBeInTheDocument();
  });
});
