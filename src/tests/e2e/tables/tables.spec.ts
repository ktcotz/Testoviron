import { test, expect } from "@playwright/test";

test.describe("Web tables playwright tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
  });

  test("Edit table row", async ({ page }) => {
    const row = page.getByRole("row", { name: "twitter@outlook.com" });
    await row.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("Age").clear();
    await page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await page.locator(".nb-checkmark").click();
  });

  test("Edit user email on page 2 with id 11", async ({ page }) => {
    const linkToSecondPage = page.locator(".ng2-smart-page-link", {
      hasText: "2",
    });

    await linkToSecondPage.click();

    const userWithId11 = page
      .getByRole("row", { name: "11" })
      .filter({ has: page.locator("td").nth(1).getByText("11") });

    const mark = userWithId11.locator(".nb-edit");

    await mark.click();

    await page.locator("input-editor").getByPlaceholder("E-mail").clear();
    await page
      .locator("input-editor")
      .getByPlaceholder("E-mail")
      .fill("test@test.com");
    await page.locator(".nb-checkmark").click();

    await expect(userWithId11.locator("td").nth(5)).toHaveText("test@test.com");
  });

  test("Automate filtering expressions", async ({ page }) => {
    const ageField = page.locator("input-filter").getByPlaceholder("Age");

    await ageField.fill("20");

    await page.waitForTimeout(1000);
    const allFields = page.locator("tbody tr");

    for (const field of await allFields.all()) {
      const fieldValue = await field.locator("td").last().textContent();

      expect(fieldValue).toBe("20");
    }
  });
});
