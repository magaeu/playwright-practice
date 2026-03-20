import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly addressField: Locator;
    private readonly cityField: Locator;
    private readonly postalCodeField: Locator;
    private readonly submitButton: Locator;
    private readonly url = 'https://bstackdemo.com/checkout';

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = this.page.locator('#firstNameInput');
        this.lastNameField = this.page.locator('#lastNameInput');
        this.addressField = this.page.locator('#addressLine1Input');
        this.cityField = this.page.locator('#provinceInput');
        this.postalCodeField = this.page.locator('#postCodeInput');
        this.submitButton = this.page.locator('#checkout-shipping-continue');
    }

    async goTo() : Promise<void> {
        await this.page.goto(
            this.url,
            {waitUntil: 'domcontentloaded'}
        );
    }

    async fillUserDetails(firstName: string, lastName: string, address: string, city: string, postalCode: string): Promise<void> {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.addressField.fill(address);
        await this.cityField.fill(city);
        await this.postalCodeField.fill(postalCode);
    }

    async clickSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }
}