import { test, expect } from '../fixtures/account';

test.describe('User Account', () => {
    test('View account details when logged in', async ({ userPage }) => {
        await expect(userPage.getUrl()).resolves.toContain('/user.html');
        await expect(userPage.getUserHeaderTitle()).resolves.toContain('User Account');
        await expect(userPage.getUserMessage()).resolves.toContain('Welcome to your account page!');
    });

    test('View account details when not logged in', async ({ userPage }) => {
        await expect(userPage.getUrl()).resolves.toContain('/user.html');
        await expect(userPage.getUserMessage()).resolves.toContain('You are not logged in.');
        await expect(userPage.getLoginButton()).resolves.toBeVisible();
    });
});