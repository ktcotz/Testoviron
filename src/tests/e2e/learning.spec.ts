import { expect, test } from "@playwright/test";

test.describe("General layout form testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Testing input fields", async ({ page }) => {
    const parentForm = page.locator("nb-card", { hasText: "Using the Grid" });

    const emailInput = parentForm.getByRole("textbox", { name: "Email" });

    await emailInput.fill("Test@test.com");

    await expect(emailInput).toHaveValue("Test@test.com");
  });

  test("Testing radio buttons", async ({ page }) => {
    const parentForm = page.locator("nb-card", { hasText: "Using the Grid" });

    const firstRadioButton = parentForm.getByRole("radio", {
      name: "Option 1",
    });

    await firstRadioButton.check({ force: true });

    const isRadioChecked = firstRadioButton.isChecked();

    expect(isRadioChecked).toBeTruthy();

    const secondRadioButton = parentForm.getByRole("radio", {
      name: "Option 2",
    });

    await secondRadioButton.check({ force: true });

    expect(await firstRadioButton.isChecked()).toBeFalsy();
  });
});
