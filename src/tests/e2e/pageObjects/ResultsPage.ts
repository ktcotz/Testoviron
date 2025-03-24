import { expect, Page } from "@playwright/test";

export class ResultsPage {
  constructor(protected page: Page) {}

  async resultUsingGridForm() {
    const usingForm = this.page.locator("nb-card", {
      hasText: /Using the Grid/g,
    });

    const emailInput = usingForm.getByRole("textbox", { name: "Email" });
    const radioInput = usingForm.getByRole("radio", { name: "Option 1" });

    await expect(emailInput).toHaveValue("kam.nas21@wp.pl");
    await expect(radioInput).toBeChecked();
  }

  async themeCorrectChange() {
    const appHeaderLayout = this.page.locator("nb-layout-header");

    await expect(appHeaderLayout).toHaveCSS(
      "background-color",
      "rgb(34, 43, 69)"
    );
  }

  async tooltipShowing() {
    const tooltip = this.page.locator("nb-tooltip");

    await expect(tooltip).toBeDefined();
  }

  async correctDialogDelete() {
    const firstRow = this.page.locator("table tr").first();

    await expect(firstRow).not.toHaveText(/mdo@gmail.com/);
  }
}
