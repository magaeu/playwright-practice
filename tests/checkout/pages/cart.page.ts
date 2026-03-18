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

    async getUrl() {
        return this.page.url();
    }

    async getUserInfo() {
        return await this.userInfo.textContent();
    }

    async getCartItems() {
        return await this.cartItems.allTextContents();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}