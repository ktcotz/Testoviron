import { test, expect } from "@playwright/test";

test.describe("General learning testing of components", () => {
  test("Checkboxes tests", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Toastr").click();

    const firstCheckbox = await page.getByRole("checkbox", {
      name: "Hide on click",
    });

    await firstCheckbox.uncheck({ force: true });

    const allBoxes = page.getByRole("checkbox");

    for (const checkbox of await allBoxes.all()) {
      await checkbox.check({ force: true });

      expect(await checkbox.isChecked()).toBeTruthy();
    }
  });

  test("Lists and dropdowns", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    const dropdown = page.locator("ngx-header nb-select");

    await dropdown.click();

    const optionList = page.locator("nb-option-list nb-option");

    await expect(optionList).toHaveText([
      "Light",
      "Dark",
      "Cosmic",
      "Corporate",
    ]);

    const cosmicOption = optionList.filter({ hasText: "Cosmic" });

    await cosmicOption.click();

    const header = page.locator("nb-layout-header");

    await expect(header).toHaveCSS("background-color", "rgb(50,50,89)");
  });

  test("Tooltips", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Tooltip").click();

    const toolTipCard = page.locator("nb-card", {
      hasText: "Tooltip Placements",
    });

    const exampleButton = toolTipCard.getByRole("button", { name: "Top" });

    await exampleButton.hover();

    const toolTip = page.locator("nb-tooltip");

    expect(await toolTip.textContent()).toEqual("This is a tooltip");
  });

  test("Dialog boxes", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();

    page.on("dialog", (dialog) => {
      expect(dialog.message()).toEqual("Are you sure you want to delete?");

      dialog.accept();
    });

    const deleteButton = page
      .locator("table")
      .locator("tr", { hasText: "mdo@gmail.com" })
      .locator(".nb-trash");

    await deleteButton.click();
  });
});
