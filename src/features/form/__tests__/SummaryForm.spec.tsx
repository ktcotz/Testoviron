import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("SummaryForm", () => {
  test("Checkbox is initially unchecked", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });

    expect(checkbox).not.toBeChecked();
  });

  test("Checkbox can be checked", async () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });

    const userEvents = userEvent.setup();

    await userEvents.click(checkbox);

    expect(checkbox).toBeChecked();

    await userEvents.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
