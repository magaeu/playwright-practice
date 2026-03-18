import { test, expect } from '../fixtures/auth';

test.describe('Log in', () => {
  test('User logs in with valid credentials', async ({ page, loginPage, testUser,cartPage }) => {
    await loginPage.login(testUser.username, testUser.password);
    await page.waitForURL('**/cart.html');
    await expect(cartPage.getUrl()).resolves.toContain('/cart.html');
    await expect(cartPage.getUserInfo()).resolves.toBe('ul36730333');
  });

  test('User logs in with invalid credentials', async ({ loginPage, testUser }) => {
    await loginPage.login(testUser.username, 'wrong_password');
    await expect(loginPage.getUrl()).resolves.toContain('/login.html');
    await expect(loginPage.getErrorMessage()).resolves.toContain('Password incorrect - you are not logged in');
  });

});
