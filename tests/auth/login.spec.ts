
// import test, { expect } from '@playwright/test';
// import { LoginPage } from './pages/login.page';

import { test, expect } from '../fixtures/auth';

test.describe('Log in', () => {
  test('User logs in with valid credentials', async ({ authenticatedPage }) => {
    await expect(authenticatedPage.getUrl()).toContain('/.*cart.html');
    await expect(authenticatedPage.getUserInfo()).toBe('ul36730333');
  });

});
