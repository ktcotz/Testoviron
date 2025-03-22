import { Locator, Page } from "@playwright/test";

export class FormLayoutsPage {
  protected usingGridForm: Locator;

  constructor(protected page: Page) {
    this.usingGridForm = this.page.locator("nb-card", {
      hasText: /Using the Grid/g,
    });
  }

  async setupUsingGridForm() {
    const emailInput = this.usingGridForm.getByRole("textbox", {
      name: "Email",
    });

    const radioFirstButton = this.usingGridForm.getByRole("radio", {
      name: "Option 1",
    });

    await emailInput.fill("kam.nas21@wp.pl");
    await radioFirstButton.check({ force: true });
  }
}
