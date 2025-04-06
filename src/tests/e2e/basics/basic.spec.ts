import test from "@playwright/test";
import { NavigationPage } from "../pageObjects/NavigationPage";
import { FormLayoutsPage } from "../pageObjects/FormLayoutsPage";
import { ResultsPage } from "../pageObjects/ResultsPage";
import { ModalOverlaysPage } from "../pageObjects/ModalOverlaysPage";
import { ThemePage } from "../pageObjects/ThemePage";
import { TablesDataPage } from "../pageObjects/TablesDataPage";
import { DatePicker } from "../pageObjects/DatePickerPage";

test.describe("Basic components E2E testing", () => {
  test("Should correctly working on form layouts e2e components", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToFormLayouts();

    const formLayoutsPage = new FormLayoutsPage(page);
    await formLayoutsPage.setupUsingGridForm();

    const resultsPage = new ResultsPage(page);
    await resultsPage.resultUsingGridForm();
  });

  test("Should correctly working on modal overlays e2e components", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToModalOverlaysLayouts();

    const modalOverlaysPage = new ModalOverlaysPage(page);
    await modalOverlaysPage.setupToastrCheckboxes();
  });

  test("Should correctly working on theme e2e component", async ({ page }) => {
    await page.goto("http://localhost:4200");

    const themePage = new ThemePage(page);
    await themePage.toggleTheme();

    const resultsPage = new ResultsPage(page);
    await resultsPage.themeCorrectChange();
  });

  test("Should correctly working on tooltips e2e component", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToModalOverlaysLayouts("Tooltip");

    const modalOverlaysPage = new ModalOverlaysPage(page);
    await modalOverlaysPage.setupTooltip();

    const resultsPage = new ResultsPage(page);
    await resultsPage.tooltipShowing();
  });

  test("Should correctly working on dialogs e2e component", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToTablesData();

    page.on("dialog", async (dialog) => {
      console.log(dialog.message());

      await dialog.accept();
    });

    const tablesDataPage = new TablesDataPage(page);
    await tablesDataPage.showDeleteAlert();

    const resultsPage = new ResultsPage(page);
    await resultsPage.correctDialogDelete();
  });

  test("Should correctly working on web tables e2e component", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToTablesData();

    const tablesDataPage = new TablesDataPage(page);
    await tablesDataPage.modifyAgeRow();
    await tablesDataPage.modifyIDEmail();

    await tablesDataPage.filterByValue();
  });

  test("Should correctly working with date pickers e2e component", async ({
    page,
  }) => {
    await page.goto("http://localhost:4200");

    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToDatePicker();

    const datePickerPage = new DatePicker(page);
    await datePickerPage.commonDatepicker();
  });
});
