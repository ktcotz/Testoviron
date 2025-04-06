import { expect, Locator, Page } from "@playwright/test";

export class DatePicker {
  commonDatepickerContainer: Locator;

  constructor(protected page: Page) {
    this.commonDatepickerContainer = this.page.locator("nb-card", {
      hasText: /Common Datepicker/,
    });
  }

  async commonDatepicker() {
    const picker = this.commonDatepickerContainer.getByRole("textbox");

    await picker.click();

    const date = new Date();

    date.setDate(date.getDate() + 1);

    const expectedDate = date.getDate().toString();

    const exampleDate = this.page
      .locator('[class="day-cell ng-star-inserted"]')
      .getByText(expectedDate, { exact: true });

    await exampleDate.click();

    await expect(picker).toHaveValue(
      `${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getDate()}, ${date.getFullYear()}`
    );
  }
}
