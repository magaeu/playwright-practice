import { Locator, Page } from "@playwright/test";

export class ConfirmationPage {
    readonly page: Page;
    private readonly confirmationMessage: Locator;
    private readonly url = 'https://bstackdemo.com/confirmation';

    constructor(page: Page) {
        this.page = page;
        this.confirmationMessage = this.page.locator('#confirmation-message');
    }

    async goTo(): Promise<void> {
        await this.page.goto(this.url);
    }

    async getUrl(): Promise<string> {       
        return this.page.url();   
    }

    async getConfirmationMessage(): Promise<string> {
        return await this.confirmationMessage.textContent() || '';
    }
}