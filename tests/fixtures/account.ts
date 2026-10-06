import { APIRequestContext, APIResponse, test as base } from '@playwright/test';
import { UserPage } from '../account/pages/user.page';

type AccountFixtures = {
  userPage: UserPage,
  testUser: { username: string; password: string };
  loginResponse: APIResponse;
  customerId: string;
  sessionId: string;
  authenticatedUserPage: UserPage;
};

export const test = base.extend<AccountFixtures>({
  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await userPage.goTo();

    await use(userPage);
  },

  loginResponse: async ({ request, testUser }, use) => {
    const loginResponse = await request.post(`/api/basicstore/users/${testUser.username}/authenticate`, {
      data: {
        password: testUser.password,
      },
    });

    await use(loginResponse);
  },

  customerId: async ({ loginResponse }, use) => {
    const responseJson = await loginResponse.json();
    const customerId = responseJson.customerId;

    await use(customerId);
  },

  sessionId: async ({ loginResponse }, use) => {
    const responseJson = await loginResponse.json();
    const sessionId = responseJson.sessionId;

    await use(sessionId);
  },

  testUser: async ({ }, use) => {
    const email = 'ul36730333';
    const user = {
      username: email,
      password: `${email}_PASS`,
    };

    await use(user);
  },

  authenticatedUserPage: async ({ page, context, customerId, sessionId }, use) => {
    await context.addCookies([
      {
        name: 'basicCartCustomerId',
        value: customerId,
        path: '/',
        domain: 'testpages.eviltester.com'
      },
      {
        name: 'basicCartSessionId',
        value: sessionId,
        path: '/',
        domain: 'testpages.eviltester.com'
      }
    ]);

    const userPage = new UserPage(page);
    await userPage.goTo();
    await page.waitForURL('**/user.html',
      {
        waitUntil: 'domcontentloaded'
      });

    await use(userPage);
  }
});

export { expect } from '@playwright/test';