import { Locator, Page } from "@playwright/test";

export class ThemePage {
  protected themeToggleLocator: Locator;
  protected themeList: Locator;

  constructor(protected page: Page) {
    this.themeToggleLocator = this.page
      .locator("nb-select")
      .getByRole("button", { name: "Light" });

    this.themeList = this.page.locator("nb-option-list", { hasText: /Dark/ });
  }

  async toggleTheme() {
    await this.themeToggleLocator.click();

    const darkTheme = this.themeList.locator("nb-option", { hasText: /Dark/ });

    await darkTheme.click();
  }
}
