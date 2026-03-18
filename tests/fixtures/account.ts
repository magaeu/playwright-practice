import { test as base } from '@playwright/test';
import { UserPage } from '../account/pages/user.page';

type AccountFixtures = {
  userPage: UserPage
};

export const test = base.extend<AccountFixtures>({
  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await userPage.goTo();
    await use(userPage);
  }
});

export { expect } from '@playwright/test';