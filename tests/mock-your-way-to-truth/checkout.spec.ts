import { expect, test } from "../fixtures/checkout";


test.describe('Checkout Process', () => {
    test('successfull checkout message is displayed', async ({ page, authenticatedUser, checkoutPage, confirmationPage }) => {
        await checkoutPage.fillUserDetails('John', 'Doe', '123 Main St', 'Anytown', '12345');
        await checkoutPage.clickSubmitButton();

        await page.waitForURL('https://bstackdemo.com/confirmation',
            { waitUntil: 'domcontentloaded' }
        );

        await expect(confirmationPage.getUrl()).resolves.toContain('/confirmation');
        await expect(confirmationPage.getConfirmationMessage()).resolves.toContain('Your Order has been successfully placed.');
    });

    test('page redirects on failed checkout', async ({ page, authenticatedUser, checkoutPage }) => {
        await checkoutPage.fillUserDetails('John', 'Doe', '123 Main St', 'Anytown', '12345');

        await checkoutPage.page.route('*/**/api/checkout', async route => {
            const response = await route.fetch();
            route.fulfill({
                status: 400,
                contentType: 'application/json',
                response: response
            });
        });

        await checkoutPage.clickSubmitButton();

        await page.waitForURL('https://bstackdemo.com/',
            { waitUntil: 'domcontentloaded' }
        );

        await expect(page.url()).toBe('https://bstackdemo.com/');
    });
});