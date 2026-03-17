import { test, expect } from '../fixtures/auth';

test('user can log in', async ({ loginSteps, page }) => {
  await loginSteps.login("huhu@huhu.com", "huhu123");
  await expect(page).toHaveURL('/dashboard');
});