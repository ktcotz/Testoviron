import { expect, test } from "@playwright/test";

test("Has title", async ({ page }) => {
  await page.goto("https://playwright.dev");

  await expect(page).toHaveTitle(/Playwright/);
});
