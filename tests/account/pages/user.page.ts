import { Locator, Page } from "@playwright/test";

export class UserPage {
    private readonly page: Page;
    private readonly userHeaderTitle: Locator;
    private readonly userMessage: Locator;
    private readonly loginButton: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userHeaderTitle = this.page.locator('h1');
        this.userMessage = this.page.locator('div[class="user-message"]');
        this.loginButton = this.page.locator('#loginBtn');
        this.logoutButton = this.page.locator('#logoutBtn');
    }

    async goTo() : Promise<void> {
        await this.page.goto('user.html');
    }

    async getUrl(): Promise<string> {
        return this.page.url();
    }

    async getUserHeaderTitle(): Promise<string> {
        return await this.userHeaderTitle.innerText();
    }

    async getUserMessage(): Promise<string> {
        return await this.userMessage.innerText();
    }

    async getLoginButton(): Promise<Locator> {
        return this.loginButton;
    }

    async clickLogin() : Promise<void> {
        await this.loginButton.click();
    }

    async clickLogout() : Promise<void> {
        await this.logoutButton.click();
    }
}