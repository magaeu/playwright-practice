import { test, expect } from '../fixtures/auth';

test.describe('Log in', () => {
  test('User logs in with valid credentials', async ({ page, loginPage, testUser, cartPage }) => {
    await loginPage.login(testUser.username, testUser.password);
    await page.waitForURL('**/cart.html');
    await expect(await cartPage.getUrl()).toContain('/cart.html');
    await expect(await cartPage.getUserInfo()).toBe('ul36730333');
  });

  test('User logs in with invalid credentials', async ({ loginPage, testUser }) => {
    await loginPage.login(testUser.username, 'wrong_password');
    await expect(await loginPage.getUrl()).toContain('/login.html');
    await expect(await loginPage.getErrorMessage()).toContain('Password incorrect - you are not logged in');
  });

});
