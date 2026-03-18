
// import test, { expect } from '@playwright/test';
// import { LoginPage } from './pages/login.page';

import { test, expect } from '../fixtures/auth';
import { LoginPage } from './pages/login.page';

test.describe('Log in', () => {
  test('User logs in with valid credentials', async ({ authenticatedPage }) => {
    await expect(authenticatedPage.getUrl()).resolves.toContain('/.*cart.html');
    await expect(authenticatedPage.getUserInfo()).toBe('ul36730333');
  });

  test('User logs in with invalid credentials', async ({ page, testUser }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(testUser.username, 'wrong_password');
    await expect(loginPage.getUrl()).resolves.toContain('/.*login.html');
    await expect(loginPage.getErrorMessage()).toBe('Password incorrect - you are not logged in');
  });

});
