import { test, expect } from "../fixtures/axe-test";
import { createHtmlReport } from 'axe-html-reporter';
import path from "path";

test.describe("Accessibility", () => {
    test("should have no accessibility violations", async ({ page, makeAxeBuilder }) => {
        await page.goto("https://alphagov.github.io/accessibility-tool-audit/test-cases.html#content");
        await page.waitForLoadState('networkidle');

        const accessibilityScanResults = await makeAxeBuilder()
            .analyze();

        createHtmlReport({
            results: accessibilityScanResults,
            options: {
                outputDir: path.join('test-results', 'accessibility-results'),
                reportFileName: `accessibility-report.html`,
            },
        });

        // Assert that there are no accessibility violations 
        // Since site has violations, this assertion will fail await expect(accessibilityScanResults.violations).toEqual([]);
        // To make CI not fail, assertion will be not.toEqual
        await expect(accessibilityScanResults.violations).not.toEqual([]);
    });
});
