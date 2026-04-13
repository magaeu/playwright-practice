import { Locator, Page } from "@playwright/test";

export class CartPage {
    private readonly userInfo: Locator;
    private readonly cartItems: Locator;
    private readonly checkoutButton: Locator;

    constructor(private page: Page) {
        this.page = page;
        this.userInfo = this.page.locator('#userInfo');
        this.cartItems = this.page.locator('.cart-item');
        this.checkoutButton = this.page.locator('#checkoutBtn');
    }

    async getUrl(): Promise<CartPage> {
        await this.page.url();
        return this;
    }

    async getUserInfo(): Promise<string> {
        return await this.userInfo.innerText();
    }

    async getCartItems(): Promise<string[]> {
        return await this.cartItems.allTextContents();
    }

    async clickCheckout() : Promise<void> {
        await this.checkoutButton.click();
    }
}