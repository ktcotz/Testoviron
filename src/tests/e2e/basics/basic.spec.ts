import test from "@playwright/test";
import { NavigationPage } from "../pageObjects/NavigationPage";
import { FormLayoutsPage } from "../pageObjects/FormLayoutsPage";

test.describe("Basic components E2E testing", () => {
  test("Should correctly working on form layouts e2e components", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToFormLayouts();

    const formLayoutsPage = new FormLayoutsPage(page);
  });
});
