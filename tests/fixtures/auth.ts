import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../auth/pages/login.page';

type AuthFixtures = {
  loginSteps: {
    login: (username: string, password: string) => Promise<void>;
  };
};

export const test = base.extend<AuthFixtures>({
  loginSteps: async ({ page }, use) => {
    const loginSteps = {
      async login(username: string, password: string) {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(username, password);
      }
    };

    await use(loginSteps);
  }
});

export { expect };