import { test, expect } from "@playwright/test";

test.describe("Date picker playwright testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200");
    await page.getByText("Forms").click();
    await page.getByText("Datepicker").click();
  });

  test("Common picker testing", async ({ page }) => {
    const calendarInputField = page.getByPlaceholder("Form Picker");

    await calendarInputField.click();

    const day = page
      .locator(".day-cell.ng-star-inserted")
      .getByText("14", { exact: true });

    await day.click();

    await expect(calendarInputField).toHaveValue("Nov 14, 2024");
  });

  test("Automated date picker testing", async ({ page }) => {
    const calendarInputField = page.getByPlaceholder("Form Picker");

    await calendarInputField.click();

    const date = new Date();

    date.setDate(date.getDate() + 1);

    const expectedDate = date.getDate().toString();
    const expectedMonthShort = date.toLocaleString("EN-US", { month: "short" });
    const expectedYear = date.getFullYear();

    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

    const day = page
      .locator(`[class="day-cell ng-star-inserted"]`)
      .getByText(expectedDate, { exact: true });

    await day.click();

    await expect(calendarInputField).toHaveValue(dateToAssert);
  });
});
