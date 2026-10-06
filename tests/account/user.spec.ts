import { test, expect } from '../fixtures/account';

test.describe('User Account', () => {
    test('View account details when logged in', async ({ userPage, testUser, authenticatedUserPage }) => {
        await expect(await userPage.getUrl()).toContain('/user.html');
        await expect(await userPage.getUserHeaderTitle()).toContain('User Account');
        await expect(await userPage.getUserMessage()).toContain(`Welcome back, ${testUser.username}!`);
    });

    test('View account details when not logged in', async ({ userPage }) => {
        await expect(await userPage.getUrl()).toContain('/user.html');
        await expect(await userPage.getUserMessage()).toContain('You are not logged in.');
        await expect(await userPage.getLoginButton()).toBeVisible();
    });
});