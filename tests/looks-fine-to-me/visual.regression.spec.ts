import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.page";

test.describe("Visual Regression", () => {
    test("Dashboard page is displayed as same", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await page.addStyleTag({
            content: `
                *, *::before, *::after {
                    animation-duration: 0s !important;
                    transition-duration: 0s !important;
                }
                `
        });
        await loginPage.fillEmail("test@example.com");
        await loginPage.fillPassword("password");
        await loginPage.clickLogin();

        await expect(page).toHaveScreenshot('dashboard-page.png', {
            fullPage: true,
            maxDiffPixels: 200,
            maxDiffPixelRatio: 0.01,
            threshold: 0.2
        });
    });
});