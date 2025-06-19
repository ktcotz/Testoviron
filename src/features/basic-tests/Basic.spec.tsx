import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Basic } from "./Basic";

describe("Basic component tests", () => {
  beforeEach(() => {
    render(<Basic />);
  });

  test("Should correctly render on initial", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: /kliknij mnie/i });

    expect(heading).toHaveTextContent(/Hello Testoviron!/i);
    expect(button).toBeInTheDocument();
  });
});
