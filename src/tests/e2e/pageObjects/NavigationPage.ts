import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  formsLink: Locator;
  formLayoutsLink: Locator;
  constructor(protected page: Page) {
    this.formsLink = this.page.getByRole("link", { name: "Forms" });
    this.formLayoutsLink = this.page.getByRole("link", {
      name: "Form Layouts",
    });
  }

  async navigateToFormLayouts() {
    await this.formsLink.click();
    await this.formLayoutsLink.click();
  }
}
