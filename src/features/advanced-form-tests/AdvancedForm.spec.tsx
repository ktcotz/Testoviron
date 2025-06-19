import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AdvancedForm } from "./AdvancedForm";
import userEvent from "@testing-library/user-event";

describe("AdvancedForm", () => {
  test("Should render login and password input with button", () => {
    render(<AdvancedForm />);

    const loginInput = screen.getByLabelText(/login/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Should show error message when login is less than 5 characters or password is less than 5 characters", async () => {
    render(<AdvancedForm />);

    const loginInput = screen.getByLabelText(/login/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const userEvents = userEvent.setup();

    await userEvents.type(loginInput, "1234");
    await userEvents.type(passwordInput, "1234");

    await userEvents.click(submitButton);

    expect(
      screen.getByText(/login must be at least 5 characters/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/password must be at least 5 characters/i)
    ).toBeInTheDocument();
  });

  test("Should show user login after submit", async () => {
    render(<AdvancedForm />);

    const loginInput = screen.getByLabelText(/login/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const userEvents = userEvent.setup();

    await userEvents.type(loginInput, "12345");
    await userEvents.type(passwordInput, "12345");

    await userEvents.click(submitButton);

    expect(screen.getByText(/1234/i)).toBeInTheDocument();
  });
});
