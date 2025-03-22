import { Locator, Page } from "@playwright/test";

export class ModalOverlaysPage {
  protected toastrContainer: Locator;
  protected tooltipContainer: Locator;

  constructor(protected page: Page) {
    this.toastrContainer = this.page.locator("ngx-toastr");
    this.tooltipContainer = this.page.locator("nb-card", {
      hasText: /Tooltip Placement/,
    });
  }

  async setupToastrCheckboxes() {
    const hideClickCheckbox = this.toastrContainer.getByRole("checkbox", {
      name: "Hide on click",
    });

    const preventCheckbox = this.toastrContainer.getByRole("checkbox", {
      name: "Prevent arising of duplicate toast",
    });

    await hideClickCheckbox.uncheck({ force: true });
    await preventCheckbox.check({ force: true });
  }

  async setupTooltip() {
    const button = this.tooltipContainer.getByRole("button", { name: /Top/ });

    await button.hover();
  }
}
