import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  formsLink: Locator;
  formLayoutsLink: Locator;

  modalOverlaysLink: Locator;
  constructor(protected page: Page) {
    this.formsLink = this.page.getByRole("link", { name: "Forms" });
    this.formLayoutsLink = this.page.getByRole("link", {
      name: "Form Layouts",
    });

    this.modalOverlaysLink = this.page.getByRole("link", {
      name: "Modal & Overlays",
    });
  }

  async navigateToFormLayouts() {
    await this.formsLink.click();
    await this.formLayoutsLink.click();
  }

  async navigateToModalOverlaysLayouts(
    element: "Toastr" | "Tooltip" = "Toastr"
  ) {
    await this.modalOverlaysLink.click();

    const modalElement = this.page.getByRole("link", {
      name: element,
    });

    await modalElement.click();
  }
}
