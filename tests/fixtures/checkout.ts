import { test as base } from '@playwright/test';
import { CheckoutPage } from '../mock-your-way-to-truth/pages/checkout.page';
import { ConfirmationPage } from '../mock-your-way-to-truth/pages/confirmation.page';

type CheckoutFixtures = {
    checkoutPage: CheckoutPage;
    confirmationPage: ConfirmationPage;
    authenticatedUser: CheckoutPage;
};

export const test = base.extend<CheckoutFixtures>({
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goTo();
        await use(checkoutPage);
    },

    confirmationPage: async ({ page }, use) => {
        const confirmationPage = new ConfirmationPage(page);
        await use(confirmationPage);
    },

    authenticatedUser: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goTo();

        const sessionStorage = await checkoutPage.page.evaluate(() => 
            window.sessionStorage
        );

        await checkoutPage.page.evaluate(setSessionStorage);

        await checkoutPage.page.reload();

        await use(checkoutPage);      
    }  
});

    async function setSessionStorage() {
        window.sessionStorage.setItem('username', 'demouser');
        window.sessionStorage.setItem('state', '{"cart":{"products":[{"availableSizes":["Apple"],"currencyFormat":"$","currencyId":"USD","description":"iPhone 12","id":1,"installments":9,"isFav":false,"altText":"img","price":799,"sku":"iPhone12-device-info.png","title":"iPhone 12","quantity":1}],"productToAdd":{"availableSizes":["Apple"],"currencyFormat":"$","currencyId":"USD","description":"iPhone 12","id":1,"installments":9,"isFav":false,"altText":"img","price":799,"sku":"iPhone12-device-info.png","title":"iPhone 12","quantity":1}},"total":{"data":{"productQuantity":1,"installments":9,"totalPrice":799,"currencyId":"USD","currencyFormat":"$"}}}');
    } 

export { expect } from '@playwright/test';