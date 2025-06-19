import { Page } from "@playwright/test";

export class ApiPage {
  constructor(protected page: Page) {}

  async mockTagsAPI() {
    await this.page.route(`*/**/api/tags`, async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ tags: ["React", "Nauka!"] }),
      });
    });
  }

  async modifyAPIResponse() {
    await this.page.route("*/**/api/articles?*", async (route) => {
      const res = await route.fetch();
      const originalBody = await res.json();

      originalBody.articles[0].title = "Changed!";

      await route.fulfill({
        status: 200,
        body: JSON.stringify(originalBody),
      });
    });
  }
}
