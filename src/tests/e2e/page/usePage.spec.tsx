import { test } from "@playwright/test";
import { NavigationPage } from "../../../page-objects/navigation-page";
import { FormLayoutsPage } from "../../../page-objects/form-layouts-page";

test.describe("usePage testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
  });

  test("navigate to form page", async ({ page }) => {
    const navigateTo = new NavigationPage(page);

    await navigateTo.formLayoutsPage();
  });

  test("parametherized methods", async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    const onFormLayoutsPage = new FormLayoutsPage(page);

    await navigateTo.formLayoutsPage();
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
      "test@test.com",
      "Welcome1",
      "Option 1"
    );

    await onFormLayoutsPage.submitInlineFormWithCredentialsAndCheckbox(
      "Kamil Naskręt",
      "kam.nasasd@0asdk.pl",
      true
    );
  });
});
