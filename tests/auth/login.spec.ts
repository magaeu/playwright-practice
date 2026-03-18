import { test, expect } from '../fixtures/auth';

test.describe('Log in', () => {
  test('User logs in with valid credentials', async ({ authenticatedPage, page }) => {
    await expect(authenticatedPage.getUserInfo).toBe('ul36730333');
    await expect(authenticatedPage.getUrl).toContain('/cart.html');
  });

});
