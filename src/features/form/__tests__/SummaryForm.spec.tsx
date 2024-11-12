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

  test("popover responds to hover", async () => {
    render(<SummaryForm />);

    const userEvents = userEvent.setup();

    const popover = screen.queryByText(
      /No ice cream will actually be delivered/i
    );

    expect(popover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/Terms and Conditions/i);

    await userEvents.hover(termsAndConditions);

    const popoverVisible = screen.queryByText(
      /No ice cream will actually be delivered/i
    );

    expect(popoverVisible).toBeInTheDocument();
  });
});
