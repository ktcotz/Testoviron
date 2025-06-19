import test from "@playwright/test";
import { ApiPage } from "../pageObjects/ApiPage";

test.describe("API testing", () => {
  test("Should correctly mocking API", async ({ page }) => {
    const apiPage = new ApiPage(page);

    await apiPage.mockTagsAPI();

    await page.goto("https://conduit.bondaracademy.com", {
      waitUntil: "networkidle",
    });
  });

  test("Should correctly modify API response", async ({ page }) => {
    const apiPage = new ApiPage(page);

    await apiPage.modifyAPIResponse();

    await page.goto("https://conduit.bondaracademy.com", {
      waitUntil: "networkidle",
    });
  });
});
