import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  formsLink: Locator;
  formLayoutsLink: Locator;
  datePickerLink: Locator;

  modalOverlaysLink: Locator;
  tablesOverlaysLink: Locator;
  constructor(protected page: Page) {
    this.formsLink = this.page.getByRole("link", { name: "Forms" });
    this.formLayoutsLink = this.page.getByRole("link", {
      name: "Form Layouts",
    });

    this.datePickerLink = this.page.getByRole("link", {
      name: "Datepicker",
    });

    this.modalOverlaysLink = this.page.getByRole("link", {
      name: "Modal & Overlays",
    });

    this.tablesOverlaysLink = this.page.getByRole("link", {
      name: "Tables & Data",
    });
  }

  async navigateToFormLayouts() {
    await this.formsLink.click();
    await this.formLayoutsLink.click();
  }

  async navigateToDatePicker() {
    await this.formsLink.click();
    await this.datePickerLink.click();
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

  async navigateToTablesData(
    element: "Smart Table" | "Tooltip" = "Smart Table"
  ) {
    await this.tablesOverlaysLink.click();

    const modalElement = this.page.getByRole("link", {
      name: element,
    });

    await modalElement.click();
  }
}
