import { Page } from "@playwright/test";

export class NavigationPage {
  constructor(readonly page: Page) {}

  async formLayoutsPage() {
    await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
  }
}
