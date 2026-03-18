import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
   private readonly emailField: Locator;
   private readonly passwordField: Locator;
   private readonly loginButton: Locator;
   private readonly cancelButton: Locator;
   private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator('#customerId');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.getByRole('button', { name: 'Login', exact: true });
    this.cancelButton = this.page.locator('#cancelBtns');
    this.errorMessage = this.page.locator('#errorMsg');
  }

  async goTo() : Promise<void> {
    await this.page.goto('login.html');
  }

  async getUrl() : Promise<string> {
    return this.page.url();
  }

  async fillEmail(email: string) : Promise<void> {
    await this.emailField.fill(email);
  }


  async fillPassword(password: string) : Promise<void> {
    await this.passwordField.fill(password);
  }


  async clickLogin() : Promise<void> {
    await this.loginButton.click();
  }

  async login(email: string, password: string) : Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() : Promise<string> {
    return (await this.errorMessage.textContent()) || '';
  }
}