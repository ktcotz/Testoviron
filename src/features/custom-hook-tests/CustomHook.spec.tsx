import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHook } from "./CustomHook";
import userEvent from "@testing-library/user-event";

describe("CustomHook testing", () => {
  test("Should basic render", () => {
    render(<CustomHook />);

    const title = screen.getByText("Custom Hook");
    const count = screen.getByText("Count: 0");
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    expect(title).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test("Should increment count", async () => {
    render(<CustomHook />);

    const userEvents = userEvent.setup();

    const incrementButton = screen.getByText("Increment");
    await userEvents.click(incrementButton);

    const count = screen.getByText("Count: 1");
    expect(count).toBeInTheDocument();
  });
});
