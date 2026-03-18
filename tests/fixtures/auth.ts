import { test as base } from '@playwright/test';
import { LoginPage } from '../auth/pages/login.page';
import { CartPage } from '../checkout/pages/cart.page';

type AuthFixtures = {
  loginPage: LoginPage;
  authenticatedPage: CartPage;
  testUser: { username: string; password: string };
};

export const test = base.extend<AuthFixtures>({
 testUser: async ({}, use) => {
    const email = 'ul36730333';
    const user = {
      username: email,
      password: `${email}_PASS`,
    };
    await use(user);
  },

  authenticatedPage: async ({ page, testUser }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(testUser.username, testUser.password);
    await use(new CartPage(page));
  }
});

export { expect } from '@playwright/test';