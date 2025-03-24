import { Page } from "@playwright/test";

export class TablesDataPage {
  constructor(protected page: Page) {}

  async showDeleteAlert() {
    const firstRow = this.page.locator("tr", { hasText: /mdo@gmail.com/ });
    const deleteButton = firstRow.locator(".nb-trash");

    await deleteButton.click();
  }

  async modifyAgeRow() {
    const row = this.page.locator("tr", { hasText: /twitter@outlook.com/ });

    const edit = row.locator(".nb-edit");

    await edit.click();

    const ageInput = this.page.locator('[ng-reflect-name="age"]');

    await ageInput.clear();
    await ageInput.fill("50");

    const accept = this.page.locator(".nb-checkmark");

    await accept.click();
  }

  async modifyIDEmail() {
    const secondButtonPage = this.page.locator("a.page-link", { hasText: "2" });

    await secondButtonPage.click();

    const targetRowByID = this.page
      .getByRole("row", { name: "11" })
      .filter({ has: this.page.locator("td").nth(1).getByText("11") });

    const edit = targetRowByID.locator(".nb-edit");

    await edit.click();

    const email = this.page.locator("input-editor").getByPlaceholder("E-mail");

    await email.clear();
    await email.fill("kam.nas21@wp.pl");

    const accept = this.page.locator(".nb-checkmark");

    await accept.click();
  }
}
