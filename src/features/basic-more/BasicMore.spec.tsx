import { beforeEach, describe, expect, test } from "vitest";
import { BasicMore } from "./BasicMore";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BasicMore component tests", () => {
  beforeEach(() => {
    render(<BasicMore />);
  });

  test("Button starts with red background", () => {
    const button = screen.getByRole("button", { name: /Change to blue/i });
    expect(button).toHaveClass("bg-red-500");
  });

  test("Button changes background to blue", async () => {
    const button = screen.getByRole("button", { name: /Change to blue/i });
    const userEvents = userEvent.setup();

    expect(button).toHaveClass("bg-red-500");

    await userEvents.click(button);

    expect(button).toHaveClass("bg-blue-500");
    expect(button).toHaveTextContent("Change to red");
  });

  test("Checkbox initially unchecked", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("Checkbox can be checked", async () => {
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /Change to blue/i });
    const userEvents = userEvent.setup();

    await userEvents.click(checkbox);

    expect(checkbox).toBeChecked();

    await userEvents.click(button);

    expect(button).toBeDisabled();
  });
});
