import { expect, test } from "@playwright/test";

test.describe("Interaction with web elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Example", async ({ page }) => {
    await page.getByPlaceholder(/Jane Doe/i).fill("Kamil Naskręt");
  });
});
