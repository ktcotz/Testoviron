import { test, expect } from "@playwright/test";

test.describe("Web tables playwright tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
  });

  test("Web tables", async ({ page }) => {
    const row = page.getByRole("row", { name: "twitter@outlook.com" });
    await row.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("Age").clear();
    await page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await page.locator(".nb-checkmark").click();
  });
});
